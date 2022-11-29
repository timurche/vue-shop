<template>
  <div class="myCatalog"><h1>Catalog</h1></div>
  <div class="my-catalog___list">
    <my-catalog-item
      v-for="product in products"
      :key="product.article"
      :product_details="product"
      @send-art="printArticle"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "myCatalog",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>
.my-catalog___list {
  display: flex;
  flex-wrap: wrap;
}
</style>