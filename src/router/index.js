import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect:'/home'
        }, {
            path: '/home',
            component:()=>import('../views/home.vue')
        }, {
            path: '/about',
            component:()=>import('../views/about.vue')
        }
    ]
})

export default router;