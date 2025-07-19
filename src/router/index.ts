import { createRouter, createWebHistory } from 'vue-router'
import Landpage from '@/views/Landpage.vue'
import Vitrine from '@/views/Vitrine.vue'
import SobreNos from '@/views/SobreNos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landpage',
      component: Landpage,
    },
    {
      path: '/sobre-nos',
      name: 'sobre-nos',
      component: SobreNos,
    },
    {
        path: '/vitrine',
        name: 'vitrine',
        component: Vitrine
    }
  ],
})

export default router
