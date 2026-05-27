<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import router from '@/router';

const form = reactive({
    title: '',
    descripcion: ''
});

const handleSubmit = async () => {
    const nuevaPublicacion = {
        title: form.title,
        description: form.description
    }
    
    try{
        const response = await axios.post('http://localhost:8080/publicaciones', nuevaPublicacion);
        return router.push('/publicaciones')
    } catch(error){
        console.error('Error en el Fetch', error);
    }
};
</script>

<template>
    <RouterLink :to="`/publicaciones`" class="btn btn-green">Regresar</RouterLink>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="title">Título</label>
                <input v-model="form.title" type="text" id="title" name="title" placeholder="Título">
            </div>
            
            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea v-model="form.description" id="description" name="description"></textarea>
            </div>
            <button type="submit" class="btn btn-green">Subir</button>
        </form>
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
    .form-group {
        margin: 50px 50px;
    }

    #title, #description {
        width: 50%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>