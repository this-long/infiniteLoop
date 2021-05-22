<template>
  <div class="topic-create">
    <HomeNav>/ 发布话题</HomeNav>
    <!-- 下拉框：板块属性 -->
    <div class="editor-top">
      <label for="topicType">选择板块 : </label>
      <el-select
        id="topicType"
        v-model="typeValue"
        placeholder="请选择"
        style="margin-left: 10px"
      >
        <el-option
          v-for="item in topicType"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
    </div>
    <div class="editor-title">
      <el-input placeholder="标题字数10字以上" v-model="titleInput" clearable>
      </el-input>
    </div>
    <div class="editor-main">
      <editor
        api-key="9mieih2cqsubf30b1omff3w107ojvjfvzhmb7haq4giiy754"
        v-model="titleContent"
        :init="{
          height: 700,
          menubar: false,
          language: 'zh_CN',
          resize: 'false',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount ',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
        }"
      />
    </div>
    <div class="editor-buttom">
      <el-button :plain="true" type="info" @click="isSubmit()">提交</el-button>
    </div>
  </div>
</template>
<script>
import TurndownService from "turndown";
import axios from "../plugin/axios";
import Editor from "@tinymce/tinymce-vue";
import { mapMutations, mapState } from "vuex";
import HomeNav from "../components/HomeNav.vue";

// let TurndownService = require("turndown");

// let turndownService = new TurndownService();

export default {
  components: {
    editor: Editor,
    HomeNav,
  },
  data() {
    return {
      typeValue: "",
      titleInput: "",
      titleContent: "",
      topicType: [
        {
          value: "share",
          label: "分享",
          disabled: true,
        },
        {
          value: "ask",
          label: "问答",
          disabled: true,
        },
        {
          value: "job",
          label: "招聘",
          disabled: true,
        },
        {
          value: "dev",
          label: "客户端测试",
        },
      ],
      textContent: "",
    };
  },
  created() {
    this.falseCreate();
    if (this.createTopic.editTopic !== null) {
      console.log(this.createTopic.editTopic);
      const { tab, title, content } = this.createTopic.editTopic.data;
      this.typeValue = tab;
      this.titleInput = title;
      let turndownService = new TurndownService();
      let markdown = turndownService.turndown(content);
      console.log(markdown);
      markdown.replace(" ", "<br>");
      console.log(markdown.replace(" ", "<br>"));
      this.titleContent = markdown.replace(/[\f\n\r\t\v]/g, "<br>");
    }
  },
  beforeDestroy() {
    this.trueCreate();
    this.clearEditTopic();
  },
  computed: {
    ...mapState(["singUp", "createTopic"]),
  },
  methods: {
    ...mapMutations(["trueCreate", "falseCreate", "clearEditTopic"]),
    async isSubmit() {
      var activeEditor = tinymce.activeEditor;
      var editBody = activeEditor.getBody();
      activeEditor.selection.select(editBody);
      this.textContent = activeEditor.selection.getContent({
        format: "text",
      });
      // console.log(this.textContent);
      if (this.typeValue === "") {
        this.$message({
          message: "请先选择话题板块",
          type: "warning",
        });
      } else if (this.titleInput === "" || this.titleInput.length < 10) {
        this.$message({
          message: "请输入10字以上的标题",
          type: "warning",
        });
      } else {
        let res = null;
        if (this.createTopic.editTopic !== null) {
          res = await axios.post(`/topics/update`, {
            accesstoken: sessionStorage.getItem("accesstoken"),
            topic_id: this.createTopic.editTopic.data.id,
            title: this.titleInput,
            tab: this.typeValue,
            content: this.textContent,
          });
          if (res.success) {
            this.titleInput = "";
            this.titleContent = "";
            this.$message({
              message: "恭喜你，编辑话题成功",
              type: "success",
            });
          }
        } else {
          res = await axios.post(`/topics`, {
            accesstoken: sessionStorage.getItem("accesstoken"),
            title: this.titleInput,
            tab: this.typeValue,
            // content: this.titleContent,
            //这个是经过渲染的格式，与cnode的markdown渲染出现了冲突，但获取纯文本的话颜色就无法生效了。
            content: this.textContent,
          });
          if (res.success) {
            this.titleInput = "";
            this.titleContent = "";
            this.$message({
              message: "恭喜你，发布话题成功",
              type: "success",
            });
          }
        }

        // console.log(this.titleInput, this.titleContent);
      }
    },
  },
};
</script>

<style lang='less'>
.topic-create {
  .editor-top {
    padding: 8px 0;
  }
  .editor-title {
    padding-bottom: 8px;
  }
  .editor-buttom {
    padding: 8px 0;
  }
}
</style>