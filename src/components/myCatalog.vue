<template>
  <div class="myCatalog"><h1>Catalog</h1></div>
  <div class="my-catalog___list">
    <my-catalog-item
      v-for="product in $store.state.products"
      :key="product.article"
      :product_details="product"
      @add-to-cart="addToCartFromStore"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "myCatalog",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchProducts", "addToCartFromStore"]),
    /* addToCart(data) {
      console.log(data);}, */
  },
  

  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters(["getProducts", "getCart"]),
  },
};
</script>

<style>
.my-catalog___list {
  display: flex;
  flex-wrap: wrap;
}
</style>