<template>
  <div class="main-app">
    <!-- 头部 -->
    <LongHead />
    <div class="nav-bck"></div>
    <div class="main-body">
      <div class="body-left"><router-view /></div>
      <div v-if="!(singUp.singup || createTopic.isCreate)" class="body-right">
        <SingUp />
        <div class="friend-help">
          <h3>友情帮助</h3>
          <div class="img">
            <img
              class="code"
              src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
              alt=""
            />
            <img class="demo" src="../../public/logo.png" alt="" />
            <img src="../../public/20171221193307749.png" alt="" />
          </div>
        </div>
        <div class="call-our">
          <h3>联系作者</h3>
          <div class="minpian">
            <img src="../../public/mmqrcode1620041651603.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 发布页右侧独有展示 -->
      <div v-if="createTopic.isCreate" class="body-right">
        <MrakdownHelp />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LongHead from "../components/LongHead.vue";
import MrakdownHelp from "../components/MrakdownHelp.vue";
import SingUp from "../components/SingUp.vue";
export default {
  components: { LongHead, SingUp, MrakdownHelp },
  created() {
    // console.log(this.createTopic.isCreate);
    // console.log(this.nowRouter);
  },
  computed: {
    ...mapState(["singUp", "createTopic"]),
    // nowRouter() {
    //   return this.$route;
    // },
  },
};
</script>

<style lang='less'>
.main-app {
  position: relative;
  margin-bottom: 25px;
  .nav-bck {
    width: 100%;
    height: 45px;
    position: absolute;
    top: 60px;
    left: 0px;
    background-color: #3b4348;
    z-index: -1;
  }
  .main-body {
    width: 1170px;
    margin: 0 auto;
    display: flex;
    .body-left {
      width: 770px;
    }
    .body-right {
      margin-left: 30px;
      width: 370px;
      padding-top: 84px;
      > div {
        h3 {
          font-weight: 600;
          font-size: 20px;
          line-height: 44px;
        }
        .img {
          padding-left: 40px;
          img {
            display: block;
            height: auto;
            width: 150px;
            padding: 8px;
          }
          img.code,
          img.demo {
            background-color: #444;
            margin-bottom: 15px;
          }
        }
      }
      .call-our {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>