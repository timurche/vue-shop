<template>
  <div class="myCatalog"><h1>Catalog</h1></div>
  <div class="my-catalog___list">
    <my-catalog-item
      v-for="product in $store.state.products"
      :key="product.article"
      :product_details="product"
      @addToCart="addToCart"
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
    ...mapActions(["fetchProducts", "addToCart"]),
  },
  addToCart() {
    console.log(this.product);
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