import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { CssGrid, CssGridItem, ViewportListener } from "vue-css-grid";
import otherPlayerResults from "./data/other_player_results.js";

require("./static/fonts.less");
require("./static/transitions.less");

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// Your main grid component, it declares the layout
Vue.component("css-grid", CssGrid);

// A grid item to use inside the grid component
Vue.component("css-grid-item", CssGridItem);

// Optional component to listen to viewport width and height changes
Vue.component("viewport-listener", ViewportListener);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
