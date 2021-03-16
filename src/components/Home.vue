<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "Home",
  // 这两个函数只有该组件被保持了状态使用了keep-alive时，才是有效的
  activated(){
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  },
  created() {
    console.log('Home created');
  },
  destroyed() {
    console.log('Home destroyed');
  }
}
</script>

<style scoped>

</style>
