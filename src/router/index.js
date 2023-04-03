import { createRouter, createWebHistory } from 'vue-router'
import Layout from "../components/Layout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/web-design',
      name: 'Web Design',
      component: () => import('../views/WebDesignView.vue')
    },
    {
      path: "/app-design",
      name: "App Design",
      component: () => import("../views/AppDesignView.vue")
    },
    {
      path: "/graphic-design",
      name: "Graphic Design",
      component: () => import("../views/GraphicDesignView.vue")
    }, 
    {
      path: "/about",
      name: "About",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/locations",
      name: "Locations",
      component: () => import("../views/LocationsView.vue")
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue")
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.layout === undefined) {
    to.meta.layout = Layout
  }
  next()
})

export default router;