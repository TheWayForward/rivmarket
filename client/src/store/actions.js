import {get_user_info_by_id, log_out, get_commodity_by_user_id} from "@/api";
import {COMMODITY, RESET_USER_INFO, USER_INFO} from "@/store/mutation_types";

export default {
    sync_user_info({commit}, user_info) {
        commit(USER_INFO, {user_info});
    },

    async get_user_info({commit}, params) {
        let user_info = {};
        const result = await get_user_info_by_id(params);
        if (result.code == 200) {
            user_info = result.info;
            window.localStorage.setItem("user_info", JSON.stringify(user_info));
        } else {
            user_info = JSON.parse(window.localStorage.getItem("user_info"));
        }
        commit(USER_INFO, {user_info});
    },

    async log_out({commit}) {
        const result = await log_out();
        if (result.code == 200) {
            commit(RESET_USER_INFO);
        }
    },

    async get_commodity_by_user_id({commit}, params) {
        let commodity = [];
        const result = await get_commodity_by_user_id(params);
        if (result.code == 200) {
            commodity = result.info;
            window.localStorage.setItem("commodity", JSON.stringify(commodity));
        } else {
            commodity = JSON.parse(window.localStorage.getItem("commodity"));
        }
        commit(COMMODITY, {commodity});
        return result;
    },

    sync_user_commodity({commit}, commodity) {
        commit(COMMODITY, {commodity})
    }

}