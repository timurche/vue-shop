import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components";
import store from "@/store/store";
import router from "@/router/router";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
