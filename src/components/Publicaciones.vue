<script setup>
import {onMounted, reactive} from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import Publicacion from '@/components/Publicacion.vue';

const state = reactive ({
    publicaciones: []
})

onMounted(async () => {
    try{
        const response = await axios.get('http://localhost:8080/publicaciones');
        state.publicaciones = response.data;
    } catch(error){
        console.error('Error en el Fetch', error);
    }
});
</script>

<template>
    <div class="center-container">
        <h1>Todas las Publicaciones</h1>
        <RouterLink :to="`/`" class="btn btn-blue">Regresar</RouterLink>
        <RouterLink :to="'/publicaciones/add'" class="btn btn-green">Añadir Publicación</RouterLink>
        <br />
        <br />
        <table id="publicaciones">
            <tr>
                <th>S.N</th>
                <th>Titulo</th>
                <th>Acción</th>
            </tr>
            <Publicacion v-for="publicacion in state.publicaciones" :key="publicacion.id" :publicacion="publicacion"/>
        </table>
    </div>
</template>

<style scoped>
    .btn {
        padding: 5px 10px;
        margin: 0 5px;
        text-decoration: none;
        border: 1px solid #ccc;
        background-color: #f0f0f0;
        color: #333;
    }
</style>