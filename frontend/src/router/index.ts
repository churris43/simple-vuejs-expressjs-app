import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
import ApplicationsView from '../views/ApplicationsView.vue';
import NewApplicationView from '../views/NewApplicationView.vue';
import ApplicationView from '../views/ApplicationView.vue';
import EditApplicationView from '../views/EditApplicationView.vue';
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
            path: '/application/:id',
            name: 'view-application',
            component: ApplicationView,
        },
        {
            path: '/application/edit/:id',
            name: 'edit-application',
            component: EditApplicationView,
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