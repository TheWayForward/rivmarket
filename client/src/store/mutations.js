import Vue from "vue";
import {USER_INFO, RESET_USER_INFO, COMMODITY, RESET_COMMODITY} from "@/store/mutation_types";

export default {
    [USER_INFO](state, {user_info}) {
        state.user_info = user_info;
    },

    [RESET_USER_INFO] (state) {
        state.user_info = {};
    },

    [COMMODITY] (state, {commodity}) {
        state.commodity = commodity;
    },

    [RESET_COMMODITY] (state) {
        state.commodity = []
    }
}