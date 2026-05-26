<script setup>
import axios from 'axios';
import { defineProps } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    publicacion: Object
});

const deletePublicacion = async (publicacionId) =>{
    try {
        const confirm = window.confirm('Estás seguro de que quieres eliminar esta publicación?')
        if(confirm){
            await axios.delete(`https://localhost:8080/publicaciones/${publicacionId}`);
            router.push('/');
        }
    } catch(error){
        console.error("Error en el Fetch", error)
    }
}

</script>


<template>
    <tr>
            <td>{{ publicacion.id }}</td>
            <td>{{ publicacion.title}}</td>
            <td>
                <RouterLink :to="`/publicaciones/${publicacion.id}`" class="btn btn-green">O</RouterLink>
                <RouterLink :to="`/publicaciones/edit/${publicacion.id}`" class="btn btn-blue">/</RouterLink>
                <button @click="deletePublicacion(publicacion.id)" class="btn btn-red">x</button>
            </td>
        </tr>
</template>