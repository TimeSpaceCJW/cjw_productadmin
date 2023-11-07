<script setup lang="ts">

</script>

<template>
    <h1 class="text-xl opacity-50">
        ADMIN 상품 관리
    </h1>
    <NuxtLink to="/productwrite"><button>등록</button></NuxtLink>
    <p v-if="pending">Fetching...</p>
    <pre v-else-if="error">상품 조회 불가 : {{ error.data }}</pre>
    <table v-else>

    </table>
</template>

<style scoped>

</style>