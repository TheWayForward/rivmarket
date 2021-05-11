<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <transition name="fade">
                <div class="container">
                    <div class="row text-center" v-if="!user_info.id">
                        <div class="col-md-12">
                            <hr class="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor"
                                 class="bi bi-file-lock2" viewBox="0 0 16 16">
                                <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"/>
                                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                            </svg>
                            <hr class="mb-4">
                            <div class="alert alert-danger shadow" role="alert">
                                <h4 class="alert-heading">拒绝访问！</h4>
                                <p>抱歉，您尚未登录，无法获取您的物品信息。</p>
                                <hr>
                                <p class="mb-0">为您造成的不便，敬请谅解。百川轩祝您生活愉快！</p>
                            </div>
                        </div>
                    </div>
                    <div class="row round-5" v-else id="requirement_info_jumbotron">
                        <!-- user info left panel -->
                        <div class="my-3 p-3 bg-white rounded shadow col-lg-3" style="height:100%;">
                            <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">需求提交者信息</h6>

                            <!-- nickname -->
                            <div class="media text-muted pt-3">
                                <div>
                                    <img width="32" height="32" class="shadow round-5" :src="requirement_creator.avatar"
                                         alt="">
                                </div>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">昵称</strong>{{this.user_info.nickname}}
                                </p>
                            </div>

                            <!-- date created -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">注册时间</strong>{{this.user_info.date_created}}
                                </p>
                            </div>

                            <!-- university -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">院校</strong>{{this.user_info.university}}
                                </p>
                            </div>

                            <!-- tel -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">手机</strong>{{this.user_info.tel}}
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
                                    <strong class="d-block text-gray-dark">QQ</strong>{{this.user_info.QQ}}
                                </p>
                            </div>

                            <!-- email -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">email</strong>{{this.user_info.email}}
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
                                    <strong class="d-block text-gray-dark">住址</strong>{{this.user_info.address}}
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
                                    <strong class="d-block text-gray-dark">简介</strong>{{this.user_info.detail}}
                                </p>
                            </div>
                        </div>

                        <!-- my commodity panel -->
                        <div class="col-lg-9 p-0 pl-lg-2">
                            <div id="requirement_info_right_panel"
                                 class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                                <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">需求信息</h6>
                                <div class="media text-muted pt-3 list-group-item-action round-5">
                                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-dark mb-2">
                                            <h6>
                                                <span class="badge badge-info shadow">{{requirement.commodity_type}}</span>
                                                <span class="badge badge-pill shadow ml-2"
                                                      :class="requirement.state.class">{{requirement.state.name}}</span>
                                                <span class="badge badge-secondary shadow ml-2">提交时间：{{requirement.time_created_string}}</span>
                                            </h6>
                                        </strong>
                                        {{requirement.detail}}
                                    </p>
                                </div>
                            </div>
                            <div id="items_info_right_panel" class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                                <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">我的物品
                                    <transition-group name="fade">
                                        <span key="commodity_count" v-if="commodity_count"
                                              class="badge badge-pill badge-primary shadow ml-2">总数：{{commodity_count}}</span>
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
                                                <div class="card mb-4 shadow" v-for="item in commodity_array_1"
                                                     :key="item.id">
                                                    <div class="bd-placeholder-img card-img-top shadow overflow-hidden"
                                                         height="225">
                                                        <img class="bd-placeholder-img card-img-top d-inline-block"
                                                             style="max-width:100%;"
                                                             :src="item.poster"
                                                             role="img">
                                                    </div>
                                                    <div class="card-body text-justify">
                                                        <h5 class="pb-2 mb-0 font-weight-bold">{{item.name}}</h5>
                                                        <h6>{{item.time_created_string}}</h6>
                                                        <div class="mt-2 mb-2">
                                                            <span class="badge badge-info shadow mr-2">{{item.type}}</span>
                                                            <a class="badge badge-pill cursor-pointer shadow"
                                                               :class="item.state.class">{{item.state.name}}</a>
                                                        </div>
                                                        <small class="card-text mt-4">{{item.detail.length >70 ?
                                                            item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                        <div class="justify-content-between align-items-center mt-2">
                                                            <div class="btn-group font-weight-bold w-100 shadow">
                                                                <button type="button"
                                                                        class="btn btn-sm btn-outline-info"
                                                                        @click="choose_commodity(item)">使用此物品解决需求
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- col 2 -->
                                            <div class="col-md-4" v-if="this.commodity_array_2[0]">
                                                <div class="card mb-4 shadow" v-for="item in commodity_array_2"
                                                     :key="item.id">
                                                    <div class="bd-placeholder-img card-img-top shadow overflow-hidden"
                                                         height="225">
                                                        <img class="bd-placeholder-img card-img-top d-inline-block"
                                                             style="max-width:100%;"
                                                             :src="item.poster"
                                                             role="img">
                                                    </div>
                                                    <div class="card-body text-justify">
                                                        <h5 class="pb-2 mb-0 font-weight-bold">{{item.name}}</h5>
                                                        <h6>{{item.time_created_string}}</h6>
                                                        <div class="mt-2 mb-2">
                                                            <span class="badge badge-info shadow mr-2">{{item.type}}</span>
                                                            <a class="badge badge-pill cursor-pointer shadow"
                                                               :class="item.state.class">{{item.state.name}}</a>
                                                        </div>
                                                        <small class="card-text mt-4">{{item.detail.length >70 ?
                                                            item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                        <div class="justify-content-between align-items-center mt-2">
                                                            <div class="btn-group font-weight-bold w-100 shadow">
                                                                <button type="button"
                                                                        class="btn btn-sm btn-outline-info"
                                                                        @click="choose_commodity(item)">使用此物品解决需求
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- col 3 -->
                                            <div class="col-md-4">
                                                <div class="card mb-4 shadow" v-for="item in commodity_array_3"
                                                     :key="item.id">
                                                    <div class="bd-placeholder-img card-img-top shadow overflow-hidden"
                                                         height="225">
                                                        <img class="bd-placeholder-img card-img-top d-inline-block"
                                                             style="max-width:100%;"
                                                             :src="item.poster"
                                                             role="img">
                                                    </div>
                                                    <div class="card-body text-justify">
                                                        <h5 class="pb-2 mb-0 font-weight-bold">{{item.name}}</h5>
                                                        <h6>{{item.time_created_string}}</h6>
                                                        <div class="mt-2 mb-2">
                                                            <span class="badge badge-info shadow mr-2">{{item.type}}</span>
                                                            <a class="badge badge-pill cursor-pointer shadow"
                                                               :class="item.state.class">{{item.state.name}}</a>
                                                        </div>
                                                        <small class="card-text mt-4">{{item.detail.length >70 ?
                                                            item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                        <div class="justify-content-between align-items-center mt-2">
                                                            <div class="btn-group font-weight-bold w-100 shadow">
                                                                <button type="button"
                                                                        class="btn btn-sm btn-outline-info"
                                                                        @click="choose_commodity(item)">使用此物品解决需求
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <transition name="fade">
                                                    <div class="card mb-4 shadow"
                                                         v-if="is_add_commodity_available">
                                                        <div class="card-body text-center">
                                                            <div class="justify-content-between align-items-center">
                                                                <button type="button"
                                                                        class="btn btn-info font-weight-bold shadow"
                                                                        @click="goto_commodity_add">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" fill="currentColor"
                                                                         class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                                    </svg>
                                                                    添加物品
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

                            <!-- solution confirm container -->
                            <transition name="fade">
                                <div id="solution_confirm_container" class="my-3 p-3 bg-white rounded shadow overflow-hidden"
                                     v-if="solution.commodity.id">
                                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">使用物品解决需求</h6>
                                    <div class="list-group shadow mt-3">
                                        <a class="list-group-item list-group-item-action">若确认解决需求，您的物品"{{solution.commodity.name}}"(类别：{{solution.commodity.type}})将被转让给需求提交者({{requirement_creator.nickname}})，物品所有权将归需求提交者({{requirement_creator.nickname}})所有。</a>
                                    </div>
                                    <div class="input-group shadow mt-3">
                                        <input v-model="solution.password" type="password"
                                               class="form-control" placeholder="请输入您的商品密钥，以确认您要这样做"
                                               maxlength="20">
                                    </div>
                                    <transition name="fade">
                                        <div class="w-100 mt-3"
                                             v-if="solution.password == solution.commodity.password">
                                            <button type="button"
                                                    class="btn btn-success btn-lg w-100 shadow font-weight-bold"
                                                    @click="submission_confirm">确认解决需求
                                            </button>
                                        </div>
                                    </transition>
                                </div>
                            </transition>

                        </div>

                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    import {get_commodity_by_user_id, get_requirement_by_id, get_user_info_by_id, solve_requirement} from "@/api";
    import notification_helper from "@/common/js/utils/notification_helper";
    import time_helper from "@/common/js/utils/time_helper";
    import verification_helper from "@/common/js/utils/verification_helper";
    import versatile_helper from "@/common/js/utils/versatile_helper";
    import email_helper from "@/common/js/utils/email_helper";

    export default {
        name: "requirement_solve",
        data() {
            return {
                requirement_creator: {},
                requirement: {
                    state: {
                        class: "badge-info"
                    }
                },
                commodity_count: 0,
                commodity_array_1: [],
                commodity_array_2: [],
                commodity_array_3: [],
                commodity_info: {
                    state_pending_censorship: 0,
                    state_approved: 0,
                    state_rejected: 0,
                    state_trading: 0
                },
                is_add_commodity_available: false,
                solution: {
                    commodity: {},
                    password: ""
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

            async get_requirement() {
                notification_helper.start_loading("加载中", "items_info_right_panel");
                let result = await get_requirement_by_id(this.$route.query.id);
                if (result.code == 200) {
                    result.info.state = verification_helper.requirement_state_verification(result.info);
                    result.info.time_created = new Date(result.info.time_created);
                    result.info.time_created_string = time_helper.convert_date_to_date_string(result.info.time_created);
                    result.info.date_expire = new Date(result.info.date_expire);
                    result.info.date_expire_string = time_helper.convert_date_to_date_string(result.info.date_expire);
                    this.requirement = result.info;
                    result = await this.get_requirement_creator_info(result.info.creator_id);
                }
            },

            async get_requirement_creator_info(id) {
                let result = await get_user_info_by_id(id);
                if (result.code == 200) {
                    result.info.date_created = new Date(result.info.date_created);
                    result.info.date_created_string = time_helper.convert_date_to_date_string(result.info.date_created);
                    this.requirement_creator = result.info;
                    result = await this.get_commodity();
                }
            },

            async get_commodity() {
                let result = await get_commodity_by_user_id(this.user_info.id);
                if (result.code == 200) {
                    // sync first
                    for (let i = 0; i < result.info.length; i++) {
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                        switch (result.info[i].state) {
                            case 0: {
                                this.commodity_info.state_pending_censorship++;
                                break;
                            }
                            case 1: {
                                this.commodity_info.state_approved++;
                                break;
                            }
                            case 2: {
                                this.commodity_info.state_trading++;
                                break;
                            }
                            case 5: {
                                this.commodity_info.state_rejected++;
                                break;
                            }
                        }
                        result.info[i].state = verification_helper.commodity_state_verification(result.info[i]);
                    }
                    let commodity = versatile_helper.distribution_triple(result.info);
                    this.commodity_count = result.info.length;
                    this.commodity_array_1 = commodity.array_1;
                    this.commodity_array_2 = commodity.array_2;
                    this.commodity_array_3 = commodity.array_3;
                    setTimeout(() => {
                        notification_helper.stop_loading();
                        this.is_add_commodity_available = true;
                    }, 500);
                }
            },

            choose_commodity(e) {
                this.solution.commodity = e;
                window.scroll({top: document.body.clientHeight, left: 0, behavior: "smooth"});
            },

            submission_confirm() {
                this.$confirm(`确认使用物品"${this.solution.commodity.name}"(类别：${this.solution.commodity.type})解决${this.requirement_creator.nickname}的需求？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "info"
                }).then(() => {
                    this.submit();
                }).catch(() => {
                })
            },

            async submit() {
                notification_helper.start_loading("加载中", "solution_confirm_container");
                let email = email_helper.requirement_solution_email(this.solution.commodity, this.requirement_creator, this.requirement, this.user_info);
                const result = await solve_requirement(this.$route.query.id, this.requirement_creator.id, this.solution.commodity.id, this.user_info.id, this.requirement_creator.email, email);
                if (result.code == 200) {
                    notification_helper.show_toast_success(result.msg);
                    notification_helper.stop_loading();
                    this.$router.replace({
                        path: "/mypage/mypage_main"
                    })
                } else {
                    notification_helper.show_toast_error(result.msg);
                    notification_helper.stop_loading();
                }
            },

            goto_commodity_add() {
                this.$router.push({
                    path: "/mypage/commodity_add"
                })
            },


        },
        created() {

        },
        mounted() {
            this.get_requirement();
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