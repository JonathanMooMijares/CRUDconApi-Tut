import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Publicaciones from '@/components/Publicaciones.vue';

const routes = [
    {path: '/' , name: 'Home', component: Home},
    {path: '/posts' , name: 'Publicaciones', component: Publicaciones}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;