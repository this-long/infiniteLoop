<template>
  <div class="author-news">
    <HomeNav>/ 个人主页</HomeNav>
    <div class="author-main">
      <div class="author-all">
        <LittleHeader>作者信息</LittleHeader>
        <div class="all-main">
          <div class="all-main-title">
            <img
              @click="userDetails(authorNews.userDetails.data.loginname)"
              :src="authorNews.userDetails.data.avatar_url"
              alt=""
            />
            <span>{{ authorNews.userDetails.data.loginname }}</span>
          </div>
          <p class="score">{{ authorNews.userDetails.data.score }} 积分</p>
          <p>注册时间 {{ authorNews.userDetails.data.create_at | FromNow }}</p>
          <router-link
            :to="`/user/${authorNews.userDetails.data.loginname}/collections`"
            >{{ authorNews.userCollections.data.length }}个话题收藏</router-link
          >
        </div>
      </div>
      <div class="author-topic">
        <LittleHeader>最近创建的话题</LittleHeader>
        <div class="all-list">
          <div
            class="topic-main list"
            v-for="ele in authorNews.userDetails.data.recent_topics"
            :key="ele.id"
          >
            <div class="list-left">
              <img
                @click="userDetails(ele.author.loginname)"
                class="authorNews"
                :src="ele.author.avatar_url"
                alt=""
              />
              <span></span>
              <router-link :to="`/topic/${ele.id}`">{{
                ele.title
              }}</router-link>
            </div>
            <span>{{ ele.last_reply_at | FromNow }}</span>
          </div>
        </div>
      </div>
      <div class="author-talk">
        <LittleHeader>最近参与的话题</LittleHeader>
        <div class="all-list">
          <div
            class="topic-main list"
            v-for="ele in authorNews.userDetails.data.recent_replies"
            :key="ele.id"
          >
            <div class="list-left">
              <img
                @click="userDetails(ele.author.loginname)"
                class="authorNews"
                :src="ele.author.avatar_url"
                alt=""
              />
              <span></span>
              <router-link :to="`/topic/${ele.id}`">{{
                ele.title
              }}</router-link>
            </div>
            <span>{{ ele.last_reply_at | FromNow }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import HomeNav from "../components/HomeNav.vue";
import LittleHeader from "../components/LittleHeader.vue";
export default {
  components: { HomeNav, LittleHeader },
  //刷新不设置的话销毁时候回去就回不来了
  created() {
    this.getUserDetails(this.$route.params.authorname);
    // console.log(this.authorNews);
    this.getCollection(this.$route.params.authorname);
    // console.log(this.$route.params.authorname);
  },

  watch: {
    "$route.params.authorname"(newValue, oldValue) {
      //   console.log(newValue);
      this.getUserDetails(newValue);
      return this.$route.params.authorname;
    },
  },
  computed: {
    ...mapState(["authorNews", "singUp"]),
  },
  methods: {
    ...mapMutations(["getUserDetails", "defaultUserDetails", "getCollection"]),
    userDetails(user) {
      this.getUserDetails(user);
      if (user !== this.$route.params.authorname)
        if (this.authorNews.userDetails.success) {
          this.$router.push(`/user/${user}`);
        }
    },
  },
  beforeDestroy() {
    // console.log(this.singUp);
    if (this.singUp.isSing) {
      this.getUserDetails(this.singUp.userall.loginname);
    } else {
      this.defaultUserDetails();
    }
  },
};
</script>

<style lang='less'>
.author-news {
  .author-main {
    > div {
      .little-header {
        font-size: 14px;
        margin-top: 40px;
      }
    }
    //细化样式
    .all-main {
      padding: 10px;
      border: 1px solid #3b4348;
      font-size: 12px;
      .all-main-title {
        img {
          width: 40px;
          height: 40px;
          margin-right: 5px;
        }
        span {
          color: #778087;
          display: inline-block;
          //   margin-top: -10px;
        }
      }
      .score {
        color: #333;
      }
      p {
        color: #ababab;
      }
    }
    //公共样式
    .all-list {
      border: 1px solid #3b4348;
      .list {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #f0f0f0;
        .list-left {
          position: relative;
        }
        img {
          width: 30px;
          height: 30px;
          position: absolute;
          border-radius: 3px;
        }
        a {
          margin-left: 40px;
          line-height: 34px;
        }
        a:hover {
          text-decoration: underline;
        }
        span {
          line-height: 34px;
        }
      }
    }
    //创建的话题
    // .author-topic {
    // }
  }
}
</style>