import Vuex from "vuex";
import axios from "axios";

let store = new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProductsToState: (state, products) => {
      state.products = products;
    }
  },
  actions: {
    fetchProducts({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET"
      })
        .then((products) => {
          commit("setProductsToState", products.data);
          return products;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  }
});

export default store;
