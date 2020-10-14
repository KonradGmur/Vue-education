import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./components/router";
import Store from "./store";

Vue.config.productionTip = false;

Vue.use(vueRouter);

new Vue({
  render: (h) => h(App),
  store,
  router,
  components: { App },
  template: "<App/>",
}).$mount("#app");
