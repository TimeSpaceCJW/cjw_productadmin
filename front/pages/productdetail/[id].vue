<script setup lang="ts">

import { useFetchApi } from "~/composables/useFetchApi";
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const router = useRouter();
const productId = route.params.id;

//console.log(productId);

const { data : product, error } = await useFetchApi(`/productdetail/${productId}`)

const productDelete = async()=> {
    const { data : product, error } = await useFetchApi(`/productdelete/${productId}`, {
        methods: 'delete',
    })

    return router.push({path: '/product'})
}


const updateProduct = async () => {
    const { data, error } = await useFetchApi(`/productedit/${productId}`, {
        method: 'put',
        body: {
            name: product.value.name,
            detail: product.value.detail,
            price: product.value.price
        }
    })
    console.log(error);
    return router.push({path: '/product'})
}
</script>

<template>
    <h1 class="text-xl opacity-50">
        ADMIN 상품 상세
    </h1>

    <pre v-if="error">상품 조회 불가 : {{ error.data }}</pre>
    <form @submit.prevent="updateProduct">
        <div>
            <label for="name">상품명</label>
            <input type="text" v-model="product.name" id="name"/>
        </div>
        <div>
            <label for="detail">상품 상세정보</label>
            <textarea id="detail" v-model="product.detail"/>
        </div>
        <div>
            <label for="price">금액</label>
            <input type="number" v-model="product.price" id="price"/>
        </div>
        <div>
            <button type="submit">등록</button>
        </div>
    </form>
    <button @click="productDelete()">삭제</button>
</template>

<style scoped>

</style>