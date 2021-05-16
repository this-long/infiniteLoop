<template>
  <div class="long-head">
    <div class="long-head-inner">
      <router-link class="logo" to="/">Infinite Loop</router-link>
      <div class="nav">
        <router-link to="/">首页</router-link>

        <router-link v-if="singUp.userall" to="/my/message">
          <span v-if="myMessage.unreadNum" class="unread">{{
            myMessage.unreadNum
          }}</span>
          未读消息</router-link
        >
        <router-link to="/rumen">新手入门</router-link>
        <router-link to="/longapi">API</router-link>
        <router-link to="/about">关于</router-link>
        <a @click="clear" v-if="this.singUp.isSing" href="#">退出</a>
        <router-link v-else class="singin" to="/landup">登陆</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      nowSing: false,
    };
  },
  computed: {
    // ...mapState(["singUp"]),
    isLogin() {
      return Boolean(sessionStorage.getItem("isLogin"));
    },
    ...mapState(["singUp", "myMessage"]),
  },
  created() {
    //实时传递登陆状态。
    this.getSing(Boolean(sessionStorage.getItem("isLogin")));
    this.getUnreadNum();
  },

  methods: {
    ...mapMutations([
      "noSing",
      "getSing",
      "clearUserall",
      "getUnreadNum",
      "defaultUserDetails",
    ]),
    clear() {
      //退出登陆，清除浏览器存储
      sessionStorage.removeItem("isLogin");
      sessionStorage.removeItem("userall");
      sessionStorage.removeItem("accesstoken");
      this.noSing();
      this.defaultUserDetails();
    },
  },
};
</script>

<style lang='less'>
.long-head {
  background-color: #3b4348;
  width: 100%;
  // padding: 19px 0;
  border-bottom: 1px solid #c1cad1;
  height: 60px;
  .long-head-inner {
    display: flex;
    justify-content: space-between;
    width: 1170px;
    margin: 0 auto;
    line-height: 22px;
  }
  .logo {
    padding-top: 19px;
    display: block;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .nav {
    padding-top: 19px;
    a {
      font-size: 13px;
      color: #c1cad1;
      display: inline-block;
      padding: 0 16px 0 16px;
    }
    a.singin {
      padding-right: 0px;
    }
    // .unread {
    //   color: ;
    // }
    a:hover {
      color: white;
    }
    .router-link-exact-active {
      color: white;
    }
  }
}
</style>