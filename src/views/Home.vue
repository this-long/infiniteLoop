<template>
  <div class="home">
    <div class="home-nav">
      <router-link class="all-alticles" to="/">全部</router-link>
      <router-link to="/good">精华</router-link>
      <router-link to="/share">分享</router-link>
      <router-link to="/ask">问答</router-link>
      <router-link to="/job">招聘</router-link>
      <router-link to="/dev">客户端测试</router-link>
    </div>
    <div class="home-articles">
      <div class="lodaing" v-if="allArticles.articles === []">
        <img src="../../public/lodaing.gif" alt="" />
      </div>
      <div
        v-for="article in allArticles.articles"
        :key="article.id"
        class="home-article"
      >
        <div class="article-top">
          <img
            @click="userDetails(article.author.loginname)"
            class="authorNews"
            :src="article.author.avatar_url"
            alt=""
          />
          <router-link :to="`/topic/${article.id}`">{{
            article.title
          }}</router-link>
          <!-- <a :href="`/topic/${article.id}`">{{ article.title }}</a> -->
        </div>
        <div class="article-bottom">
          <div class="bottom-left">
            <div class="date">
              <span class="el-icon-date"></span
              >{{ article.create_at | FromNow }}
            </div>
            <div>
              <span class="el-icon-price-tag"></span
              >{{ article | getTitleType }}
            </div>
            <div>
              <span class="el-icon-chat-line-square"></span
              >{{ article.reply_count }}
            </div>
          </div>
          <div class="bottom-right">
            <span class="el-icon-view"></span>{{ article.visit_count }}
          </div>
        </div>
      </div>
      <div class="home-pagination">
        <el-pagination
          :currentPage.sync="currentPage"
          background
          layout="prev, pager, next"
          :page-size="40"
          :total="nowPag"
          @current-change="getCurrentArticles"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      articlesNum: {
        all: 680,
        good: 720,
        share: 440,
        ask: 280,
        job: 240,
        dev: 360,
      },
      nowPag: 680,
      currentPage: 1,
      tab: "",
    };
  },
  created() {
    this.getUnreadNum();
  },
  computed: {
    ...mapState(["allArticles"]),
  },
  watch: {
    //监听路由改变，对应获取文章分类
    "$route.params.tag": {
      handler(newValue) {
        // let tab = "";
        newValue ? (this.tab = `&tab=${newValue}`) : (this.tab = "");
        this.getArticles({ tab: this.tab, page: 1 });
        !newValue
          ? (this.nowPag = 680)
          : newValue === "good"
          ? (this.nowPag = 720)
          : newValue === "share"
          ? (this.nowPag = 440)
          : newValue === "ask"
          ? (this.nowPag = 280)
          : newValue === "job"
          ? (this.nowPag = 240)
          : newValue === "dev"
          ? (this.nowPag = 360)
          : (newValue = 0);
        this.currentPage = 1;
        // console.log(newValue);
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["getArticles"]),

    getCurrentArticles() {
      // console.log(this.currentPage);
      this.getArticles({ tab: this.tab, page: this.currentPage });
    },
    // userDetails(ele) {
    //   console.log(ele);
    // },
    ...mapMutations(["getUserDetails", "getUnreadNum"]),
    userDetails(user) {
      this.getUserDetails(user);

      this.$router.push(`/user/${user}`);
    },
  },
};
</script>
<style lang='less'>
.home {
  background-color: #3b4348;
  width: 100%;
  .home-nav {
    margin: 0 auto;
    width: 1170px;
    padding: 12px 0;

    a {
      font-size: 13px;
      color: #c1cad1;
      display: inline-block;
      padding: 0 10px 0 10px;
    }
    a.all-alticles {
      padding-left: 0px;
    }
    a:hover {
      color: white;
    }
    .router-link-exact-active {
      color: white;
    }
  }
  .home-articles {
    padding: 40px 0;
    background-color: white;
    .home-article {
      margin-bottom: 30px;
      .article-top {
        display: flex;
        margin: 11px 0;
        img {
          margin: auto 0;
          display: block;
          width: 28px;
          height: 28px;
          border-radius: 4px;
          margin-right: 10px;
        }
        a {
          display: block;
          width: 60%;
          line-height: 28px;
          color: #3b4348;
          font-size: 18px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-bottom: 4px;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      .article-bottom {
        line-height: 24px;
        color: #6f7579;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 4px;
        span {
          margin: auto 0;
          display: inline-block;
          font-size: 18px;
          vertical-align: middle;
          font-weight: 600;
          margin-right: 5px;
        }
        .bottom-left {
          display: flex;
          div {
            margin-right: 15px;
          }
          div.date {
            width: 80px;
            margin-right: 0;
          }
        }
        .bottom-right {
          margin-right: 15px;
        }
      }
    }
    .home-pagination {
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #3b4348;
        color: white !important;
      }
      .el-pagination.is-background .el-pager li:not(.disabled):hover {
        color: #ccc;
      }
    }
  }
}
</style>
