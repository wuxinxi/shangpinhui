import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: () => import('@/pages/home/Home.vue'),
        meta: {
            showFooter: true
        }
    },
    {
        path: '/login',
        component: () => import('@/pages/login/Login.vue'),
        meta: {
            showFooter: false
        }
    },
    {
        path: '/register',
        component: () => import('@/pages/register/Register.vue'),
        meta: {
            showFooter: false
        }
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/pages/search/Search.vue'),
        meta: {
            showFooter: true
        }
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