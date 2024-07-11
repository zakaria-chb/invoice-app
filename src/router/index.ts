import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Facture APP',
      },
    },
    {
      path: '/nouvelle-facture',
      name: 'nouvelle-facture',
      component: () => import('@/views/NewInvoice.vue'),
      meta: {
        title: 'Nouvelle Facture',
      },
    },
    {
      path: '/facture/:id',
      name: 'informations-facture',
      component: () => import('@/views/InfoInvoice.vue'),
      props: true,
      meta: {
        title: 'Informations Facture',
      },
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound,
      meta: {
        title: 'Page non trouvé',
      },
    },

  ]
})


router.beforeEach((to, from, next) => {
  document.title = (to.meta?.title as string)
  next();
});

export default router

