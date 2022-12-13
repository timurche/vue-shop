<template>
  <div class="myCart"><h1>Cart</h1></div>
  <router-link :to="{ name: 'Catalog' }"
    ><div class="my-cart___to-cat">К покупкам</div>
  </router-link>
  <div v-if="$store.state.cart.length" class="myCart__list">
    <my-cart-item
      v-for="(product, index) in getCart"
      :key="product.article"
      :product_details="product"
      @delFromCart="this.deleteProdFromCart(index)"
    />
  </div>
  <div v-else>Корзина пуста</div>
  <hr />
  <div class="my-cart___total">
    <p>Total:</p>
    <p>{{ this.getTotal }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "myCart",
  methods: {
    ...mapMutations(["deleteProdFromCart"]),
  },
  computed: {
    ...mapGetters(["getProducts", "getCart", "getTotal"]),
    /* cartTotal() {
      let totalSum = 0;
      this.getCart.forEach((element) => {
        totalSum = totalSum + element.price * element.qnt;
      });
      return totalSum;
    }, */
  },
};
</script>

<style>
.myCart__list {
  display: flex;
  flex-wrap: wrap;
}
.my-cart___to-cat {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  border: 1px solid #aeaeae;
  border-radius: 5px;
}
</style>