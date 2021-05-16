<template>
  <div class="title-list">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.title-list {
  border-bottom: 1px solid #f0f0f0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .title-left {
    position: relative;
    line-height: 30px;
    img {
      position: absolute;
      width: 30px;
      height: 30px;
    }
    span {
      font-size: 12px;
    }
    .reply {
      margin-left: 40px;
      font-size: 13px;
    }
    .g {
      color: #333;
    }
    .visit {
      color: #b4b4b4;
      margin-right: 10px;
    }
    a {
      font-size: 14px;
      color: #333;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .title-right {
    span {
      font-size: 11px;
      color: #778087;
    }
  }
}
</style>