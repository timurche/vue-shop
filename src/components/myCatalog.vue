<template>
  <div class="myCatalog"><h1>Catalog</h1></div>
  <div class="my-catalog___list">
    <my-catalog-item
      v-for="product in $store.state.products"
      :key="product.article"
      :product_details="product"
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
    ...mapActions(["fetchProducts"]),
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },
};
</script>

<style>
.my-catalog___list {
  display: flex;
  flex-wrap: wrap;
}
</style>