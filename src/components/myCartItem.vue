<template>
  <div class="myCartItem">
    <my-button class="del-button" @click="delFromCart">X</my-button>
    <img
      class="cart-item-details-img"
      :src="image_sample"
      :alt="product_details.image"
    />
    <p class="name">
      <strong>{{ product_details.name }}</strong>
    </p>
    <p class="price">{{ Math.round(product_details.price * 100) / 100 }} ₽</p>
    <div>
      <p>Количество</p>
      <my-button>-</my-button>
      <span class="qnt">{{ product_details.qnt }}</span>
      <my-button>+</my-button>
    </div>
  </div>
</template>

<script>
import image_sample from "@/assets/img/globe.png";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "myCartItem",
  data() {
    return { image_sample };
  },
  props: {
    product_details: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    const cartItemData = this.product_details;
    cartItemData.qnt = 1;
  },
  methods: {
    delFromCart() {
      this.$emit("delFromCart");
    },
    ...mapActions(["deleteFromCart"]),
    ...mapMutations(["deleteProdFromCart"]),
  },
};
</script>

<style>
.myCartItem {
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #8d8d8d;
  flex-basis: 20%;
  margin: 0 10px 20px 10px;
  padding: 20px 10px;
  position: relative;
}
.cart-item-details-img {
  width: 50px;
}
.del-button {
  float: right;
  padding: 5px;
  position: absolute;
  right: 15px;
}
</style>