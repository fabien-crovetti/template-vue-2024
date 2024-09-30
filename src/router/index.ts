import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n';


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/index.vue'),
        meta: {
            title: i18n.global.t('navigation.pageTitle.index'),
            needAuthentication: true,
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


    next()

})


export default router
