import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from "@/views/Register.vue"
import Detail from "@/views/Detail.vue"
import Profile from "@/views/Profile.vue"
import Search from "@/views/SearchPage.vue"
import { useRecipeStore } from '@/stores/counter'
import DetailService from '@/services/DetailService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/search/:query',
      name: 'search',
      component: Search,
      props: true,
      beforeEnter: async (to) => {
        const query: string = to.params.query as string
        const recipeStore = useRecipeStore()
        await DetailService.searchRecipe(query)
          .then((response) => {
            recipeStore.setCurrentRecipe(response.data)
            console.log(recipeStore.currentRecipe)
          })
      }
    },

  ]
})

export default router
