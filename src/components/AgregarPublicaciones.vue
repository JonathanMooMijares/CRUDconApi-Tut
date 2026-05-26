<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import router from '@/router';

const form = reactive({
    title: '',
    descripcion: ''
});

const handleSubmit = async () => {
    const actualizarPublicacion = {
        title: form.title,
        descripcion: form.descripcion
    }
    
    try{
        const response = await axios.put(`https://localhost:8080/publicaciones/${publicacionId}`);
        router.push(`/posts/${response.data.id}`);
    } catch(error){
        console.error('Error en el Fetch', error);
    }
};
</script>

<template>
    <RouterLink :to="`/posts`" class="btn btn-green">Regresar</RouterLink>
    <div>
        <form @submit.prevent="handleSubmit">
            <label for="title">Título</label>
            <input v-model="form.title" type="text" id="title" name="title" placeholder="Título">
            <label for="description">Descripción</label>
            <textarea v-model="form.descripcion" id="description" name="description">
            </textarea>
            <button type="submit" class="btn btn-green">Subir</button>
        </form>
    </div>
</template>