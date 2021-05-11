<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <transition name="fade">
                <div class="container">
                    <div class="row">
                        <!-- user info left panel -->
                        <div class="my-3 p-3 bg-white rounded shadow col-lg-3" style="height:100%;">
                            <div class="align-items-center text-center p-3 my-3 text-white-50 bg-white rounded shadow col-lg-12 rainbow">
                                <img id="avatar" class="shadow round-5 bg-white w-100"
                                     :src="this.user_info.avatar" alt="">
                                <div class="lh-100 mt-3">
                                    <h4 class="text-white lh-100 font-weight-bold" style="letter-spacing:1px;">
                                        <span class="badge badge-pill shadow basic-background-linear">{{this.user_info.nickname}}</span>
                                    </h4>
                                    <small class="text-dark">{{this.notification_helper.user_greet(this.user_info)}}</small>

                                </div>

                            </div>
                            <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">个人信息</h6>

                            <!-- username -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd"
                                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">用户名</strong>{{this.user_info.username}}
                                </p>
                            </div>

                            <!-- nickname -->
                            <div class="media text-muted pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                </svg>
                                <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">昵称</strong>{{this.user_info.nickname}}
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

                            <small class="d-block text-right mt-3">
                                <a class="cursor-pointer" @click="goto_user_info_edit">编辑</a>
                            </small>
                        </div>


                        <!-- items info right panel -->
                        <div class="col-lg-9 p-0 pl-lg-2">
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
                                                               :class="item.state.class"
                                                               @click="goto_commodity_manage_censorship(item)">{{item.state.name}}</a>
                                                        </div>
                                                        <small class="card-text mt-4">{{item.detail.length >70 ?
                                                            item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                        <div class="justify-content-between align-items-center mt-2">
                                                            <div class="btn-group font-weight-bold w-100 shadow">
                                                                <button type="button"
                                                                        class="btn btn-sm btn-outline-info"
                                                                        @click="goto_commodity_manage_view(item)">查看
                                                                </button>
                                                                <button type="button" class="btn btn-sm btn-info"
                                                                        :disabled="!item.state.is_editable"
                                                                        @click="goto_commodity_manage_edit(item)">编辑
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
                                                               :class="item.state.class"
                                                               @click="goto_commodity_manage_censorship(item)">{{item.state.name}}</a>
                                                        </div>
                                                        <small class="card-text mt-4">{{item.detail.length >70 ?
                                                            item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                        <div class="justify-content-between align-items-center mt-2">
                                                            <div class="btn-group font-weight-bold w-100 shadow">
                                                                <button type="button"
                                                                        class="btn btn-sm btn-outline-info"
                                                                        @click="goto_commodity_manage_view(item)">查看
                                                                </button>
                                                                <button type="button" class="btn btn-sm btn-info"
                                                                        :disabled="!item.state.is_editable"
                                                                        @click="goto_commodity_manage_edit(item)">编辑
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
                                                               :class="item.state.class"
                                                               @click="goto_commodity_manage_censorship(item)">{{item.state.name}}</a>
                                                        </div>
                                                        <small class="card-text mt-4">{{item.detail.length >70 ?
                                                            item.detail.slice(0,70) + "..." : item.detail}}</small>
                                                        <div class="justify-content-between align-items-center mt-2">
                                                            <div class="btn-group font-weight-bold w-100 shadow">
                                                                <button type="button"
                                                                        class="btn btn-sm btn-outline-info"
                                                                        @click="goto_commodity_manage_view(item)">查看
                                                                </button>
                                                                <button type="button" class="btn btn-sm btn-info"
                                                                        :disabled="!item.state.is_editable"
                                                                        @click="goto_commodity_manage_edit(item)">编辑
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <transition name="fade">
                                                    <div class="card mb-4 shadow"
                                                         v-if="this.is_add_commodity_available">
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

                            <!-- requirement right panel -->
                            <div id="requirement_info_right_panel"
                                 class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                                <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">我的需求
                                    <transition-group name="fade">
                                        <span key="requirement_count"
                                              class="badge badge-pill badge-primary shadow ml-2">总数：{{requirement_array.length}}</span>
                                        <span key="pending_count" v-if="requirement_info.state_pending"
                                              class="badge badge-pill badge-secondary shadow ml-2">待解决：{{requirement_info.state_pending}}</span>
                                        <span key="solved_count" v-if="requirement_info.state_solved"
                                              class="badge badge-pill badge-success shadow ml-2">已解决：{{requirement_info.state_solved}}</span>
                                    </transition-group>
                                </h6>
                                <div class="media text-muted pt-3 list-group-item-action round-5"
                                     v-for="item in requirement_array" :key="item.id">
                                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-dark">
                                            <h6>
                                                <span class="badge badge-info shadow">{{item.commodity_type}}</span>
                                                <span class="badge badge-pill shadow ml-2" :class="item.state.class">{{item.state.name}}</span>
                                                <span class="badge badge-secondary shadow ml-2">提交时间：{{item.time_created_string}}</span>
                                                <span v-if="!item.state.value"
                                                      class="badge badge-pill badge-danger shadow ml-2 cursor-pointer"
                                                      @click="delete_confirm(item)">删除</span>
                                            </h6>
                                        </strong>
                                        {{item.detail}}
                                    </p>
                                </div>

                                <!-- add button -->
                                <transition name="fade">
                                    <div class="justify-content-between align-items-center text-center w-100 mt-3"
                                         v-if="!requirement_add_flag">
                                        <button type="button"
                                                class="btn btn-info font-weight-bold shadow"
                                                @click="requirement_add">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" fill="currentColor"
                                                 class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </svg>
                                            添加需求
                                        </button>
                                    </div>
                                </transition>

                                <!-- add_panel -->
                                <transition name="fade">
                                    <div class="justify-content-between align-items-center text-center w-100 mt-3"
                                         v-if="requirement_add_flag">
                                        <div class="jumbotron shadow w-100">
                                            <div class="row mb-3 text-left">
                                                <!-- type -->
                                                <div class="col-md-6 mt-3">
                                                    <label>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                                            <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                                                        </svg>
                                                        需求物品类别</label>
                                                    <div class="input-group shadow">
                                                        <input class="form-control bg-white"
                                                               placeholder="搜索物品类别" v-model="type_keywords"
                                                               maxlength="20" @input="search_type">
                                                        <div class="input-group-append">
                                                            <button class="btn btn-outline-info dropdown-toggle font-weight-bold shadow"
                                                                    type="button"
                                                                    data-toggle="dropdown"
                                                                    :disabled="!is_type_dropdown_available"
                                                            >{{type_tip}}
                                                            </button>
                                                            <div class="dropdown-menu pre-scrollable shadow round-10"
                                                                 style="height:200px;">
                                                                <a class="dropdown-item cursor-pointer"
                                                                   v-for="item in type_array"
                                                                   :key="item.id" @click="choose_type(item)"
                                                                >{{item.name}}</a>
                                                            </div>
                                                        </div>
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
                                                        需求有效期</label>
                                                    <div class="input-group round-5 overflow-hidden shadow">
                                                        <el-date-picker
                                                                class="bg-white w-100"
                                                                v-model="date_expire"
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
                                                        需求描述</label>
                                                    <div class="input-group shadow">
                                                    <textarea class="form-control bg-white" maxlength="500"
                                                              v-model="detail"
                                                              placeholder="填写需求描述（简明扼要，20字以上，500字以内）"
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

                            <!-- transaction created right panel -->
                            <div id="transaction_created_info_right_panel" v-if="transaction_created[0]"
                                 class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                                <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">我发起的交易
                                    <transition-group name="fade">
                                        <span key="transaction_created_count"
                                              class="badge badge-pill badge-primary shadow ml-2"
                                              v-if="transaction_created.length">总数：{{transaction_created.length}}</span>
                                        <span key="transaction_created_going_count"
                                              class="badge badge-pill badge-warning shadow ml-2"
                                              v-if="transaction_info.transaction_created.going">进行中：{{transaction_info.transaction_created.going}}</span>
                                        <span key="transaction_created_completed_count"
                                              v-if="transaction_info.transaction_created.completed"
                                              class="badge badge-pill badge-success shadow ml-2">已成交：{{transaction_info.transaction_created.completed}}</span>
                                        <span key="transaction_created_closed_count"
                                              v-if="transaction_info.transaction_created.closed"
                                              class="badge badge-pill badge-secondary shadow ml-2">已关闭：{{transaction_info.transaction_created.closed}}</span>
                                    </transition-group>
                                </h6>
                                <div class="media text-muted pt-3 list-group-item-action round-5 cursor-pointer"
                                     v-for="item in transaction_created" :key="item.id" @click="goto_transaction_manage(item)">
                                    <div class="round-5 overflow-hidden shadow mr-4"
                                         style="width:64px;height:64px;">
                                        <img class="bd-placeholder-img rounded h-100" :src="item.poster">
                                    </div>
                                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-justify">
                                        <strong class="d-block text-dark"><h6>{{item.name}}
                                            <span class="badge badge-pill shadow ml-2" :class="item.state.class">{{item.state.name}}</span>
                                        </h6></strong>
                                        {{item.detail}}
                                        <strong class="d-block text-dark mt-2">
                                            <h6>
                                                <div class="d-inline-block round-5 shadow mr-2"
                                                     style="width:16px;height:16px;padding:0;">
                                                    <img class="w-100 h-100" :src="item.avatar" alt="">
                                                </div>
                                                <small>{{item.nickname}}(卖家)</small>
                                            </h6>
                                        </strong>
                                    </p>
                                </div>
                            </div>

                            <!-- transaction involved right panel -->
                            <transition name="fade">
                                <div id="transaction_involved_info_right_panel" v-if="transaction_involved[0]"
                                     class="my-3 p-3 bg-white shadow overflow-hidden round-5">
                                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">我参与的交易
                                        <transition-group name="fade">
                                        <span key="transaction_involved_count"
                                              class="badge badge-pill badge-primary shadow ml-2"
                                              v-if="transaction_involved.length">总数：{{transaction_involved.length}}</span>
                                            <span key="transaction_involved_going_count"
                                                  class="badge badge-pill badge-warning shadow ml-2"
                                                  v-if="transaction_info.transaction_involved.going">进行中：{{transaction_info.transaction_involved.going}}</span>
                                            <span key="transaction_involved_completed_count"
                                                  v-if="transaction_info.transaction_involved.completed"
                                                  class="badge badge-pill badge-success shadow ml-2">已成交：{{transaction_info.transaction_involved.completed}}</span>
                                            <span key="transaction_involved_closed_count"
                                                  v-if="transaction_info.transaction_involved.closed"
                                                  class="badge badge-pill badge-secondary shadow ml-2">已关闭：{{transaction_info.transaction_involved.closed}}</span>
                                        </transition-group>
                                    </h6>
                                    <div class="media text-muted pt-3 list-group-item-action cursor-pointer"
                                         v-for="item in transaction_involved"
                                         :key="item.id" @click="goto_transaction_manage(item)">
                                        <div class="round-5 overflow-hidden shadow mr-4"
                                             style="width:64px;height:64px;">
                                            <img class="bd-placeholder-img rounded h-100" :src="item.poster">
                                        </div>
                                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-justify">
                                            <strong class="d-block text-dark"><h6>{{item.name}}
                                                <span class="badge badge-pill shadow ml-2" :class="item.state.class">{{item.state.name}}</span>
                                            </h6></strong>
                                            {{item.detail}}
                                            <strong class="d-block text-dark mt-2">
                                                <h6>
                                                    <div class="d-inline-block round-5 shadow mr-2"
                                                         style="width:16px;height:16px;padding:0;">
                                                        <img class="w-100 h-100" :src="item.avatar" alt="">
                                                    </div>
                                                    <small>{{item.nickname}}(买家)</small>
                                                </h6>
                                            </strong>
                                        </p>
                                    </div>
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
    import notification_helper from "@/common/js/utils/notification_helper";
    import {mapState, mapActions} from "vuex";
    import versatile_helper from "@/common/js/utils/versatile_helper";
    import verification_helper from "@/common/js/utils/verification_helper";
    import time_helper from "@/common/js/utils/time_helper";
    import lodash from "lodash";
    import {
        get_commodity_type_by_name,
        get_requirement_by_user_id, get_transaction_by_user_id,
        get_university_by_name, requirement_delete,
        requirement_register
    } from "@/api";

    export default {
        name: "mypage_main",
        watch: {
            type_keywords: function () {
                this.type_tip = "正在检索";
                this.is_type_dropdown_available = false;
                this.debounced_search_type();
            }
        },
        data() {
            return {
                notification_helper: notification_helper,
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
                requirement_array: [],
                requirement_info: {
                    state_pending: 0,
                    state_solved: 0
                },
                requirement_add_flag: false,
                type_keywords: "",
                type_tip: "等待输入关键词",
                type: "",
                type_array: [],
                is_type_dropdown_available: false,
                date_expire: "",
                picker_options: {
                    disabledDate(time) {
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
                detail: "",
                transaction_created: [],
                transaction_involved: [],
                transaction_info: {
                    transaction_created: {
                        going: 0,
                        completed: 0,
                        closed: 0
                    },
                    transaction_involved: {
                        going: 0,
                        completed: 0,
                        closed: 0
                    }
                }
            }
        }
        ,
        created: function () {
            this.debounced_search_type = lodash.debounce(this.search_type, 500);
        },
        mounted() {
            notification_helper.start_loading("加载中", "items_info_right_panel");
            // set a timer to prevent from empty user data
            setTimeout(() => {
                let result_commodity = this.get_commodity_by_user_id(this.user_info.id);
                result_commodity.then((res) => {
                    // sync first
                    for (let i = 0; i < res.info.length; i++) {
                        res.info[i].time_created = new Date(res.info[i].time_created);
                        res.info[i].time_created_string = time_helper.convert_date_to_date_string(res.info[i].time_created);
                        switch (res.info[i].state) {
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
                        res.info[i].state = verification_helper.commodity_state_verification(res.info[i]);
                    }
                    window.localStorage.setItem("commodity", JSON.stringify(res.info));
                    this.sync_user_commodity(res.info);
                    // then divide in 3 arrays
                    let commodity = versatile_helper.distribution_triple(res.info);
                    this.commodity_count = res.info.length;
                    this.commodity_array_1 = commodity.array_1;
                    this.commodity_array_2 = commodity.array_2;
                    this.commodity_array_3 = commodity.array_3;
                    notification_helper.stop_loading();
                })
                let result_requirement = get_requirement_by_user_id(this.user_info.id);
                result_requirement.then((res) => {
                    switch (res.code) {
                        case 200: {
                            for (let i = 0; i < res.info.length; i++) {
                                switch (res.info[i].state) {
                                    case 0: {
                                        this.requirement_info.state_pending++;
                                        break;
                                    }
                                    case 1: {
                                        this.requirement_info.state_solved++;
                                        break;
                                    }
                                }
                                res.info[i].state = verification_helper.requirement_state_verification(res.info[i]);
                                res.info[i].time_created = new Date(res.info[i].time_created);
                                res.info[i].time_created_string = time_helper.convert_date_to_date_time_string(res.info[i].time_created);
                            }
                            this.requirement_array = res.info;
                            break;
                        }
                        case 0: {
                            console.log(res);
                            break;
                        }
                    }
                })
                let result_transaction = get_transaction_by_user_id(this.user_info.id);
                result_transaction.then((res) => {
                    switch (res.code) {
                        case 200: {
                            this.transaction_info = {
                                transaction_created: {
                                    going: 0,
                                    completed: 0,
                                    closed: 0
                                },
                                transaction_involved: {
                                    going: 0,
                                    completed: 0,
                                    closed: 0
                                }
                            }
                            for (let i = 0; i < res.info.transaction_created.length; i++) {
                                switch (res.info.transaction_created[i].state) {
                                    case 0: {
                                        this.transaction_info.transaction_created.going++;
                                        break;
                                    }
                                    case 1: {
                                        this.transaction_info.transaction_created.completed++;
                                        break;
                                    }
                                    case 2: {
                                        this.transaction_info.transaction_created.closed++;
                                        break;
                                    }
                                }
                                res.info.transaction_created[i].state = verification_helper.transaction_state_verification(res.info.transaction_created[i]);
                                res.info.transaction_created[i].time_created = new Date(res.info.transaction_created[i].time_created);
                                res.info.transaction_created[i].time_created = time_helper.convert_date_to_date_time_string(res.info.transaction_created[i].time_created);
                            }
                            for (let i = 0; i < res.info.transaction_involved.length; i++) {
                                switch (res.info.transaction_involved[i].state) {
                                    case 0: {
                                        this.transaction_info.transaction_involved.going++;
                                        break;
                                    }
                                    case 1: {
                                        this.transaction_info.transaction_involved.completed++;
                                        break;
                                    }
                                    case 2: {
                                        this.transaction_info.transaction_involved.closed++;
                                        break;
                                    }
                                }
                                res.info.transaction_involved[i].state = verification_helper.transaction_state_verification(res.info.transaction_involved[i]);
                                res.info.transaction_involved[i].time_created = new Date(res.info.transaction_involved[i].time_created);
                                res.info.transaction_involved[i].time_created = time_helper.convert_date_to_date_time_string(res.info.transaction_involved[i].time_created);
                            }
                            this.transaction_created = res.info.transaction_created;
                            this.transaction_involved = res.info.transaction_involved;
                            console.log(this.transaction_created, this.transaction_involved);
                            break;
                        }
                        case 0: {
                            console.log(res);
                            break;
                        }
                    }
                })
            }, 1000);
            setTimeout(() => {
                this.is_add_commodity_available = true;
            }, 2000)
        },
        computed: {
            ...
                mapState({
                    user_info: "user_info",
                    commodity: "commodity"
                }),

        }
        ,
        methods: {
            ...mapActions({
                get_commodity_by_user_id: "get_commodity_by_user_id",
                sync_user_commodity: "sync_user_commodity"
            }),

            goto_user_info_edit() {
                this.$router.push({
                    path: "user_info_edit"
                })
            }
            ,

            goto_commodity_manage_view(e) {
                this.$router.push({
                    path: "commodity_manage",
                    query: {
                        id: e.id,
                        mode: "view"
                    }
                })
            }
            ,

            goto_commodity_manage_edit(e) {
                this.$router.push({
                    path: "commodity_manage",
                    query: {
                        id: e.id,
                        mode: "edit"
                    }
                })
            }
            ,

            goto_commodity_manage_censorship(e) {
                this.$router.push({
                    path: "commodity_manage",
                    query: {
                        id: e.id,
                        mode: "censorship"
                    }
                })
            }
            ,

            goto_commodity_add() {
                this.$router.push({
                    path: "commodity_add"
                })
            },

            requirement_add() {
                this.requirement_add_flag = true;
                window.scroll({top: document.body.clientHeight, left: 0, behavior: "smooth"});
            },

            async search_type() {
                if (!this.type_keywords) {
                    this.type_tip = "等待输入关键词";
                    this.is_type_dropdown_available = false;
                    this.type_array = [];
                    return;
                }
                const result = await get_commodity_type_by_name(this.type_keywords);
                switch (result.code) {
                    case 200: {
                        // has got type data successfully
                        this.type_tip = result.msg;
                        this.is_type_dropdown_available = true;
                        this.type_array = result.info;
                        break;
                    }
                    case 100: {
                        // no match
                        this.type_tip = result.msg;
                        this.is_type_dropdown_available = false;
                        this.type_array = [];
                        break;
                    }
                    case 0: {
                        // internal error
                        this.type_tip = "请求超时"
                        this.is_type_dropdown_available = false;
                        this.type_array = [];
                        break;
                    }
                }
            },

            choose_type(e) {
                this.type_tip = e.name;
                this.type = e.name;
            },

            submission_confirm() {
                if (!this.version) {
                    notification_helper.show_toast_warning("未填写版本号");
                    return;
                }
                if (!this.date_created) {
                    notification_helper.show_toast_warning("发布日期未选择");
                    return;
                }
                if (!this.detail) {
                    notification_helper.show_toast_warning("日志内容未填写");
                }
                this.$confirm(`确认提交开发日志？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.submit();
                }).catch(() => {
                })
            },

            async submit() {
                let result = await requirement_register(this.user_info.id, this.type, this.date_expire, this.detail);
                switch (result.code) {
                    case 200: {
                        // succeed
                        this.requirement_add_flag = false;
                        this.type_keywords = "";
                        this.type_tip = "等待输入关键词";
                        this.type = "";
                        this.type_array = [];
                        this.is_type_dropdown_available = false;
                        this.date_expire = "";
                        this.detail = "";
                        notification_helper.show_toast_success(result.msg);
                        result = await get_requirement_by_user_id(this.user_info.id);
                        if (result.code == 200) {
                            console.log(result.info);
                            this.requirement_info.state_pending = 0;
                            this.requirement_info.state_solved = 0;
                            for (let i = 0; i < result.info.length; i++) {
                                switch (result.info[i].state) {
                                    case 0: {
                                        this.requirement_info.state_pending++;
                                        break;
                                    }
                                    case 1: {
                                        this.requirement_info.state_solved++;
                                        break;
                                    }
                                }
                                result.info[i].state = verification_helper.requirement_state_verification(result.info[i]);
                                result.info[i].time_created = new Date(result.info[i].time_created);
                                result.info[i].time_created_string = time_helper.convert_date_to_date_time_string(result.info[i].time_created);
                            }
                            this.requirement_array = result.info;
                        }
                        break;
                    }
                    case 100: {
                        // exceeded
                        notification_helper.show_toast_warning(result.msg);
                        break;
                    }
                    case 0: {
                        // error
                        notification_helper.show_toast_error(result.msg);
                        break;
                    }
                }
            },

            delete_confirm(item) {
                this.$confirm(`确认删除这条关于"${item.commodity_type}"的需求？该需求尚未被解决！`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.delete(item.id);
                }).catch(() => {
                })
            },

            async delete(id) {
                // set requirement at id unavailable
                let result = await requirement_delete(id);
                if (result.code == 200) {
                    this.requirement_add_flag = false;
                    this.type_keywords = "";
                    this.type_tip = "等待输入关键词";
                    this.type = "";
                    this.type_array = [];
                    this.is_type_dropdown_available = false;
                    this.date_expire = "";
                    this.detail = "";
                    notification_helper.show_toast_success(result.msg);
                    result = await get_requirement_by_user_id(this.user_info.id);
                    if (result.code == 200) {
                        this.requirement_info.state_pending = 0;
                        this.requirement_info.state_solved = 0;
                        for (let i = 0; i < result.info.length; i++) {
                            switch (result.info[i].state) {
                                case 0: {
                                    this.requirement_info.state_pending++;
                                    break;
                                }
                                case 1: {
                                    this.requirement_info.state_solved++;
                                    break;
                                }
                            }
                            result.info[i].state = verification_helper.requirement_state_verification(result.info[i]);
                            result.info[i].time_created = new Date(result.info[i].time_created);
                            result.info[i].time_created_string = time_helper.convert_date_to_date_time_string(result.info[i].time_created);
                        }
                        this.requirement_array = result.info;
                    }
                }
            },

            goto_transaction_manage(e) {
                this.$router.push({
                    path: "transaction_manage",
                    query: {
                        transaction_id: e.id
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

    #avatar:hover {
        transform: rotate(360deg);
        transition: 0.5s ease;
    }

    #placeholder {
        background-image: url("../../../../common/img/wood.png");
    }
</style>