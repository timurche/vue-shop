<template>
  <div class="item-details">
    <img
      class="item-details-img"
      :src="image_sample"
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
import image_sample from "@/assets/img/3.png";
export default {
  data() {
    return { image_sample };
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

<style lang='scss'>
.item-details {
  flex-basis: 30%;

  &-img {
    width: 100px;
  }
}
</style>