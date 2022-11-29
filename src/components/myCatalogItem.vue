<template>
  <div class="item-details">
    <img
      class="item-details-img"
      :src="image_sample"
      :alt="product_details.image"
    />
    <p class="name"><strong>{{ product_details.name }}</strong></p>
    <p class= "price"> <h3> {{ product_details.price }} ₽</h3> </p>
    <p class="article"><i>Арт.: {{ product_details.article }}</i></p>
    <p class="item-details-available" v-if="product_details.available">В наличии</p>
    <p class="item-details-available-no" v-else>Продано</p>
  </div>
</template>

<script>
import image_sample from "@/assets/img/globe.png";
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
  flex-basis: 25%;
  margin: 0 10px 30px 10px;

  &-img {
    width: 100px;
  }
  &-available {
    background-color: seagreen;
    line-height: 30px;
    border-radius: 10px;
    color: white;
  }
  &-available-no {
    color: red;
    line-height: 30px;
  }
}
</style>