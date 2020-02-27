import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Multiselect from "vue-multiselect";
import axios from "axios";
import {
  MdButton,
  MdTabs,
  MdField,
  MdCard
} from "vue-material/dist/components";
import "vue-multiselect/dist/vue-multiselect.min.css";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;
Vue.component("multiselect", Multiselect);
Vue.use(MdTabs);
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdCard);

new Vue({
  router,
  store,
  mounted() {
    if (process.env.NODE_ENV === "development") {
      axios.defaults.baseURL = "https://localhost:5000";
    }

    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    }

    store.subscribe((mutation, state) => {
      localStorage.setItem("cards", JSON.stringify(state));
    });
  },
  created() {
    let savedData = localStorage.getItem("cards");
    if (savedData !== null) {
      store.replaceState(JSON.parse(savedData));
    }
  },
  render: h => h(App)
}).$mount("#app");
