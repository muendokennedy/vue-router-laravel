import { createRouter, createWebHistory } from "vue-router";

import home from '../components/HomePage.vue'
import about from '../components/AboutPage.vue'
import notFound from '../components/NotfoundPage.vue'

const routes = [
    {
        path: '/',
        component: home,
        name: 'home'
    },
    {
        path: '/about',
        component: about,
        name: 'about'
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound,
        name : 'notFound'
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes
})

export default router
