<script setup lang="ts">

import { useFetchApi } from "~/composables/useFetchApi";
import { useRouter } from "vue-router";

const { data : product, pending, error } = await useFetchApi('/product')

const router = useRouter()

const productEdit = id => router.push({
    name: 'productdetail-id',
    params: {id: id}
});

</script>

<template>
    <h1 class="text-xl opacity-50">
        ADMIN 상품 관리
    </h1>
    <NuxtLink to="/productwrite"><button>등록</button></NuxtLink>
    <p v-if="pending">Fetching...</p>
    <pre v-else-if="error">상품 조회 불가 : {{ error.data }}</pre>
    <table v-else>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">상품명</th>
            <th scope="col">상품 상세정보</th>
            <th scope="col">금액</th>
        </tr>
        <tr v-for="item in product">
            <td>{{ item.id }}</td>
            <td @click="productEdit(item.id)">{{ item.name }}</td>
            <td>{{ item.detail }}</td>
            <td>{{ item.price }}</td>
        </tr>
    </table>
</template>

<style scoped>

</style>