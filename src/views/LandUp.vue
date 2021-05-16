<template>
  <div class="land-up">
    <div class="land-inner">
      <div class="inner-top">
        <router-link class="logo" to="/">Infinite Loop</router-link>
      </div>
      <div class="inner-midel">
        <div class="inner-user">
          <!-- <label for="user">用户名</label> -->
          <span class="el-icon-user"></span>
          <input type="text" id="user" />
        </div>
        <div class="inner-token">
          <!-- <label for="token">Token</label> -->
          <span class="el-icon-lock"></span>
          <input type="text" id="token" v-model.trim="token" />
        </div>
        <div class="inner-bottom">
          <button @click="denglu()">登陆</button>
          <p>账号: 任意填写</p>
          <p>Token: 3e8981b5-83ff-4b5b-a215-b6ef3b2c67f1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      token: "",
    };
  },
  created() {
    this.flaseSingUp();
  },
  computed: {
    ...mapState(["singUp"]),
  },
  methods: {
    ...mapMutations(["flaseSingUp", "trueSingUp", "getToken", "getUserall"]),

    async denglu() {
      this.$axios
        .post("/accesstoken ", { accesstoken: this.token })
        .then((ele) => {
          this.getToken(ele);
          sessionStorage.setItem("isLogin", true);
          sessionStorage.setItem("userall", JSON.stringify(ele));
          sessionStorage.setItem("accesstoken", this.token);
          this.getUserall(ele);
          this.$router.push("/");
          // console.log(ele);
        })
        .catch((err) => {
          alert("token 错了");
          // console.log(err);
        });
    },
  },
  beforeDestroy() {
    this.trueSingUp();
  },
  denglu() {},
};
</script>

<style lang='less'>
.land-up {
  width: 1170px;
  margin-top: 80px;
  .land-inner {
    border-radius: 6px;
    padding: 20px 20px;
    width: 600px;
    background-color: #3b4348;
    // background: rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    .inner-top {
      margin-bottom: 25px;
      a {
        display: block;
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
    .inner-midel {
      > div {
        width: 400px;
        margin: 0 auto;
        margin-bottom: 20px;
        position: relative;
        // label {
        //   color: white;
        //   width: 65px;
        //   display: inline-block;
        // }
        span {
          position: absolute;
          color: #8f98a0;
          top: 50%;
          transform: translateY(-50%);
          left: 6px;
        }
        input {
          width: 400px;
          padding: 0 25px;
          //   background: rgba(0, 0, 0, 0.1);
          line-height: 35px;
          border-radius: 3px;
          border: none;
        }
      }
    }
    .inner-bottom {
      button {
        display: block;
        margin: 0 auto;
        background-color: #8f98a0;
        color: white;
        line-height: 25px;
        width: 70%;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        margin-bottom: 15px;
      }
      p {
        color: #8f98a0;
        font-size: 10px;
        margin: 8px;
      }
    }
  }
}
</style>