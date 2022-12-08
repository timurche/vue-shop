import Vuex from "vuex";
import axios from "axios";

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    sorted_products: []
  },
  mutations: {
    setProductsToState: (state, products) => {
      state.products = products;
      state.sorted_products = products;
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
    },
    sortProdsByCategory: (state, filterOption) => {
      state.sorted_products = [];
      state.products.map((product) => {
        if (product.category === filterOption.value) {
          state.sorted_products.push(product);
        } else {
          if (filterOption.value === "ALL") {
            state.sorted_products.push(product);
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
    sortByCategory({ commit }, filterOption) {
      commit("sortProdsByCategory", filterOption);
      console.log(filterOption.value);
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
    },
    getSortedProducts(state) {
      return state.sorted_products;
    }
  }
});

export default store;
