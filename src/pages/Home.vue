<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class ="center-container">
        <h1>Bienvenido a un tutorial de un CRUD en Vue.js</h1>
        <RouterLink :to="`/publicaciones`" class="btn btn-green">Ver los post</RouterLink>
    </div>
</template>