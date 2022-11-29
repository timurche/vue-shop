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
    <div class="item-details--buttons" v-if="product_details.available">
      <p class="item-details-available" >В наличии</p>
      <my-button>В корзину</my-button></div>
    <p class="item-details-not-available" v-else>Продано</p>
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
  align-items: flex-start;
  &-img {
    width: 100px;
  }
  &-available {
    background-color: rgb(156, 189, 170);
    line-height: 30px;
    border-radius: 0px;
    color: white;
  }
  &-not-available {
    color: red;
    line-height: 30px;
  }
}
</style>