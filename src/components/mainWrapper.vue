<template>
  <div class="mainWrapper"><h1>Main wrapper</h1></div>
  <my-cart v-if="this.getCart.length > 0" />
  <p v-else>Корзина пуста</p>
  <my-catalog />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "mainWrapper",
  computed: {
    ...mapGetters(["getCart"]),
  },
};
</script>

<style>
</style>