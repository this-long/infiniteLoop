<template>
  <div class="sing-up">
    <div class="sing-left">
      <h3 v-if="!singUp.userall && authorNews.userDetails.success === null">
        个人信息
      </h3>
      <h3 v-else>{{ authorNews.userDetails.data.loginname }}</h3>
      <p class="user-score" v-if="singUp.userall">
        积分：{{ authorNews.userDetails.data.score }}
      </p>
      <p v-if="!singUp.userall && authorNews.userDetails.success === null">
        登陆以查看更多详细内容
      </p>

      <button @click="tocreate()" class="singBtn" v-if="singUp.userall">
        发布话题
      </button>
    </div>
    <div class="sing-right">
      <img
        v-if="!singUp.userall && authorNews.userDetails.success === null"
        :src="userImg"
        alt=""
      />
      <img
        @click="userDetails()"
        class="authorNews"
        v-else
        :src="authorNews.userDetails.data.avatar_url"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      userImg:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      // isSign: null,
    };
  },
  created() {
    this.getUserall(JSON.parse(sessionStorage.getItem("userall")));
    if (this.singUp.userall) {
      this.getUserDetails(this.singUp.userall.loginname);
      // console.log(res);
    }
  },
  computed: {
    ...mapState(["singUp", "authorNews"]),
  },
  methods: {
    ...mapMutations(["getUserall", "getUserDetails"]),
    tocreate() {
      this.$router.push("/topic/create");
    },
    userDetails() {
      // const token = sessionStorage.getItem("accesstoken");
      // if()
      const username = this.authorNews.userDetails.data.loginname;
      if (this.$route.params.authorname !== username) {
        this.getUserDetails(username);
        // console.log(this.authorNews.userDetails.success);
        if (this.authorNews.userDetails.success) {
          this.$router.push(`/user/${username}`);
        }
      }
    },
  },
};
</script>

<style lang='less'>
.sing-up {
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #e9e6c4;
  background-color: #fefbdc;
  display: flex;
  justify-content: space-between;
  .sing-left {
    width: 248px;
    h3 {
      color: #3b4348;
    }
    p {
      font-size: 14px;
      color: #6f7579;
    }
    .user-score {
      margin-top: 0;
    }
    button {
      background-color: #6f7579;
      color: white;
      padding: 5px 8px;
      border: none;
      cursor: pointer;
      line-height: 20px;
      border-radius: 4px;
    }
  }
  .sing-right {
    width: 60px;
    height: 60px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
}
</style>