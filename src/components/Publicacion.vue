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
            await axios.delete(`http://localhost:8080/publicaciones/${publicacionId}`);
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
            <td width="10%">
                <table cellpadding="5" cellspacing="0">
                    <tr>
                        <td>
                            <RouterLink :to="`/publicaciones/${publicacion.id}`" class="btn btn-green" >O</RouterLink>
                        </td>
                        <td>
                            <RouterLink :to="`/publicaciones/edit/${publicacion.id}`" class="btn btn-blue">/</RouterLink>
                        </td>
                        <td>
                            <button @click="deletePublicacion(publicacion.id)" class="btn btn-red">x</button>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
</template>

<style scoped>
.btn {
    padding: 1px 3px;
    margin: 0 5px;
    text-decoration: none;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    color: #333;
}

.btn:hover {
    background-color: #e0e0e0;
}

.btn-green {
    background-color: #d4edda;
    color: #155724;
}

.btn-green:hover {
    background-color: #c3e6cb;
}

.btn-blue {
    background-color: #cce5ff;
    color: #004085;
}

.btn-blue:hover {
    background-color: #b3d7ff;
}

.btn-red {
    background-color: #f8d7da;
    color: #721c24;
}

.btn-red:hover {
    background-color: #f1b0b7;
}
</style>