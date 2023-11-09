<script setup lang="ts">

import { useFetchApi } from "~/composables/useFetchApi";
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
    name : '',
    detail: '',
    price: '',
})

const submitProduct = async() => {
    const {data : product, error } = await useFetchApi('/productsave', {
        method: 'post',
        body:{
            name: formData.value.name,
            detail: formData.value.detail,
            price: formData.value.price
        }
    })
    return router.push({path: '/product'})
}


</script>

<template>
    <h1 class="text-xl opacity-50">
        ADMIN 상품 등록
    </h1>
    <form @submit.prevent="submitProduct">
        <div>
            <label for="name">상품명</label>
            <input type="text" v-model="formData.name" id="name" placeholder="상품명을 입력하세요."/>
        </div>
        <div>
            <label for="detail">상품 상세정보</label>
            <textarea id="detail" v-model="formData.detail" placeholder="상품 상세정보를 입력하세요."/>
        </div>
        <div>
            <label for="price">금액</label>
            <input type="number" v-model="formData.price" id="price" placeholder="금액을 입력하세요."/>
        </div>
        <div>
            <button type="submit">등록</button>
        </div>
    </form>
</template>

<style scoped>

</style>