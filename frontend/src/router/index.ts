import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
import ApplicationsView from '../views/ApplicationsView.vue';
import NewApplicationView from '../views/NewApplicationView.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/applications',
            name: 'applications',
            component: ApplicationsView,
        },
        {
            path: '/new',
            name: 'new',
            component: NewApplicationView,
        },
        {
            path: '/:catchAll(.*)',
            name: "not-found",
            component: NotFound,
        }
    ],
});

export default router;