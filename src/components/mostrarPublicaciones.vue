<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const publicacionId = route.params.id;
const state = reactive({
    publicacion: Object
})

onMounted(async () => {
    try{
        const response = await axios.get(`http://localhost:8080/publicaciones/${publicacionId}`);
        state.publicacion = response.data;
    }catch(error){
        console.log('Error en el Fetch', error);
    }
});
</script>

<template>
    <div class="center-container">
        <h1>{{ state.publicacion.title }}</h1>
        <p>{{ state.publicacion.description }}</p>
        <RouterLink :to="`/publicaciones`" class="btn btn-green">Regresar</RouterLink>
    </div>
</template>