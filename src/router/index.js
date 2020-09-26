import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import MainPage from '../views/Home/MainPage/MainPage.vue'
import Explore from '../views/Home/Explore/Explore.vue'
import OpenSource from '../views/Home/OpenSource/OpenSource.vue'
import About from '../views/Home/AboutMe/About.vue'
import Article from '../views/Home/MainPage/Article.vue'
//import AddArticle from '../views/Home/MainPage/AddArticle.vue'

Vue.use(VueRouter)

  const routes = [
  {
    //默认重定向到home路径
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'home',
    meta:{
      title:"Chiva Studio"
    },
    children:[
      //嵌套子路由
      //主页
      {
        path:'/home',
        component:MainPage,
        meta:{
          title:"Chiva Studio - Home"
        }
      },
      //探索页
      {
        path:'/explore',
        component:Explore,
        meta:{
          title:"Chiva Studio - Explore"
        }
      },
      //开源项目页
      {
        path:'/opensource',
        component:OpenSource,
        meta:{
          title:"Chiva Studio - OpenSource"
        }
      },
      //关于页
      {
        path:'/about',
        component:About,
        meta:{
          title:"Chiva Studio - About"
        }
      },
      {
        path:'/articledetail/:id',
        component:Article,
        meta:{
          title:"Chiva Studio - Article"
        }
      },
      /*
      {
        path:'/addarticle',
        component:AddArticle,
        meta:{
          title:"Chiva Studio - AddArticle"
        }
      }
      */
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
