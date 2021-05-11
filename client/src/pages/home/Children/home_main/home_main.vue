<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <div class="container">

                <!-- commodity search bar -->
                <div class="input-group mb-3 shadow">
                    <div class="input-group-prepend">
                        <button class="btn basic-background-linear dropdown-toggle font-weight-bold text-white"
                                type="button" data-toggle="dropdown" aria-expanded="false">
                            {{commodity_search_mode}}
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item cursor-pointer" @click="change_commodity_search_name">按名称搜索</a>
                            <a class="dropdown-item cursor-pointer" @click="change_commodity_search_type">按类别搜索</a>
                        </div>
                    </div>
                    <input v-model="commodity_keywords" type="text" class="form-control"
                           :placeholder="commodity_search_mode_placeholder" maxlength="10">
                </div>

                <!-- commodity search result -->
                <transition name="fade">
                    <div id="commodity_search_result" class="my-3 p-3 bg-white rounded shadow-sm"
                         v-if="commodity_keywords">
                        <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">{{commodity_search_tip}}</h6>
                        <div class="album py-5 bg-white">
                            <div class="container">
                                <!-- if there's no commodity -->
                                <div class="row mb-5"
                                     v-if="!this.commodity_array_1[0] && !this.commodity_array_2[0] && !this.commodity_array_3[0]">
                                    <div class="col-lg-2"></div>
                                    <div class="col-lg-8">
                                        <img class="w-100" style="opacity:0.7;"
                                             src="../../../../common/img/empty.png"
                                             alt="">
                                    </div>
                                    <div class="col-lg-2"></div>
                                </div>

                                <!-- commodities exist -->
                                <div class="row">
                                    <!-- col 1 -->
                                    <div class="col-md-4" v-if="this.commodity_array_1[0]">
                                        <transition-group name="fade">
                                            <div class="card mb-4 shadow list-group-item-action"
                                                 v-for="item in commodity_array_1"
                                                 :key="item.id">
                                                <div class="bd-placeholder-img card-img-top shadow overflow-hidden"
                                                     height="225">
                                                    <img class="bd-placeholder-img card-img-top d-inline-block"
                                                         style="max-width:100%;"
                                                         :src="item.poster"
                                                         role="img">
                                                </div>
                                                <div class="card-body text-justify" @click="goto_commodity_view(item)">
                                                    <h5 class="pb-2 mb-0 font-weight-bold">{{item.name}}</h5>
                                                    <h6>{{item.time_created_string}}</h6>
                                                    <div class="mt-2 mb-2">
                                                        <span class="badge badge-info shadow mr-2">{{item.type}}</span>
                                                        <a class="badge badge-pill cursor-pointer shadow"
                                                           :class="item.state.class">{{item.state.name}}</a>
                                                        <span class="badge badge-pill badge-primary ml-2 shadow">浏览：{{item.view}}</span>
                                                    </div>
                                                    <small class="card-text mt-4">{{item.detail.length >70 ?
                                                        item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                    <div class="justify-content-between align-items-center mt-2">
                                                    </div>
                                                </div>
                                            </div>
                                        </transition-group>
                                    </div>

                                    <!-- col 2 -->
                                    <div class="col-md-4" v-if="this.commodity_array_2[0]">
                                        <transition-group name="fade">
                                            <div class="card mb-4 shadow list-group-item-action"
                                                 v-for="item in commodity_array_2"
                                                 :key="item.id">
                                                <div class="bd-placeholder-img card-img-top shadow overflow-hidden"
                                                     height="225">
                                                    <img class="bd-placeholder-img card-img-top d-inline-block"
                                                         style="max-width:100%;"
                                                         :src="item.poster"
                                                         role="img">
                                                </div>
                                                <div class="card-body text-justify" @click="goto_commodity_view(item)">
                                                    <h5 class="pb-2 mb-0 font-weight-bold">{{item.name}}</h5>
                                                    <h6>{{item.time_created_string}}</h6>
                                                    <div class="mt-2 mb-2">
                                                        <span class="badge badge-info shadow mr-2">{{item.type}}</span>
                                                        <a class="badge badge-pill cursor-pointer shadow"
                                                           :class="item.state.class">{{item.state.name}}</a>
                                                        <span class="badge badge-pill badge-primary ml-2 shadow">浏览：{{item.view}}</span>
                                                    </div>
                                                    <small class="card-text mt-4">{{item.detail.length >70 ?
                                                        item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                </div>
                                            </div>
                                        </transition-group>
                                    </div>

                                    <!-- col 3 -->
                                    <div class="col-md-4">
                                        <transition-group name="fade">
                                            <div class="card mb-4 shadow list-group-item-action"
                                                 v-for="item in commodity_array_3"
                                                 :key="item.id">
                                                <div class="bd-placeholder-img card-img-top shadow overflow-hidden"
                                                     height="225">
                                                    <img class="bd-placeholder-img card-img-top d-inline-block"
                                                         style="max-width:100%;"
                                                         :src="item.poster"
                                                         role="img">
                                                </div>
                                                <div class="card-body text-justify" @click="goto_commodity_view(item)">
                                                    <h5 class="pb-2 mb-0 font-weight-bold">{{item.name}}</h5>
                                                    <h6>{{item.time_created_string}}</h6>
                                                    <div class="mt-2 mb-2">
                                                        <span class="badge badge-info shadow mr-2">{{item.type}}</span>
                                                        <a class="badge badge-pill cursor-pointer shadow"
                                                           :class="item.state.class">{{item.state.name}}</a>
                                                        <span class="badge badge-pill badge-primary ml-2 shadow">浏览：{{item.view}}</span>
                                                    </div>
                                                    <small class="card-text mt-4">{{item.detail.length >70 ?
                                                        item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                </div>
                                            </div>
                                        </transition-group>
                                        <transition name="fade">
                                            <div class="card mb-4 shadow">
                                                <div class="card-body text-center">
                                                    <div class="justify-content-between align-items-center">
                                                        <button type="button"
                                                                class="btn btn-info font-weight-bold shadow">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" fill="currentColor"
                                                                 class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                            </svg>
                                                            没有找到？来提交需求！
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

                <!-- commodity latest update -->
                <div class="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">最近更新</h6>
                    <transition-group name="fade">
                        <div v-for="item in commodities" :key="item.id" class="list-group-item-action round-5">
                            <div class="media text-muted pt-3">
                                <div class="w-100 d-flex">
                                    <div class="round-5 overflow-hidden shadow mr-4 disabled"
                                         style="width:64px;height:64px;">
                                        <img class="bd-placeholder-img rounded h-100" :src="item.poster">
                                    </div>
                                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-justify cursor-pointer"
                                       @click="goto_commodity_view(item)">
                                        <strong class="d-block text-dark"><h6 class="font-weight-bold">{{item.name}}
                                            <span class="badge badge-info ml-2 shadow">{{item.type}}</span>
                                            <span class="badge badge-secondary ml-2 shadow">{{item.time_created_string}}</span>
                                            <span class="badge badge-pill badge-primary ml-2 shadow">浏览：{{item.view}}</span>
                                        </h6></strong>
                                        {{item.detail.length >70 ?
                                        item.detail.slice(0,70) + "..." : item.detail}}
                                        <strong class="d-block text-dark mt-2">
                                            <h6>
                                                <div class="d-inline-block round-5 shadow mr-2"
                                                     style="width:16px;height:16px;padding:0;">
                                                    <img class="w-100 h-100" :src="item.avatar" alt="">
                                                </div>
                                                <small>{{item.nickname}}</small>
                                            </h6>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </transition-group>
                    <small class="d-block text-right mt-3">
                        <a class="cursor-pointer" @click="get_commodity_batch">显示更多</a>
                    </small>
                </div>

                <!-- requirement search bar -->
                <div class="input-group mb-3 shadow">
                    <div class="input-group-prepend">
                        <button class="btn basic-background-linear dropdown-toggle font-weight-bold text-white"
                                type="button" data-toggle="dropdown" aria-expanded="false">
                            {{requirement_search_mode}}
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item cursor-pointer" @click="change_requirement_search_name">按名称搜索</a>
                            <a class="dropdown-item cursor-pointer" @click="change_requirement_search_type">按类别搜索</a>
                        </div>
                    </div>
                    <input v-model="requirement_keywords" type="text" class="form-control"
                           :placeholder="requirement_search_mode_placeholder" maxlength="10">
                </div>

                <!-- requirement search result -->
                <transition name="fade">
                    <div id="requirement_search_result" class="my-3 p-3 bg-white rounded shadow-sm" v-if="requirement_keywords">
                        <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">{{requirement_search_tip}}</h6>
                        <transition name="fade">
                            <div class="row mb-5"
                                 v-if="!this.requirement_search[0]">
                                <div class="col-lg-2"></div>
                                <div class="col-lg-8">
                                    <img class="w-100" style="opacity:0.7;"
                                         src="../../../../common/img/empty_requirement.png"
                                         alt="">
                                </div>
                                <div class="col-lg-2"></div>
                            </div>
                        </transition>
                        <transition-group name="fade">
                            <div class="media text-muted pt-3 list-group-item-action round-5 cursor-pointer" v-for="item in requirement_search" @click="goto_requirement_solve(item)"
                                 :key="item.id">
                                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-dark">
                                        <h6>
                                            <span class="badge badge-info shadow">{{item.commodity_type}}</span>
                                            <span class="badge badge-secondary shadow ml-2">{{item.time_created_string}}</span>
                                            <span class="badge badge-secondary shadow ml-2">{{item.date_expire_string}}到期</span>
                                            <span class="badge badge-pill badge-primary ml-2 shadow">浏览：{{item.view}}</span>
                                        </h6>
                                    </strong>
                                    {{item.detail}}
                                    <strong class="d-block text-dark mt-2">
                                        <h6>
                                            <div class="d-inline-block round-5 shadow mr-2"
                                                 style="width:16px;height:16px;padding:0;">
                                                <img class="w-100 h-100" :src="item.avatar" alt="">
                                            </div>
                                            <small>{{item.nickname}}</small>
                                        </h6>
                                    </strong>
                                </p>
                            </div>
                        </transition-group>
                    </div>
                </transition>
                
                <!-- requirement latest update -->
                <transition name="fade">
                    <div class="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">最近更新</h6>
                        <transition-group name="fade">
                            <div class="media text-muted pt-3 list-group-item-action round-5 cursor-pointer overflow-hidden" v-for="item in requirements" @click="goto_requirement_solve(item)"
                                 :key="item.id">
                                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-dark">
                                        <h6>
                                            <span class="badge badge-info shadow">{{item.commodity_type}}</span>
                                            <span class="badge badge-secondary shadow ml-2">{{item.time_created_string}}</span>
                                            <span class="badge badge-secondary shadow ml-2">{{item.date_expire_string}}到期</span>
                                            <span class="badge badge-pill badge-primary ml-2 shadow">浏览：{{item.view}}</span>
                                        </h6>
                                    </strong>
                                    {{item.detail}}
                                    <strong class="d-block text-dark mt-2">
                                        <h6>
                                            <div class="d-inline-block round-5 shadow mr-2"
                                                 style="width:16px;height:16px;padding:0;">
                                                <img class="w-100 h-100" :src="item.avatar" alt="">
                                            </div>
                                            <small>{{item.nickname}}</small>
                                        </h6>
                                    </strong>
                                </p>
                            </div>
                        </transition-group>
                        <small class="d-block text-right mt-3">
                            <a class="cursor-pointer" @click="get_requirement_batch">显示更多</a>
                        </small>
                    </div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
    import notification_helper from "@/common/js/utils/notification_helper";
    import {mapState, mapActions} from "vuex";
    import versatile_helper from "@/common/js/utils/versatile_helper";
    import {
        add_view,
        get_commodity_by_name,
        get_commodity_by_type,
        get_requirement_by_detail,
        get_requirement_by_type,
        user_get_commodity_batch, user_get_requirement_batch
    } from "@/api";
    import time_helper from "@/common/js/utils/time_helper";
    import verification_helper from "@/common/js/utils/verification_helper";
    import lodash from "lodash";

    export default {
        name: "home_main",
        watch: {
            commodity_keywords() {
                this.commodity_search_tip = "检索中";
                this.debounced_search_commodity(this.commodity_keywords);
            },
            requirement_keywords() {
                this.requirement_search_tip = "检索中";
                this.debounced_search_requirement(this.requirement_keywords);
            }
        },
        data() {
            return {
                commodity_search_mode: "物品：按名称搜索",
                commodity_search_mode_placeholder: "键入物品关键词或名称",
                commodity_keywords: "",
                commodity_search_tip: "",
                // search result count
                commodity_count: 0,
                // total count
                commodity_total: 0,
                commodities: [],
                commodity_array_1: [],
                commodity_array_2: [],
                commodity_array_3: [],
                requirement_search_mode: "需求：按名称搜索",
                requirement_search_mode_placeholder: "键入需求关键词或名称",
                requirement_keywords: "",
                requirement_search_tip: "",
                // search result count
                requirement_count: 0,
                requirement_total: 0,
                requirement_search: [],
                requirements: [],
                batch: {
                    commodity: {
                        batch_from: 0,
                        batch_limit: 5,
                    },
                    requirement: {
                        batch_from: 0,
                        batch_limit: 5,
                    }
                }
            }
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

            change_commodity_search_name() {
                this.commodity_keywords = "";
                this.commodity_search_mode = "物品：按名称搜索";
                this.commodity_search_mode_placeholder = "键入物品关键词或名称"
            },

            change_commodity_search_type() {
                this.commodity_keywords = "";
                this.commodity_search_mode = "物品：按类别搜索";
                this.commodity_search_mode_placeholder = "键入物品类别关键词"
            },

            change_requirement_search_name() {
                this.requirement_keywords = "";
                this.requirement_search_mode = "需求：按名称搜索";
                this.requirement_search_mode_placeholder = "键入需求关键词或名称"
            },

            change_requirement_search_type() {
                this.requirement_keywords = "";
                this.requirement_search_mode = "需求：按类别搜索";
                this.requirement_search_mode_placeholder = "键入需求类别关键词"
            },

            async search_commodity() {
                this.commodity_keywords = this.commodity_keywords.replace(/ /g, "");
                if (!this.commodity_keywords) {
                    return;
                }
                // mode judgement
                if (this.commodity_search_mode == "物品：按名称搜索") {
                    notification_helper.start_loading("加载中", "commodity_search_result");
                    const result = await get_commodity_by_name(this.commodity_keywords);
                    switch (result.code) {
                        case 200: {
                            this.commodity_search_tip = result.msg;
                            for (let i = 0; i < result.info.length; i++) {
                                result.info[i].time_created = new Date(result.info[i].time_created);
                                result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                            }
                            // then divide in 3 arrays
                            let commodity = versatile_helper.distribution_triple(result.info);
                            this.commodity_count = result.info.length;
                            this.commodity_array_1 = commodity.array_1;
                            this.commodity_array_2 = commodity.array_2;
                            this.commodity_array_3 = commodity.array_3;
                            notification_helper.stop_loading();
                            break;
                        }
                        case 100: {
                            this.commodity_search_tip = result.msg;
                            this.commodity_array_1 = [];
                            this.commodity_array_2 = [];
                            this.commodity_array_3 = [];
                            this.commodity_count = 0;
                            notification_helper.stop_loading();
                            break;
                        }
                        case 0: {
                            notification_helper.show_toast_error(result.msg);
                            this.commodity_search_tip = result.msg;
                            this.commodity_array_1 = [];
                            this.commodity_array_2 = [];
                            this.commodity_array_3 = [];
                            this.commodity_count = 0;
                            notification_helper.stop_loading();
                            break;
                        }
                    }
                } else {
                    notification_helper.start_loading("加载中", "commodity_search_result");
                    const result = await get_commodity_by_type(this.commodity_keywords);
                    switch (result.code) {
                        case 200: {
                            this.commodity_search_tip = result.msg;
                            for (let i = 0; i < result.info.length; i++) {
                                result.info[i].time_created = new Date(result.info[i].time_created);
                                result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                            }
                            // then divide in 3 arrays
                            let commodity = versatile_helper.distribution_triple(result.info);
                            this.commodity_count = result.info.length;
                            this.commodity_array_1 = commodity.array_1;
                            this.commodity_array_2 = commodity.array_2;
                            this.commodity_array_3 = commodity.array_3;
                            notification_helper.stop_loading();
                            break;
                        }
                        case 100: {
                            this.commodity_search_tip = result.msg;
                            this.commodity_array_1 = [];
                            this.commodity_array_2 = [];
                            this.commodity_array_3 = [];
                            this.commodity_count = 0;
                            notification_helper.stop_loading();
                            break;
                        }
                        case 0: {
                            notification_helper.show_toast_error(result.msg);
                            this.commodity_search_tip = result.msg;
                            this.commodity_array_1 = [];
                            this.commodity_array_2 = [];
                            this.commodity_array_3 = [];
                            this.commodity_count = 0;
                            notification_helper.stop_loading();
                            break;
                        }
                    }
                }
            },

            async search_requirement() {
                this.requirement_keywords = this.requirement_keywords.replace(/ /g, "");
                if (!this.requirement_keywords) {
                    return;
                }
                // mode judgement
                if (this.requirement_search_mode == "需求：按名称搜索") {
                    notification_helper.start_loading("加载中", "requirement_search_result");
                    const result = await get_requirement_by_detail(this.requirement_keywords);
                    switch (result.code) {
                        case 200: {
                            this.requirement_search_tip = result.msg;
                            for (let i = 0; i < result.info.length; i++) {
                                result.info[i].time_created = new Date(result.info[i].time_created);
                                result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                                result.info[i].date_expire = new Date(result.info[i].date_expire);
                                result.info[i].date_expire_string = time_helper.convert_date_to_date_string(result.info[i].date_expire);
                            }
                            this.requirement_search = result.info;
                            this.requirement_count = result.info.length;
                            console.log(this.requirements);
                            notification_helper.stop_loading();
                            break;
                        }
                        case 100: {
                            this.requirement_search = [];
                            this.requirement_search_tip = result.msg;
                            this.requirement_count = 0;
                            notification_helper.stop_loading();
                            break;
                        }
                        case 0: {
                            this.requirement_search = [];
                            notification_helper.show_toast_error(result.msg);
                            this.requirement_search_tip = result.msg;
                            this.requirement_count = 0;
                            notification_helper.stop_loading();
                            break;
                        }
                    }
                } else {
                    notification_helper.start_loading("加载中", "requirement_search_result");
                    const result = await get_requirement_by_type(this.requirement_keywords);
                    switch (result.code) {
                        case 200: {
                            console.log(result);
                            this.requirement_search_tip = result.msg;
                            for (let i = 0; i < result.info.length; i++) {
                                result.info[i].time_created = new Date(result.info[i].time_created);
                                result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                                result.info[i].date_expire = new Date(result.info[i].date_expire);
                                result.info[i].date_expire_string = time_helper.convert_date_to_date_string(result.info[i].date_expire);
                            }
                            this.requirement_count = result.info.length;
                            notification_helper.stop_loading();
                            break;
                        }
                        case 100: {
                            this.requirement_search_tip = result.msg;
                            this.requirements = [];
                            this.requirement_count = 0;
                            notification_helper.stop_loading();
                            break;
                        }
                        case 0: {
                            notification_helper.show_toast_error(result.msg);
                            this.requirement_search_tip = result.msg;
                            this.requirement_count = 0;
                            notification_helper.stop_loading();
                            break;
                        }
                    }
                }
            },

            // batch
            async get_commodity_batch() {
                if (this.commodities.length && this.commodities.length == this.commodity_total) {
                    notification_helper.show_toast_warning("已加载全部物品");
                    return;
                }
                let result = await user_get_commodity_batch(this.batch.commodity.batch_from, this.batch.commodity.batch_limit);
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                        this.commodities.push(result.info[i]);
                    }
                    this.commodity_total = result.amount;
                    this.batch.commodity.batch_from += result.info.length;
                }
            },

            async get_requirement_batch() {
                if (this.requirements.length && this.requirements.length == this.requirement_total) {
                    notification_helper.show_toast_warning("已加载全部需求");
                    return;
                }
                let result = await user_get_requirement_batch(this.batch.requirement.batch_from, this.batch.requirement.batch_limit);
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                        result.info[i].date_expire = new Date(result.info[i].date_expire);
                        result.info[i].date_expire_string = time_helper.convert_date_to_date_string(result.info[i].date_expire);
                        this.requirements.push(result.info[i]);
                    }
                    this.requirement_total = result.amount;
                    this.batch.requirement.batch_from += result.info.length;
                }
            },

            goto_commodity_view(e) {
                add_view("commodity", e.id);
                this.$router.push({
                    path: "commodity_view",
                    query: {
                        id: e.id
                    }
                })
            },

            goto_requirement_solve(e) {
                // can't solve unless logged in
                if (!this.user_info.id) {
                    this.$confirm("您需要用自己的物品解决他人的需求，而这需要登录/注册。现在登录/注册？", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "info"
                    }).then(() => {
                        this.$router.replace({
                            path: "/login"
                        });
                    }).catch(() => {
                    })
                } else {
                    add_view("requirement", e.id);
                    this.$router.push({
                        path: "requirement_solve",
                        query: {
                            id: e.id
                        }
                    })
                }
            }
        },
        created() {
            this.debounced_search_commodity = lodash.debounce(this.search_commodity, 500);
            this.debounced_search_requirement = lodash.debounce(this.search_requirement, 500);
        },
        mounted() {
            this.debounced_search_commodity();
            this.debounced_search_requirement();
            this.get_commodity_batch();
            this.get_requirement_batch();
        }
    }
</script>

<style scoped>
    #page {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        background-image: url("../../../../common/img/background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    .card-body {
        cursor: pointer;
    }
</style>