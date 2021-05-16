<template>
  <div class="nav">
    <router-link to="/">主页 </router-link>
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.nav {
  padding: 14px 0;
  color: #ccc;
  font-size: 13px;
  a {
    color: white;
  }
}
</style>