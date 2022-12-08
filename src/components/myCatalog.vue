<template>
  <div class="myCatalog"><h1>Catalog</h1></div>
  <my-select
    :optionsList="optionsList"
    :selected="selected.name"
    @select="sortByCategoryNow"
  ></my-select>
  <router-link :to="{ name: 'Cart' }"
    ><div class="my-catalog___to-cart">Товаров: {{ getCart.length }}</div>
  </router-link>

  <div class="my-catalog___list">
    <my-catalog-item
      v-for="product in getSortedProducts"
      :key="product.article"
      :product_details="product"
      @add-to-cart="addToCartFromStore(product)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "myCatalog",
  data() {
    return {
      optionsList: [
        { name: "Для мужчин", value: "Мужские" },
        { name: "Для женщин", value: "Женские" },
        { name: "Для всех", value: "ALL" },
      ],
      selected: { name: "Выбери категорию", value: "ALL" },
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "addToCartFromStore", "sortByCategory"]),
    sortByCategoryNow(selected) {
      this.selected.name = selected.name;
      this.sortByCategory(selected);
    },
  },

  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters(["getProducts", "getCart", "getSortedProducts"]),
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