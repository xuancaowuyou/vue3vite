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
router.beforeEach((to, from) => {
    //console.log(to)
    // ...
    // 返回 false 以取消导航
    // return false
  })
export default router;