

<template>
  <main>
    <div>
      <label>Enter productIds to fetch comma separated</label>
      <input v-model=productIds>
    </div>
    
   <div><button @click="TestKlevu">TestKlevu</button> </div> 
   <div><button @click="clearKlevuData">ClearKlevuData</button> </div>  
   <div>
    <ul>
      <li class="product" v-for="product, index in productsData" :key="index">
        <h1>{{  product['name'] }}</h1>
        <ul><li v-for="(value, name) in product" :key="name">{{ `${name} - `}}<span class="data">{{ value }}</span></li></ul>
      </li>
       
    </ul>
   </div> 
  </main>
</template>

<script setup lang="ts">

import {
  KlevuFetch,
  products
} from "@klevu/core";

import {ref } from "vue";

const productsData = ref<any>([])
const productIds = ref<string>("")

// Example input field 688801,688816

const TestKlevu = async () => {
  const productResultKlevu = await KlevuFetch(
    products(
      productIds.value.split(","))
    );

  productsData.value = productResultKlevu.queriesById("products")?.records
}


const clearKlevuData = () => {
  productsData.value = []
}

</script>

<style>

.product {
  border: 1px solid hotpink;
}

.data {
  font-weight: 500;
}
</style>


