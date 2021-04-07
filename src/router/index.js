import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')
const Profile = () => import('../components/Profile')
Vue.use(Router)

const router = new Router({
  mode: "history",
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/home'
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/home',
      // name: 'Home',
      component: Home,
      meta: {
        title: '主页'
      },
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          name: 'HomeNews',
          component: HomeNews
        },
        {
          path: 'message',
          name: 'HomeMessage',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ]
})
// 前置守卫
router.beforeEach((to, from, next) =>{
  // 这里的meta就是上面路由配的meta
  document.title = to.matched[0].meta.title
  // console.log('before');
  next()
})
// 后置守卫
router.afterEach((to, from) => {
  // console.log('after');
})
export default router
