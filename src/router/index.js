import {createRouter, createWebHistory} from 'vue-router'
import Form from "@/components/Form";
import Success from "@/components/Success";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Form
    },
    {
        path: '/success',
        name: 'success',
        component: Success
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
