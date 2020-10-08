import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./components/router";

Vue.config.productionTip = false;

Vue.use(vueRouter);

new Vue({
  render: (h) => h(App),
  router,
  components: { App },
  template: "<App/>",
}).$mount("#app");
