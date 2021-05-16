<template>
  <div class="topic-long">
    <HomeNav>/ 文章</HomeNav>
    <div v-if="topic !== ''" class="topic-main">
      <div class="topic-top">
        <span class="type">{{ topic.data | getTitleType }}</span>
        <span class="title">{{ topic.data.title }}</span>
        <div class="title-bottom">
          <ul>
            <li><span />发布于{{ topic.data.create_at | FromNow }}</li>
            <li
              class="authorNews"
              @click="userDetails(topic.data.author.loginname)"
            >
              <span />作者{{ topic.data.author.loginname }}
            </li>
            <li><span />{{ topic.data.visit_count }}次浏览</li>
            <li>
              <span />最后一次编辑是{{ topic.data.last_reply_at | FromNow }}
            </li>
            <li><span />来自{{ topic.data | fromWhere }}</li>
          </ul>
          <!-- 收藏按钮 -->
          <el-button
            @click="addCollection()"
            v-if="singUp.userall"
            type="info"
            size="small"
          >
            {{ topic.data.is_collect ? "取消收藏" : "收藏" }}
          </el-button>
        </div>
        <div
          v-if="
            singUp.userall !== null &&
            topic.data.author_id === singUp.userall.id
          "
          class="edit-topic"
        >
          <span @click="clickEdit()" title="编辑" class="el-icon-edit"></span>
        </div>
      </div>
      <div class="topic-content" v-html="topic.data.content"></div>
      <div class="topic-comments">
        <!-- 评论区 -->
        <LittleHeader>{{ topic.data.replies.length }} 回复</LittleHeader>
        <div class="main-cuntent">
          <div
            v-for="(ele, index) in topic.data.replies"
            :key="ele.id"
            class="topic-comment"
          >
            <div class="author-cuntent">
              <div class="author-left">
                <img
                  class="authorNews"
                  @click="userDetails(ele.author.loginname)"
                  :title="ele.author.loginname"
                  :src="ele.author.avatar_url"
                  alt=""
                />
                <div class="user-info">
                  <a class="name" href="#">{{ ele.author.loginname }}</a
                  ><a class="time" href="#addcomment">
                    {{ index + 1 }}楼 {{ ele.create_at | FromNow }}</a
                  >
                  <span
                    v-if="ele.author.loginname === topic.data.author.loginname"
                    class="ifauthor"
                    >作者</span
                  >
                </div>
              </div>
              <!-- 评论操作 -->
              <div class="author-right">
                <span
                  @click="commentUps(ele, index)"
                  title="点赞"
                  :class="
                    ele.is_uped ? 'el-icon-thumb active' : 'el-icon-thumb'
                  "
                ></span>
                <span>{{ ele.ups.length }}</span>
                <span
                  @click="replyComment(index)"
                  title="回复"
                  class="el-icon-chat-round"
                ></span>
              </div>
            </div>
            <div class="reply-cuntent">
              <p v-html="ele.content"></p>
            </div>
            <div :class="`commentreply  editor${index}`">
              <editor
                api-key="9mieih2cqsubf30b1omff3w107ojvjfvzhmb7haq4giiy754"
                v-model="repliesComment"
                :init="{
                  height: 250,
                  menubar: false,
                  language: 'zh_CN',
                  resize: 'false',
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount ',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
                }"
              />
              <div class="editor-buttom">
                <el-button
                  @click="replyIs(ele, index)"
                  :plain="true"
                  type="info"
                  >回复</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="add-comment" id="addcomment">
        <LittleHeader>添加回复</LittleHeader>
        <div class="add-main">
          <editor
            api-key="9mieih2cqsubf30b1omff3w107ojvjfvzhmb7haq4giiy754"
            v-model="addCommentInput"
            :init="{
              height: 350,
              menubar: false,
              language: 'zh_CN',
              resize: 'false',
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount ',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
            }"
          />
          <div class="editor-buttom">
            <el-button @click="addSelfComment()" :plain="true" type="info"
              >回复</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HomeNav from "../components/HomeNav.vue";
import LittleHeader from "../components/LittleHeader.vue";
import Editor from "@tinymce/tinymce-vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: { HomeNav, LittleHeader, editor: Editor },
  data() {
    return {
      topic: "",
      addCommentInput: "",
      repliesComment: "",
      addType: "",
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.getTopic();
    // this.allCollect();
    // console.log(this.topic);
  },
  computed: {
    ...mapState(["singUp"]),
  },
  methods: {
    //获取文章数据并获取是否收藏点赞。
    async getTopic() {
      const res = await axios.get(
        `/topic/${this.$route.params.id}?accesstoken=${sessionStorage.getItem(
          "accesstoken"
        )}`
      );
      this.topic = res;
      // console.log(res);
    },
    // 添加评论
    async addComment(ele) {
      // 点击获取到评论;
      //判断是否为空
      if (this.addCommentInput !== "" || this.repliesComment !== "") {
        var activeEditor = tinymce.activeEditor;
        var editBody = activeEditor.getBody();
        activeEditor.selection.select(editBody);
        this.addCommentInput = activeEditor.selection.getContent({
          format: "text",
        });
        this.repliesComment = activeEditor.selection.getContent({
          format: "text",
        });
        // console.log(this.addCommentInput);
        if (sessionStorage.getItem("accesstoken") !== null) {
          let commentText = {};
          if (this.addType === "only") {
            commentText = {
              accesstoken: sessionStorage.getItem("accesstoken"),
              content: this.addCommentInput,
            };
          } else if (this.addType === "other") {
            commentText = {
              accesstoken: sessionStorage.getItem("accesstoken"),
              content: `@${ele.author.loginname} ${this.repliesComment}`,
              reply_id: ele.reply_id,
            };
            // console.log("发布了评论");
          }
          const res = await axios.post(
            `/topic/${this.topic.data.id}/replies`,
            commentText
          );
          if (res.success) {
            //不重新发送请求很难完美更新数据。
            const res = await axios.get(`/topic/${this.$route.params.id}`);
            this.topic = res;
            this.addCommentInput = "";
            this.repliesComment = "";
            this.$message({
              message: "恭喜你，成功发布了一条评论",
              type: "success",
            });
          }
          // console.log(res);
        } else {
          this.$message({
            message: "请先登陆，再进行评论",
            type: "warning",
          });
        }
      } else {
        this.$message({
          message: "评论内容不能为空哦",
          type: "warning",
        });
      }
    },
    addSelfComment() {
      this.addType = "only";
      this.addComment();
    },
    // 评论点赞
    async commentUps(ele, index) {
      if (sessionStorage.getItem("accesstoken")) {
        //判断是否是自己
        if (ele.author.loginname !== this.singUp.userall.loginname) {
          const res = await axios.post(`/reply/${ele.id}/ups`, {
            accesstoken: sessionStorage.getItem("accesstoken"),
          });
          if (res.action === "up") {
            this.topic.data.replies[index].ups.push(1);
            this.topic.data.replies[index].is_uped = true;
          } else {
            this.topic.data.replies[index].is_uped = false;
            this.topic.data.replies[index].ups.pop();
          }
        } else {
          this.$message({
            message: "亲，不能给自己点赞哦",
            type: "warning",
          });
        }
      } else {
        this.$message({
          message: "请先登陆，再进行点赞",
          type: "warning",
        });
      }
    },
    //回复评论
    replyComment(index) {
      if (sessionStorage.getItem("accesstoken")) {
        document.querySelector(`.editor${index}`).style.display = "block";
      } else {
        this.$message({
          message: "请先登陆，再回复评论",
          type: "warning",
        });
      }
    },
    replyIs(ele, index) {
      this.addType = "other";
      this.addComment(ele);
      document.querySelector(`.editor${index}`).style.display = "none";
    },
    //作者详情
    ...mapMutations(["getUserDetails", "getEditTopic"]),
    userDetails(user) {
      this.getUserDetails(user);

      this.$router.push(`/user/${user}`);
    },
    //收藏功能
    // 获取用户收藏列表
    async allCollect() {
      const res = await axios.get(
        `/topic_collect/${this.topic.data.author.loginname}`
      );
      // console.log(res);
    },
    //添加取消收藏
    addCollection() {
      let postsrc = "";
      if (this.topic.data.is_collect) {
        postsrc = "de_collect";
        this.topic.data.is_collect = false;
      } else {
        postsrc = "collect";
        this.topic.data.is_collect = true;
      }
      axios.post(`/topic_collect/${postsrc}`, {
        accesstoken: sessionStorage.getItem("accesstoken"),
        topic_id: this.topic.data.id,
      });
    },
    //跳转编辑
    clickEdit() {
      this.getEditTopic(this.topic);
      this.$router.push("/topic/create");
    },
  },
};
</script>

<style lang='less'>
.topic-long {
  .topic-main {
    .topic-top {
      margin-top: 30px;
      border-bottom: 1px solid #333;
      padding: 8px 0;
      padding-bottom: 15px;
      span.type {
        font-size: 12px;
        padding: 2px 4px;
        background-color: #6f7579;
        color: white;
        border-radius: 4px;
        margin-right: 10px;
      }
      span.title {
        font-size: 22px;
        font-weight: 700;
        margin: 8px 0;
        line-height: 35px;
      }
      .title-bottom {
        display: flex;
        justify-content: space-between;
        // line-height: 40px;
        button {
          margin-top: 7px;
          height: 28px;
          font-size: 12px;
          line-height: 14px;
          padding: 5px 10px;
        }
      }
      .edit-topic {
        span {
          margin-left: 8px;
          cursor: pointer;
          color: #838383;
          font-weight: 500;
        }
        span:hover {
          color: #333;
        }
      }
      ul {
        margin: 5px 0;
        padding: 0;
        li {
          margin: 8px;
          list-style: disc;
          list-style-position: inside;
          display: inline-block;
          font-size: 12px;
          color: #838383;
          line-height: 16px;
          span {
            display: inline-block;
            margin-bottom: 3px;
            margin-right: 4px;
            width: 4px;
            height: 4px;
            border-radius: 4px;
            background-color: #838383;
          }
        }
      }
    }
    .topic-content {
      color: #333;
      .markdown-text {
        p {
          line-height: 1.7em;
          font-size: 15px;
        }
        ul {
          li {
            font-size: 14px;
            list-style: disc;
            line-height: 28px;
          }
        }
        h1,
        h2 {
          border-bottom: 1px solid #eee;
          line-height: 40px;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        a {
          color: #6f7579;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
    .topic-comments {
      margin-top: 30px;
      .main-cuntent {
        border: 1px solid #ccc;
        .topic-comment {
          border-top: 1px solid #f0f0f0;
          .author-cuntent {
            position: relative;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            img {
              width: 30px;
              height: 30px;
              border-radius: 3px;
            }
            .user-info {
              position: absolute;
              top: 10px;
              left: 50px;
              display: inline-block;
              font-size: 12px;
              .name {
                color: #666;
                font-weight: 700;
              }
              .name:hover {
                color: #385f8a;
              }
              .time {
                color: #08c;
              }
              .time:hover {
                text-decoration: underline;
              }
              .ifauthor {
                margin-left: 10px;
                padding: 2px 5px;
                border-radius: 3px;
                color: white;
                background-color: #6f7579;
              }
            }
            .author-right {
              span {
                color: #929790;
                font-size: 14px;
                font-weight: 600;
                margin-right: 5px;
              }
              .el-icon-thumb,
              .el-icon-chat-round {
                cursor: pointer;
              }
              .active {
                color: #000;
              }
            }
          }
          .reply-cuntent {
            // overflow: hidden;
            p {
              padding-right: 15px;
              padding-left: 32px;
              margin-top: -20px;
              margin-bottom: 25px;
              img {
                width: 100%;
                height: auto;
              }
            }
          }
          .commentreply {
            display: none;
            padding-left: 50px;
            .tox-tinymce {
              border: none;
              border-top: 1px solid #ccc;
            }
            .tox-statusbar {
              display: none;
            }
            .editor-buttom {
              height: 40px;
              padding-right: 15px;
              margin-bottom: 15px;
              button {
                float: right;
              }
            }
          }
        }
      }
    }
    .add-comment {
      margin-top: 30px;
      .editor-buttom {
        padding: 8px 0;
      }
    }
  }
}
</style>