<template>
  <div class="myCart"><h1>Cart</h1></div>
  <div class="myCart__list">
  <my-cart-item      
      v-for="product in $store.state.cart"
      :key="product.article" 
      :product_details="product"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "myCart",
  methods:{},
  computed: {
    ...mapGetters(["getProducts", "getCart"]),
  },
};
</script>

<style>
.myCart__list{
  display: flex;
  flex-wrap: wrap;}
</style>