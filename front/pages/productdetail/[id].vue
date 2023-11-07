<script setup lang="ts">

import { useFetchApi } from "~/composables/useFetchApi";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id;
console.log(productId);

const { data : product, error } = await useFetchApi(`/productdetail/${productId}`)


</script>

<template>
    <h1 class="text-xl opacity-50">
        ADMIN 상품 상세
    </h1>

    <table>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">상품명</th>
            <th scope="col">상품 상세정보</th>
            <th scope="col">금액</th>
        </tr>
        <tr>
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.detail }}</td>
            <td>{{ product.price }}</td>
        </tr>
    </table>
</template>

<style scoped>

</style>