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
    filteringProds: (state, filterParams) => {
      state.sorted_products = [];
      state.products.map((product) => {
        if (
          product.category === filterParams.selected.value &&
          product.price >= filterParams.minPrice &&
          product.price <= filterParams.maxPrice
        ) {
          state.sorted_products.push(product);
        } else {
          if (
            filterParams.selected.value === "ALL" &&
            product.price >= filterParams.minPrice &&
            product.price <= filterParams.maxPrice
          ) {
            state.sorted_products.push(product);
          }
        }
        console.log(filterParams);
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
    filterProdsNow({ commit }, filterParams) {
      commit("filteringProds", filterParams);
      console.log(filterParams);
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
    },
    getTotal(state) {
      let totalSum = 0;
      state.cart.forEach((element) => {
        totalSum =
          Math.round((totalSum + element.price * element.qnt) * 100) / 100;
      });
      return totalSum;
    }
  }
});

export default store;
