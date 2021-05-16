<template>
  <div class="author-collections">
    <HomeNav>/ {{ $route.params.authorname }} 收藏的话题</HomeNav>
    <div class="collections-main">
      <LittleHeader>收藏</LittleHeader>
      <div class="collections">
        <title-list
          v-for="ele in authorNews.userCollections.data"
          :key="ele.id"
        >
          <div class="title-left">
            <img :src="ele.author.avatar_url" alt="" />
            <span class="reply">{{ ele.reply_count }}</span>
            <span class="g"> / </span>
            <span class="visit">{{ ele.visit_count }}</span>
            <router-link :to="`/topic/${ele.id}`">{{ ele.title }}</router-link>
          </div>
          <div class="title-right">
            <span>{{ ele.create_at | FromNow }}</span>
          </div>
        </title-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import HomeNav from "../components/HomeNav.vue";
import LittleHeader from "../components/LittleHeader.vue";
import TitleList from "../components/TitleList.vue";
export default {
  components: {
    HomeNav,
    LittleHeader,
    TitleList,
  },
  created() {
    this.getUserDetails(this.$route.params.authorname);
    this.getCollection(this.$route.params.authorname);
    console.log(this.authorNews);
    console.log(this.$route.params.authorname);
  },
  computed: {
    ...mapState(["authorNews", "singUp"]),
  },
  methods: {
    ...mapMutations(["getCollection", "getUserDetails", "defaultUserDetails"]),
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
.author-collections {
  .collections-main {
    margin-top: 40px;
    .collections {
      border: 1px solid #3b4348;
    }
  }
}
</style>