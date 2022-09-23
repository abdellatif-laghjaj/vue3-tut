import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {transition: 'slide-left'},
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: () => import('@/views/jobs/Jobs.vue'),
    },
    {
        path: '/jobs/:id',
        name: 'Job',
        component: () => import('@/views/jobs/JobDetails.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {transition: 'slide-left'},
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
        meta: {transition: 'slide-left'},
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;