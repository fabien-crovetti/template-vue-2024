import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n';


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Index.vue'),
        meta: {
            title: i18n.global.t('navigation.pageTitle.index'),
            needAuthentication: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login.vue'),
        meta: {
            title: i18n.global.t('navigation.pageTitle.login'),
            needAuthentication: false,
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/pages/Profile.vue'),
        meta: {
            title: i18n.global.t('navigation.pageTitle.profile'),
            needAuthentication: false,
        },
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});



router.beforeEach(async (to, from, next)=>{

    if(!to.meta || ! to.meta.title){
        document.title = to.name!.toString();
    }
    else{
        document.title = to.meta.title.toString();
    }


    if(!localStorage.getItem("accessToken") && to.name!=='login'){
        next({ name: 'login' })
    }
    else{
        next()
    }





})


export default router
