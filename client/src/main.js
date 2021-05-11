import Vue from "vue";
import App from "./App.vue";
import store from "./store/index"
import axios from "axios";
import vue_axios from "vue-axios";
import VueRouter from "vue-router";
import routers from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "popper.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/index";
import vue_lazyload from "vue-lazy-load";


Vue.config.productionTip = false;
axios.defaults.headers.post["Content-Type"] = "application/json";
Vue.use(vue_axios, axios);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(vue_lazyload, {
    preLoad: 1,
    error: require('../src/assets/img/error.jpg'),
    loading: require('../src/assets/img/loading.gif'),
    attempt: 2
})

const router = new VueRouter({
    mode: "history",
    routes: routers
})

router.afterEach((to,from,next)=>{
    window,scrollTo(0,0)
})

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
})