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
                    <div class="row">
                        <!-- user info left panel -->
                        <div class="my-3 p-3 bg-white rounded shadow col-lg-3" style="height:100%;">
                            <div class="align-items-center text-center p-3 my-3 text-white-50 bg-white rounded shadow col-lg-12 rainbow">
                                <img id="avatar" class="shadow round-5 bg-white w-100"
                                     :src="this.current_user.avatar" alt="">
                            </div>
                            <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">用户信息</h6>

                            <!-- username -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd"
                                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">用户名</strong>{{current_user.username}}
                                </p>
                            </div>

                            <!-- nickname -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">昵称</strong>{{current_user.nickname}}
                                </p>
                            </div>

                            <!-- university -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">院校</strong>{{current_user.university}}
                                </p>
                            </div>

                            <!-- tel -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">手机</strong>{{current_user.tel}}
                                </p>
                            </div>

                            <!-- QQ -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">QQ</strong>{{current_user.QQ}}
                                </p>
                            </div>

                            <!-- email -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">email</strong>{{current_user.email}}
                                </p>
                            </div>

                            <!-- address -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">住址</strong>{{current_user.address}}
                                </p>
                            </div>

                            <!-- detail -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray text-justify">
                                    <strong class="d-block text-gray-dark">简介</strong>{{current_user.detail}}
                                </p>
                            </div>

                            <!-- last modified -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     fill="currentColor" class="bi bi-alt" viewBox="0 0 16 16">
                                    <path d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5zm10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">最近改动</strong>{{current_user.last_modified_string}}
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-9">
                            <!-- right panels -->
                            <div class="my-3 p-3 bg-white rounded shadow">
                                <!-- commodity -->
                                <div id="commodity_panel">
                                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">用户物品
                                        <transition-group name="fade">
                                        <span key="commodity_count" v-if="commodity_array.length"
                                              class="badge badge-pill badge-primary shadow ml-2">总数：{{commodity_array.length}}</span>
                                            <span key="pending_censorship_count"
                                                  v-if="commodity_info.state_pending_censorship"
                                                  class="badge badge-pill badge-secondary shadow ml-2">审核中：{{commodity_info.state_pending_censorship}}</span>
                                            <span key="approved_count" v-if="commodity_info.state_approved"
                                                  class="badge badge-pill badge-success shadow ml-2">审核通过：{{commodity_info.state_approved}}</span>
                                            <span key="rejected_count" v-if="commodity_info.state_rejected"
                                                  class="badge badge-pill badge-danger shadow ml-2">审核不通过：{{commodity_info.state_rejected}}</span>
                                            <span key="trading_count" v-if="commodity_info.state_trading"
                                                  class="badge badge-pill badge-warning shadow ml-2">交易中: {{commodity_info.state_trading}}</span>
                                        </transition-group>
                                    </h6>
                                    <div v-if="!commodity_array.length">
                                        <div class="list-group">
                                            <a class="list-group-item disabled">该用户暂无物品</a>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <transition-group name="fade" class="w-100">
                                            <div class="d-inline-block media text-muted pt-3 list-group-item-action col-md-6 round-5 cursor-pointer w-75"
                                                 v-for="item in commodity_array"
                                                 :key="item.id" @click="goto_commodity_check(item)">
                                                <div class="d-flex">
                                                    <div class="round-5 overflow-hidden shadow mr-4"
                                                         style="width:64px;height:64px;">
                                                        <img class="bd-placeholder-img rounded h-100"
                                                             :src="item.poster">
                                                    </div>
                                                    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                        <div class="d-flex justify-content-between align-items-center w-100">
                                                            <h5 class="text-dark">{{item.name}}
                                                            </h5>
                                                        </div>
                                                        <div class="d-flex w-100">
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
                                                        <div class="text-justify">
                                                            <small>{{item.detail.slice(0,100) + "..."}}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition-group>
                                    </div>
                                </div>
                            </div>

                            <!-- requirement right panel -->
                            <div id="requirement_info_right_panel"
                                 class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                                <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">用户需求
                                    <transition-group name="fade">
                                        <span key="requirement_count"
                                              class="badge badge-pill badge-primary shadow ml-2">总数：{{requirement_array.length}}</span>
                                        <span key="pending_count" v-if="requirement_info.state_pending"
                                              class="badge badge-pill badge-secondary shadow ml-2">待解决：{{requirement_info.state_pending}}</span>
                                        <span key="solved_count" v-if="requirement_info.state_solved"
                                              class="badge badge-pill badge-success shadow ml-2">已解决：{{requirement_info.state_solved}}</span>
                                    </transition-group>
                                </h6>
                                <div v-if="!requirement_array.length">
                                    <div class="list-group mt-2">
                                        <a class="list-group-item disabled">该用户暂无需求</a>
                                    </div>
                                </div>
                                <div v-else class="media text-muted pt-3 list-group-item-action round-5"
                                     v-for="item in requirement_array" :key="item.id">
                                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-dark">
                                            <h6>
                                                <span class="badge badge-info shadow">{{item.commodity_type}}</span>
                                                <span class="badge badge-pill shadow ml-2" :class="item.state.class">{{item.state.name}}</span>
                                                <span class="badge badge-secondary shadow ml-2">提交时间：{{item.time_created_string}}</span>
                                            </h6>
                                        </strong>
                                        {{item.detail}}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    import {get_commodity_by_user_id, get_requirement_by_user_id, manager_get_user_by_id} from "@/api";
    import time_helper from "@/common/js/utils/time_helper";
    import verification_helper from "@/common/js/utils/verification_helper";

    export default {
        name: "user_check",
        computed: {
            ...mapState({
                user_info: "user_info",
                commodity: "commodity"
            }),
        },
        data() {
            return {
                current_user: {
                    id: this.$route.query.id
                },
                commodity_array: [],
                commodity_info: {
                    state_pending_censorship: 0,
                    state_approved: 0,
                    state_rejected: 0,
                    state_trading: 0
                },
                transaction_array: [],
                requirement_array: [],
                requirement_info: {
                    state_pending: 0,
                    state_solved: 0
                }
            }
        },
        methods: {
            ...mapActions({
                get_commodity_by_user_id: "get_commodity_by_user_id",
                sync_user_commodity: "sync_user_commodity"
            }),

            async get_user_info() {
                const result = await manager_get_user_by_id(this.current_user.id);
                if (result.code == 200) {
                    result.info.last_modified = new Date(result.info.last_modified);
                    result.info.last_modified_string = time_helper.convert_date_to_date_time_string(result.info.last_modified);
                    result.info.date_created = new Date(result.info.date_created);
                    result.info.date_created_string = time_helper.convert_date_to_date_time_string(result.info.date_created);
                    this.current_user = result.info;
                    console.log(this.current_user);
                }
            },

            async get_user_commodity() {
                let state_pending_censorship = 0, state_approved = 0, state_trading = 0, state_rejected = 0;
                const result = await get_commodity_by_user_id(this.current_user.id);
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        switch (result.info[i].state) {
                            case 0: {
                                state_pending_censorship++;
                                break;
                            }
                            case 1: {
                                state_approved++;
                                break;
                            }
                            case 2: {
                                state_trading++;
                                break;
                            }
                            case 5: {
                                state_rejected++;
                                break;
                            }
                        }
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_time_string(result.info[i].time_created);
                        result.info[i].date_purchased = new Date(result.info[i].date_purchased);
                        result.info[i].date_purchased_string = time_helper.convert_date_to_date_time_string(result.info[i].date_purchased);
                        result.info[i].last_modified = new Date(result.info[i].last_modified);
                        result.info[i].last_modified_string = time_helper.convert_date_to_date_time_string(result.info[i].last_modified);
                        result.info[i].state = verification_helper.commodity_state_verification(result.info[i]);
                        result.info[i].html = JSON.parse(result.info[i].html);
                    }
                    this.commodity_info = {
                        state_pending_censorship: state_pending_censorship,
                        state_approved: state_approved,
                        state_rejected: state_rejected,
                        state_trading: state_trading
                    }
                    this.commodity_array = result.info;
                    console.log(this.commodity_array);
                }
            },

            async get_user_transaction() {

            },

            async get_user_requirement() {
                let state_pending = 0, state_solved = 0;
                const result = await get_requirement_by_user_id(this.current_user.id);
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        switch (result.info[i].state) {
                            case (0): {
                                state_pending++;
                                break;
                            }
                            case (1): {
                                state_solved++;
                                break;
                            }
                        }
                        result.info[i].state = verification_helper.requirement_state_verification(result.info[i]);
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_time_string(result.info[i].time_created);
                    }
                    this.requirement_info = {
                        state_pending: state_pending,
                        state_solved: state_solved
                    }
                    this.requirement_array = result.info;
                    console.log(this.requirement_array);
                }
            },

            goto_commodity_check(e) {
                this.$router.push({
                    path: "commodity_check",
                    query: {
                        id: e.id,
                    }
                })
            }

        },
        created() {

        },
        mounted() {
            this.get_user_info();
            this.get_user_commodity();
            this.get_user_requirement();
            this.get_user_transaction();
        }
    }
</script>

<style scoped>

</style>