<template>
  <div class="myCatalogItem">
    <h3><slot /></h3>
  </div>
  <div class="item-details">
    <img
      class="img"
      :src="require('../assets/img/' + product_details.image)"
      :alt="product_details.image"
    />
    <p class="name">{{ product_details.name }}</p>
    <p class="price">{{ product_details.price }}</p>
    <p class="article">{{ product_details.article }}</p>
    <p class="available" v-if="product_details.available">В наличии</p>
    <p class="available" v-else>Продано</p>
  </div>
</template>

<script>
export default {
  data() {
    return { img_path: "../assets/img/" };
  },
  name: "myCatalogItem",

  props: {
    product_details: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>