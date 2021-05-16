<template>
  <div class="about">
    <HomeNav>/ 关于</HomeNav>
    <div class="about-main">
      <h2>欢迎来到Infinite Loop</h2>
      <img
        src="http://lc-zltjehai.cn-n1.lcfile.com/bcd92251a29608cc176c/welcome.jpg"
        alt=""
      />
      <div class="about-content">
        <h3>介绍</h3>
        <ul>
          <li>我是一名地理信息专修前端的插班生，一路散修到现在。</li>
          <li>
            从JS ==> JQ ==> (LayUI,Bootstrap Jquery22 and so on) ==>
            React(已经还给 Facebook ,准备再捡起来) ==> Vue(一直在深入研究)
          </li>
          <li>(感谢本站的 API 提供，致谢)</li>
          <li>如发现 bug 欢迎大家指出</li>
          <li>有问题欢迎联系作者</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import HomeNav from "../components/HomeNav.vue";
export default {
  components: { HomeNav },
  setup() {},
};
</script>
<style lang='less'>
.about {
  .about-main {
    h2 {
      font-weight: 500;
      margin-bottom: 80px;
    }
    .about-content {
      h3 {
        line-height: 40px;
      }
      ul {
        padding-right: 60px;
        li {
          list-style: disc;
          line-height: 24px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
