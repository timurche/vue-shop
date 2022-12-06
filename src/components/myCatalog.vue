<template>
  <div class="myCatalog"><h1>Catalog</h1></div>
  <router-link :to="{ name: 'Cart' }"
    ><div class="my-catalog___to-cart">Товаров: {{ getCart.length }}</div>
  </router-link>

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

<style lang="scss">
.my-catalog {
  &___list {
    display: flex;
    flex-wrap: wrap;
  }
  &___to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    border: 1px solid #aeaeae;
    border-radius: 5px;
  }
}
</style>