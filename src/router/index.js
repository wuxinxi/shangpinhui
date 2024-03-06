import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: () => import('@/pages/home/Home.vue')
    },
    {
        path: '/login',
        component: () => import('@/pages/login/Login.vue')
    },
    {
        path: '/register',
        component: () => import('@/pages/register/Register.vue')
    },
    {
        path: '/search',
        component: () => import('@/pages/search/Search.vue')
    },
    {
        path: '/',
        //如果是/ 则重定向到 home 页面
        redirect: '/home'
    }
]

export default new VueRouter({
    routes
})