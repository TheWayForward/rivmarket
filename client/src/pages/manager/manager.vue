<template>
    <div id="page">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import notification_helper from "@/common/js/utils/notification_helper";
    import {mapState, mapActions} from "vuex";
    import versatile_helper from "@/common/js/utils/versatile_helper";

    export default {
        name: "manager",
        data() {
            return {}
        },
        computed: {
            ...mapState({
                user_info: "user_info",
                commodity: "commodity"
            }),

        },
        methods: {
            ...mapActions({
                get_commodity_by_user_id: "get_commodity_by_user_id",
                sync_user_commodity: "sync_user_commodity"
            }),

        },
        mounted() {

        }
    }
</script>

<style scoped>
    @import "../../common/style/base.css";

    #page {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        background-image: url("../../common/img/background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    #placeholder {
        background-image: url("../../common/img/wood.png");
    }
</style>