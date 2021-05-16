<template>
  <div class="rumen">
    <HomeNav>/ 新手入门</HomeNav>
    <div class="rumen-main">
      <div class="rumen-che" v-for="che in rumenContent" :key="che.id">
        <h2>{{ che.titleMain }}</h2>
        <div v-for="ele in che.titleChe" :key="ele.id" class="che-title">
          <p>
            《<strong>{{ ele.title }}</strong
            >》
          </p>
          <p>
            <a :href="ele.title_url">{{ ele.title_url }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNav from "../components/HomeNav.vue";
export default {
  components: {
    HomeNav,
  },
  data() {
    return {
      rumenContent: [
        {
          id: 1,
          titleMain: "作者笔记整理",
          titleChe: [
            {
              id: "1-1",
              title: "作者主页",
              title_url:
                "https://blog.csdn.net/wewewe14?spm=1001.2101.3001.5343",
            },
            {
              id: "1-2",
              title: "ES6新增内容",
              title_url:
                "https://blog.csdn.net/wewewe14/article/details/114253725?spm=1001.2014.3001.5501",
            },
            {
              id: "1-3",
              title: "页面居中定位",
              title_url:
                "https://blog.csdn.net/wewewe14/article/details/113915651?spm=1001.2014.3001.5501",
            },
          ],
        },
        {
          id: 2,
          titleMain: "Vue 资源",
          titleChe: [
            {
              id: "2-1",
              title: "Vue.js",
              title_url: "https://cn.vuejs.org/",
            },
            {
              id: "2-2",
              title: "Vue Router",
              title_url: "https://router.vuejs.org/zh/",
            },
            {
              id: "2-3",
              title: "Vuex",
              title_url: "https://vuex.vuejs.org/zh/",
            },
          ],
        },
        {
          id: 3,
          titleMain: "本站使用的组件库",
          titleChe: [
            {
              id: "3-1",
              title: "Element - 网站快速成型工具",
              title_url:
                "https://element.faas.ele.me/#/zh-CN/component/message",
            },
            {
              id: "3-2",
              title: "TinyMCE （英文官方文档）",
              title_url:
                "https://www.tiny.cloud/docs/integrations/vue/#installingthetinymcevuejsintegrationusingnpm",
            },
            {
              id: "3-3",
              title: " Less.js 中文文档 ",
              title_url: "https://less.bootcss.com/",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang='less'>
.rumen {
  .rumen-main {
    .rumen-che {
      h2 {
        font-size: 26px;
        border-bottom: 1px solid #333;
        line-height: 40px;
        font-weight: 500;
        margin-top: 30px;
      }

      .che-title {
        a {
          color: #778087;
          font-size: 14px;
          margin-left: 10px;
          margin-right: 100px;
        }
      }
    }
  }
}
</style>