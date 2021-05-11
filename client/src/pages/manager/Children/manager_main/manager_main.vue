<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <transition name="fade">
                <div class="jumbotron shadow overflow-hidden" v-if="!user_info.is_manager">
                    <div class="row text-center">
                        <div class="col-md-12">
                            <hr class="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor"
                                 class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <hr class="mb-4">
                            <div class="alert alert-danger shadow" role="alert">
                                <h4 class="alert-heading">禁止访问！</h4>
                                <p>您不是管理员。</p>
                                <hr>
                                <p class="mb-0">为您造成的不便，敬请谅解。百川轩祝您生活愉快！</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container" v-else>
                    <!-- commodity -->
                    <div id="commodity_panel" class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                        <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">物品管理
                            <span class="badge badge-pill badge-primary shadow ml-2">总数：{{commodity_total}}</span>
                            <span class="badge badge-pill badge-secondary shadow ml-2"
                                  v-if="commodity_uncensored_total">待审核：{{commodity_uncensored_total}}</span>
                        </h6>
                        <transition name="fade">
                            <div class="row">
                                <transition-group name="fade" class="w-100">
                                    <div class="d-inline-block media text-muted pt-3 list-group-item-action col-md-6 round-5 cursor-pointer w-75"
                                         v-for="item in commodities"
                                         :key="item.id" @click="goto_commodity_check(item)">
                                        <div class="d-flex">
                                            <div class="round-5 overflow-hidden shadow mr-4"
                                                 style="width:64px;height:64px;">
                                                <img class="bd-placeholder-img rounded h-100" :src="item.poster">
                                            </div>
                                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <div class="d-flex justify-content-between align-items-center w-100">
                                                    <h5 class="text-dark">{{item.name}}
                                                    </h5>
                                                </div>
                                                <div class="d-flex">
                                                    <h6>
                                                        <span class="badge badge-info shadow">{{item.type}}</span>
                                                        <span class="badge badge-pill shadow ml-2"
                                                              :class="item.state.class">{{item.state.name}}</span>
                                                    </h6>
                                                </div>
                                                <div class="d-flex">
                                                    <h6>
                                                        <span class="badge badge-secondary shadow">创建时间：{{item.time_created_string}}</span>
                                                    </h6>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="d-inline-block round-5 shadow"
                                                         style="width:16px;height:16px;padding:0;">
                                                        <img class="w-100 h-100" :src="item.avatar" alt="">
                                                    </div>
                                                    <span class="d-block ml-2">{{item.nickname}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition-group>
                            </div>
                        </transition>
                        <transition name="fade">
                            <small class="d-block text-right mt-3">
                                <a class="cursor-pointer" @click="get_commodity_batch"
                                   v-if="commodities.length < commodity_total">显示更多</a>
                            </small>
                        </transition>
                    </div>

                    <!-- requirement -->
                    <div id="requirement_panel" class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                        <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">需求管理
                            <span class="badge badge-pill badge-primary shadow ml-2">总数：{{requirements.length}}</span>
                        </h6>
                        <transition-group name="fade">
                            <div class="media text-muted pt-3 list-group-item-action" v-for="item in requirements"
                                 :key="item.id">
                                <div class="round-5 overflow-hidden shadow mr-4"
                                     style="width:64px;height:64px;">
                                    <img class="bd-placeholder-img rounded h-100" :src="item.avatar">
                                </div>
                                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-dark">
                                        <h6>
                                            <span class="badge badge-info shadow">{{item.commodity_type}}</span>
                                            <span class="badge badge-pill shadow ml-2" :class="item.state.class">{{item.state.name}}</span>
                                            <span class="badge badge-secondary shadow ml-2">提交时间：{{item.time_created_string}}</span>
                                            <div class="mt-2">
                                                <h6>
                                                    {{item.nickname}}
                                                </h6>
                                            </div>
                                        </h6>
                                    </strong>
                                    {{item.detail}}
                                </p>
                            </div>
                        </transition-group>
                        <small class="d-block text-right mt-3">
                            <a class="cursor-pointer" @click="get_requirement_batch"
                               v-if="requirements.length < requirement_total">显示更多</a>
                        </small>
                    </div>

                    <!-- user -->
                    <div id="user_panel" class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                        <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">用户管理
                            <span class="badge badge-pill badge-primary shadow ml-2">{{users.length ? `总数：${users.length}` : "加载中"}}</span>
                        </h6>
                        <transition name="fade">
                            <div class="row">
                                <transition-group name="fade" class="w-100">
                                    <div class="cursor-pointer round-5 d-inline-block media text-muted pt-3 list-group-item-action col-md-6"
                                         v-for="item in users"
                                         :key="item.id" @click="goto_user_check(item)">
                                        <div class="d-flex">
                                            <div class="round-5 overflow-hidden shadow mr-4"
                                                 style="width:64px;height:64px;">
                                                <img class="bd-placeholder-img rounded w-100 h-100" :src="item.avatar">
                                            </div>
                                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <div class="d-flex justify-content-between align-items-center w-100">
                                                    <h5 class="text-dark">{{item.nickname}}</h5>
                                                </div>
                                                <div class="d-flex w-100">
                                            <span class="badge badge-pill badge-secondary shadow"
                                                  v-if="item.id == user_info.id">我</span>
                                                    <span class="badge badge-pill badge-info shadow ml-2"
                                                          v-if="item.is_manager">管理员</span>
                                                    <span class="badge badge-pill badge-success shadow ml-2"
                                                          v-if="item.wechat_openid">微信</span>
                                                </div>
                                                <div>
                                                    <span class="d-block mt-2">注册时间：{{item.date_created_string}}</span>
                                                </div>
                                                <div>
                                                    <span class="d-block mt-2">院校：{{item.university}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition-group>
                            </div>
                        </transition>
                        <transition name="fade">
                            <small class="d-block text-right mt-3" v-if="users.length < user_total">
                                <a class="cursor-pointer" @click="get_user_batch">显示更多</a>
                            </small>
                        </transition>
                    </div>

                    <!-- logs -->
                    <div id="log" class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                        <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">开发日志
                            <span class="badge badge-pill badge-primary shadow ml-2">总数：{{logs.length}}</span>
                            <span class="badge badge-pill badge-secondary shadow ml-2">最近更新：{{logs[0].time_created_string}}</span>
                        </h6>

                        <transition-group name="fade" class="w-100">
                            <div class="media text-muted pt-3 list-group-item-action round-5 cursor-pointer"
                                 v-for="item in logs" :key="item.id">
                                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-dark">
                                        <h6>
                                            <span class="badge badge-info shadow">{{item.version}}</span>
                                            <span class="badge badge-secondary shadow ml-2">{{item.time_created_string}}</span>
                                        </h6>
                                    </strong>
                                    {{item.detail}}
                                </p>
                            </div>
                        </transition-group>
                        <!-- add button -->
                        <transition name="fade">
                            <div class="justify-content-between align-items-center text-center w-100 mt-3">
                                <button type="button"
                                        class="btn btn-info font-weight-bold shadow"
                                        @click="log_add">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                         height="16" fill="currentColor"
                                         class="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                    </svg>
                                    添加开发日志
                                </button>
                            </div>
                        </transition>
                        <!-- add_panel -->
                        <transition name="fade">
                            <div id="log_add_panel"
                                 class="justify-content-between align-items-center text-center w-100 mt-3 p-3"
                                 v-if="log_add_flag">
                                <div class="jumbotron shadow">
                                    <div class="row m-0 text-left w-100">
                                        <!-- type -->
                                        <div class="col-md-6 mt-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                                                </svg>
                                                版本号</label>
                                            <div class="input-group shadow">
                                                <input v-model="version" class="form-control bg-white"
                                                       maxlength="20">
                                            </div>
                                        </div>
                                        <!-- date picker -->
                                        <div class="col-md-6 mt-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-calendar3"
                                                     viewBox="0 0 16 16">
                                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                                </svg>
                                                发布时间</label>
                                            <div class="input-group round-5 overflow-hidden shadow">
                                                <el-date-picker
                                                        class="bg-white w-100"
                                                        v-model="date_created"
                                                        type="date"
                                                        placeholder="点击选择日期"
                                                        :picker-options="picker_options">
                                                </el-date-picker>
                                            </div>
                                        </div>
                                        <!-- detail -->
                                        <div class="col-md-12 mt-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-file-earmark-text"
                                                     viewBox="0 0 16 16">
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                                </svg>
                                                日志描述</label>
                                            <div class="input-group shadow">
                                                    <textarea v-model="detail" class="form-control bg-white"
                                                              maxlength="500"
                                                              placeholder="填写日志描述（如：新功能、新特性、故障修复等）"
                                                              style="resize:none;height:200px;"/>
                                            </div>
                                        </div>

                                        <div class="col-md-12 mt-3">
                                            <!-- submit -->
                                            <hr class="mb-4">
                                            <button class="btn btn-info btn-lg btn-block font-weight-bold shadow mb-4"
                                                    @click="submission_confirm">
                                                确认添加
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>


                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    import {
        add_log,
        get_log,
        manager_get_commodity_batch,
        manager_get_requirement_batch,
        manager_get_user_batch
    } from "@/api";
    import time_helper from "@/common/js/utils/time_helper";
    import notification_helper from "@/common/js/utils/notification_helper";
    import verification_helper from "@/common/js/utils/verification_helper";

    export default {
        name: "manager_main",
        data() {
            return {
                batch: {
                    commodity: {
                        batch_from: 0,
                        batch_limit: 5,
                    },
                    requirement: {
                        batch_from: 0,
                        batch_limit: 5,
                    },
                    user: {
                        batch_from: 0,
                        batch_limit: 5,
                    }
                },
                picker_options: {
                    disabledDate(time) {
                        // in 3 years
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: "今天",
                        onClick(picker) {
                            picker.$emit("pick", new Date());
                        }
                    }, {
                        text: "昨天",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit("pick", date);
                        }
                    }, {
                        text: "一周前",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit("pick", date);
                        }
                    }]
                },
                commodities: [],
                logs: [],
                commodity_total: "加载中",
                commodity_uncensored_total: "加载中",
                requirements: [],
                requirement_total: "加载中",
                users: [],
                version: "",
                date_created: "",
                user_total: "加载中",
                log_add_flag: false
            }
        },
        created() {

        },
        mounted() {
            this.get_commodity_batch();
            this.get_requirement_batch();
            this.get_user_batch();
            this.get_log();
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

            async get_commodity_batch() {
                if (this.commodities.length == this.commodity_total) {
                    notification_helper.show_toast_warning("已加载全部物品");
                    return;
                }
                let result = await manager_get_commodity_batch(this.batch.commodity.batch_from, this.batch.commodity.batch_limit);
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_time_string(result.info[i].time_created);
                        result.info[i].state = verification_helper.commodity_state_verification(result.info[i]);
                        this.commodities.push(result.info[i]);
                    }
                    this.commodity_total = result.amount;
                    this.commodity_uncensored_total = result.uncensored_amount;
                    this.batch.commodity.batch_from += result.info.length;
                }
            },


            async get_requirement_batch() {
                if (this.requirements.length == this.requirement_total) {
                    notification_helper.show_toast_warning("已加载全部需求");
                    return;
                }
                let result = await manager_get_requirement_batch(this.batch.requirement.batch_from, this.batch.requirement.batch_limit);
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_time_string(result.info[i].time_created);
                        result.info[i].state = verification_helper.requirement_state_verification(result.info[i]);
                        this.requirements.push(result.info[i]);
                    }
                    this.requirement_total = result.amount;
                    this.batch.requirement.batch_from += result.info.length;
                }
            },

            async get_user_batch() {
                if (this.users.length == this.user_total) {
                    notification_helper.show_toast_warning("已加载全部用户");
                    return;
                }
                let result = await manager_get_user_batch(this.batch.user.batch_from, this.batch.user.batch_limit);
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        result.info[i].date_created = new Date(result.info[i].date_created);
                        result.info[i].date_created_string = time_helper.convert_date_to_date_string(result.info[i].date_created);
                        this.users.push(result.info[i]);
                    }
                    this.user_total = result.amount;
                    this.batch.user.batch_from += result.info.length;
                }
            },

            log_add() {
                this.log_add_flag = true;
                window.scroll({top: document.body.clientHeight, left: 0, behavior: "smooth"});
            },

            submission_confirm() {
                if (!this.version) {
                    notification_helper.show_toast_warning("未填写版本号");
                    return;
                }
                if (!this.date_created) {
                    notification_helper.show_toast_warning("未选择发布日期");
                    return;
                }
                if (!this.detail) {
                    notification_helper.show_toast_warning("未填写日志内容");
                    return;
                }
                this.$confirm(`确定提交开发日志？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.submit();
                }).catch(() => {
                })
            },

            async submit() {
                notification_helper.start_loading("加载中", "log_add_panel");
                const result = await add_log(this.version, this.date_created, this.detail);
                if (result.code == 200) {
                    notification_helper.show_toast_success(result.msg);
                    this.log_add_flag = false;
                    notification_helper.stop_loading();
                    this.get_log();
                } else {
                    notification_helper.show_toast_error(result.msg);
                    notification_helper.stop_loading();
                    this.log_add_flag = false;
                    this.version = "";
                    this.date_created = "";
                    this.detail = "";
                }
            },

            async get_log() {
                const result = await get_log();
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                    }
                    this.logs = result.info;
                }
            },

            goto_commodity_check(e) {
                this.$router.push({
                    path: "commodity_check",
                    query: {
                        id: e.id,
                    }
                })
            },

            goto_user_check(e) {
                this.$router.push({
                    path: "user_check",
                    query: {
                        id: e.id,
                    }
                })
            }

        }
    }
</script>

<style scoped>
    @import "../../../../common/style/base.css";

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
</style>