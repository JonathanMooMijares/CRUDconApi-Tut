import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Publicaciones from '@/components/Publicaciones.vue';
import MostrarPublicaciones from '@/components/MostrarPublicaciones.vue';
import EditarPublicacion from '@/components/EditarPublicacion.vue';
import AgregarPublicaciones from '@/components/AgregarPublicaciones.vue';


const routes = [
    {path: '/' , name: 'Home', component: Home},
    {path: '/publicaciones' , name: 'Publicaciones', component: Publicaciones},
    {path: '/publicaciones/add' , name: 'AgregarPublicaciones' , component : AgregarPublicaciones},
    {path: '/publicaciones/:id' , name: 'MostrarPublicaciones', component: MostrarPublicaciones},
    {path: '/publicaciones/edit/:id' , name: 'EditarPublicacion', component: EditarPublicacion},
    
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;