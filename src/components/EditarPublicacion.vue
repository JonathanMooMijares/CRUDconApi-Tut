<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const publicacionId = route.params.id;

const form = reactive({
    title: '',
    description: ''
})

onMounted(async () => {
    try{
        const response = await axios.get(`http://localhost:8080/publicaciones/${publicacionId}`);
        form.title = response.data.title;
        form.description = response.data.description;
    }catch(error){
        console.error('Error en el Fetch', error);
    }
})

const handleSubmit = async () => {
    const actualizarPost = {
        title: form.title,
        description: form.description
    }
    try{
        const response = await axios.put(`http://localhost:8080/publicaciones/${publicacionId}`, actualizarPost);
        router.push(`/publicaciones/${response.data.id}`);
    }catch(error){
        console.error('Error en el Fetch', error);
    }
}
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
                <textarea v-model="form.description" id="description" name="description">
                </textarea>
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