<template>
  <div class="myCatalog">
    <h1>Catalog</h1>
  </div>
  <div class="filtersBar">
    <my-select
      :optionsList="optionsList"
      :selected="selected.name"
      @select="doFilterProdsNow"
    >
    </my-select>
    <div class="rangeSlider">
      <input
        type="range"
        min="0"
        max="999"
        step="10"
        v-model.number="minPrice"
        @change="sliding"
      />
      <input
        type="range"
        min="0"
        max="1000"
        step="10"
        v-model.number="maxPrice"
        @change="sliding"
      />
      <div class="rangeValues">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
  </div>

  <router-link :to="{ name: 'Cart' }"
    ><div class="my-catalog___to-cart">
      Товаров: {{ getCart.length
      }}<span v-if="getTotal > 0">, на сумму {{ getTotal }}</span>
    </div>
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
      minPrice: 0,
      maxPrice: 1000,
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "addToCartFromStore", "filterProdsNow"]),

    sliding() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
    doFilterProdsNow() {
      this.filterProdsNow(this.selected, this.minPrice, this.maxPrice);
    },
  },

  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters(["getProducts", "getCart", "getSortedProducts", "getTotal"]),
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
.filtersBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rangeSlider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.rangeSlider svg,
.rangeSlider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -6px;
}
</style>