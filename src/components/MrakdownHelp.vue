<template>
  <div class="markdown-help">
    <div class="markdown">
      <div class="markdown-title"><span>Markdown 语法参考</span></div>

      <div class="markdown-main">
        <ul>
          <li>### 单行的标题</li>
          <li>**粗体**</li>
          <li>`console.log('行内代码')`</li>
          <li>```js\n code \n```</li>
          <li>标记代码块</li>
          <li>[内容](链接) ![文字说明](图片链接)</li>
        </ul>
        <a href="https://segmentfault.com/markdown">Markdown 文档</a>
      </div>
    </div>
    <div class="talk-help">
      <div class="help-title">
        <span>Markdown 语法参考</span>
      </div>
      <div class="help-main">
        <ul>
          <li>尽量把话题要点浓缩到标题里</li>
          <li>暂时只能将话题发布在客户端测试板块内</li>
          <li>每个账号每天只能发布七次话题</li>
          <li>暂时不支持删除发布的话题</li>
          <li>有问题请联系作者</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.markdown-help {
  ul {
    font-size: 13px;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    li {
      line-height: 26px;
      color: #333;
    }
  }
  .markdown {
    font-size: 13px;

    .markdown-title {
      line-height: 40px;
      padding: 0 10px;
      background-color: #3b4348;
      span {
        color: white;
      }
    }
    .markdown-main {
      padding: 10px;
      border: 1px solid #3b4348;

      a {
        color: #778087;
        line-height: 26px;
        // margin: 8px 0;
      }
      a:hover {
        text-decoration: solid 1px #333;
        text-decoration-line: underline;
      }
    }
  }
  .talk-help {
    margin-top: 40px;
    .help-title {
      line-height: 40px;
      padding: 0 10px;
      background-color: #3b4348;
      span {
        color: white;
      }
    }
    .help-main {
      padding: 10px;
      border: 1px solid #3b4348;
    }
  }
}
</style>