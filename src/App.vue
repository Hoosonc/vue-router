<template>
  <div id="app">
    <h2>我是APP组件</h2>
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="li" replace active-class="active">关于</router-link>-->
<!--    通过路由改active-class-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="li" replace >关于</router-link>-->
<!--    <button @click="homeClick">主页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">主页</router-link>
    <router-link to="/about">关于</router-link>
<!--    <router-link :to="/user/+userId">用户</router-link>-->
<!--    <router-link :to="{path:'/profile', query:{name: 'hxc'}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId: 'hxc'
    }
  },
  methods: {
    homeClick(){
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.replace('/user/'+this.userId)
    },
    profileClick(){
      this.$router.replace({
        path: '/profile',
        query:{
          name: 'hxc'
        }
      })
    }
  },
  created() {
    console.log('App created');
  },
  destroyed() {
    console.log('App destroyed');
  }
}
</script>

<style>
  /*.router-link-active{*/
  /*  color: red;*/
  /*}*/
  .active{
    color: red;
  }
</style>
