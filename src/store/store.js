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
      if (state.cart.length) {
        let prodExist = false;
        state.cart.map((item) => {
          if (item.article === product.article) {
            prodExist = true;
            item.qnt++;
          }
        });
        if (!prodExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    deleteProdFromCart: (state, index) => {
      state.cart.splice(index, 1);
    },
    incDecCartItem: (state, args) => {
      state.cart.map((item) => {
        if (item.article === args[0].article) {
          if (args[1] === "-") {
            if (item.qnt > 1) {
              item.qnt = item.qnt - 1;
            }
          } else if (args[1] === "+") {
            item.qnt++;
          } else {
          }
        }
      });
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
    },
    deleteFromCart({ commit }, index) {
      commit("deleteProdFromCart", index);
    },
    incDecItem({ commit }, product, znak) {
      commit("incDecCartItem", { product, znak });
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
