<template>
    <div id="app">
        <navigation_bar class="w-100" style="position: fixed;z-index:999;"></navigation_bar>
        <keep-alive>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
    import navigation_bar from "./components/navigation_bar/navigation_bar";
    import "bootstrap";
    import {mapActions} from "vuex";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap/dist/js/bootstrap.min";
    import "popper.js";

    export default {
        name: 'App',
        mounted() {
            let user_info = JSON.parse(window.localStorage.getItem(("user_info")));
            if (user_info) {
                this.sync_user_info(user_info);
            }
        },
        methods: {
            ...mapActions({
                sync_user_info: "sync_user_info"
            })
        },
        components: {
            navigation_bar
        }
    }
</script>

<style>
    @import "common/style/base.css";

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 0;
        padding: 0;
    }
</style>
