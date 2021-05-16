<template>
  <div class="unread-message">
    <HomeNav>/ 未读消息</HomeNav>
    <div class="new-message">
      <little-header>新消息</little-header>
      <div
        v-if="myMessage.messages.data.hasnot_read_messages.length > 0"
        class="new-main"
      >
        <div
          class="message-list"
          v-for="ele in myMessage.messages.data.hasnot_read_messages"
          :key="ele.id"
        >
          <div v-if="ele.type === 'reply'" class="reply">
            <router-link :to="`/user/${ele.author.loginname}`">{{
              ele.author.loginname
            }}</router-link
            ><span>回复了你的话题</span
            ><router-link :to="`/topic/${ele.topic.id}`">{{
              ele.topic.title
            }}</router-link>
          </div>
          <div v-else class="at">
            <router-link :to="`/user/${ele.author.loginname}`">{{
              ele.author.loginname
            }}</router-link
            ><span>在话题</span
            ><router-link :to="`/topic/${ele.topic.id}`">{{
              ele.topic.title
            }}</router-link
            ><span>中@了你</span>
          </div>
        </div>
      </div>
      <div v-else class="new-main">
        <div class="message-list">
          <span>暂无消息</span>
        </div>
      </div>
    </div>
    <div class="old-message">
      <little-header>过往消息</little-header>
      <div
        class="old-main"
        v-if="myMessage.messages.data.has_read_messages.length > 0"
      >
        <div
          class="message-list"
          v-for="ele in myMessage.messages.data.has_read_messages"
          :key="ele.id"
        >
          <div v-if="ele.type === 'reply'" class="reply">
            <router-link :to="`/user/${ele.author.loginname}`">{{
              ele.author.loginname
            }}</router-link
            ><span> 回复了你的话题 </span
            ><router-link :to="`/topic/${ele.topic.id}`">{{
              ele.topic.title
            }}</router-link>
          </div>
          <div v-else class="at">
            <router-link :to="`/user/${ele.author.loginname}`">{{
              ele.author.loginname
            }}</router-link
            ><span> 在话题 </span
            ><router-link :to="`/topic/${ele.topic.id}`">{{
              ele.topic.title
            }}</router-link
            ><span> 中@了你</span>
          </div>
        </div>
      </div>
      <div v-else class="old-main">
        <div class="message-list">
          <span>暂无消息</span>
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
  data() {
    return {};
  },
  computed: {
    ...mapState(["myMessage"]),
  },
  created() {
    this.getMessage();
    console.log(this.myMessage);
  },
  methods: {
    ...mapMutations(["getMessage", "hasReadMessage"]),
  },
  beforeDestroy() {
    this.hasReadMessage();
  },
};
</script>

<style lang='less'>
.unread-message {
  .little-header {
    font-size: 13px;
    margin-top: 40px;
  }
  .message-list {
    padding: 10px;
    border-top: 1px solid #f0f0f0;
    font-size: 13px;
    a:hover {
      color: #333;
      text-decoration: underline;
    }
  }
  .new-main,
  .old-main {
    border: 1px solid #3b4348;
  }
}
</style>