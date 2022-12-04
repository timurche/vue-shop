<template>
  <div class="myCart"><h1>Cart</h1></div>
  <div class="myCart__list">
    <my-cart-item
      v-for="(product, index) in $store.state.cart"
      :key="product.article"
      :product_details="product"
      @delFromCart="this.deleteProdFromCart(index)"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "myCart",
  methods: {
    ...mapMutations(["deleteProdFromCart"]),
  },
  computed: {
    ...mapGetters(["getProducts", "getCart"]),
  },
};
</script>

<style>
.myCart__list {
  display: flex;
  flex-wrap: wrap;
}
</style>