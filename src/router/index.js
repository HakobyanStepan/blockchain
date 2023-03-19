import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage/HomePage.vue'
import ProductPage from '@/pages/ProductPage/ProductPage.vue'
import CatalogPage from '@/pages/CatalogPage/CatalogPage.vue'
import AboutUsPage from '@/pages/AboutUsPage/AboutUsPage.vue'
import ContactUs from '@/pages/ContactUs/ContactUs.vue'
import AboutBlockChainPage from '@/pages/AboutBlockChainPage/AboutBlockChainPage.vue'

Vue.use(Router)


const routes= [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },  
    {
      path:"/blockchain",
      name:"AboutBlockChainPage",
      component:AboutBlockChainPage
    },
    {
      path:"/catalog",
      name:"CatalogPage",
      component:CatalogPage
    },
    {
      path:"/about_us",
      name:"AboutUsPage",
      component:AboutUsPage
    },
    {
      path:"/contact_us",
      name:"ContactUs",
      component:ContactUs,
    },
    {
      path:"/:id",
      name:"ProductPage",
      component:ProductPage
    },
    
  ]

const router = new Router ({
   mode:'history',
    routes,
    scrollBehavior() {
      document.getElementById('app').scrollIntoView({top: 0  }); 
  }
})

export default router
