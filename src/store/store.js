import Vuex from "vuex";
import axios from "axios";

let store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProductsToState: (state, products) => {
      state.products = products;
    },
    addProdToCart: (state, product) => {
      state.cart.push(product);
    }
  },
  actions: {
    fetchProducts({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET"
      })
        .then((products) => {
          commit("setProductsToState", products.data);
          return products.data;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
    addToCartFromStore({ commit }, product) {
      commit("addProdToCart", product);
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    }
  }
});

export default store;
