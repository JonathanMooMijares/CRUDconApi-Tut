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
            <label for="title">Título</label>
            <input v-model="form.title" type="text" id="title" name="title" placeholder="Título">
            <label for="description">Descripción</label>
            <textarea v-model="form.description" id="description" name="description">
            </textarea>
            <button type="submit" class="btn btn-green">Subir</button>
        </form>
    </div>
</template>