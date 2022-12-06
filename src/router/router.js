import { createWebHistory, createRouter } from "vue-router";
import myCart from "@/components/myCart";
import myCatalog from "@/components/myCatalog";

let routes = [
  {
    path: "/",
    name: "Catalog",
    component: myCatalog
  },
  {
    path: "/cart",
    name: "Cart",
    component: myCart,
    props: true
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
