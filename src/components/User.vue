<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户的相关信息</p>
    <h2>{{userId}}</h2>
<!--    $route拿到的是当前活跃的路由-->
    <h2>{{$route.params.userId}}</h2>
  </div>

</template>

<script>
export default {
  name: "User",
  computed: {
    userId(){
      return this.$route.params.userId
    },
  },
  created() {
    console.log('User created');
  },
  destroyed() {
    console.log('User destroyed');
  }
}
</script>

<style scoped>

</style>
