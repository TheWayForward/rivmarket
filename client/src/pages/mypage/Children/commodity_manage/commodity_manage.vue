<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <!-- 3 modes: view, edit, censorship -->

            <!-- view -->
            <transition name="fade">

                    <div id="commodity_view_jumbotron shadow" class="jumbotron col-sm-12 shadow overflow-hidden" v-if='this.$route.query.mode == "view"'>
                        <div class="row text-center" v-if="current_commodity.owner_id != user_info.id">
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
                                    <p>您不是该物品的所有者。</p>
                                    <hr>
                                    <p class="mb-0">为您造成的不便，敬请谅解。百川轩祝您生活愉快！</p>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-else>
                            <div class="col-md-4">
                                <div class="mb-4">
                                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                                        <span></span>
                                    </h4>
                                    <ul class="list-group mb-3 shadow">
                                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <div class="rainbow shadow" style="height: auto;">
                                                <img class="w-100 shadow round-10" :src="current_commodity.poster"
                                                     alt="">
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- commodity info left panel -->
                                    <div class="my-3 p-3 bg-white rounded shadow" style="height:100%;">
                                        <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">基本信息</h6>

                                        <!-- view -->
                                        <div class="media text-muted pt-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                            </svg>
                                            <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <strong class="d-block text-gray-dark">浏览</strong>{{current_commodity.view}}
                                            </p>
                                        </div>


                                        <!-- date purchased -->
                                        <div class="media text-muted pt-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                                                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                            </svg>
                                            <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <strong class="d-block text-gray-dark">购买日期</strong>{{current_commodity.date_purchased_string}}
                                            </p>
                                        </div>

                                        <!-- time created -->
                                        <div class="media text-muted pt-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                            </svg>
                                            <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <strong class="d-block text-gray-dark">创建时间</strong>{{current_commodity.time_created_string}}
                                            </p>
                                        </div>

                                        <!-- last modified -->
                                        <div class="media text-muted pt-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 fill="currentColor" class="bi bi-alt" viewBox="0 0 16 16">
                                                <path d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5zm10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z"/>
                                            </svg>
                                            <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <strong class="d-block text-gray-dark">最近改动</strong>{{current_commodity.last_modified_string}}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h2 class="mb-3 font-weight-bold">{{current_commodity.name}}
                                    <h6>
                                        <span class="badge badge-info shadow ml-2">{{current_commodity.type}}</span>
                                        <span class="badge badge-pill shadow ml-2"
                                              :class="current_commodity.state.class">{{current_commodity.state.name}}</span>
                                    </h6>
                                </h2>
                                <div class="container bg-white round-10 shadow mb-3" style="padding:20px;">
                                    <div class="media">
                                        <span class="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                                                 fill="currentColor" class="bi bi-file-earmark-text"
                                                 viewBox="0 0 16 16">
                                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                            </svg>
                                        </span>
                                        <div class="media-body">
                                            <h5 class="mt-0 font-weight-bold">物品简介</h5>
                                            <p class="text-justify" style="text-indent:34px;">
                                                {{current_commodity.detail}}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="container bg-white round-10 shadow" style="padding:20px;">
                                    <div class="media">
                                        <span class="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                                                 fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                                                <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"/>
                                                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                            </svg>
                                        </span>
                                        <div class="media-body">
                                            <h5 class="mb-3 font-weight-bold">相关链接</h5>
                                            <p class="text-justify" v-if="!current_commodity.html">暂无相关链接...</p>
                                            <div v-else class="list-group">
                                                <a v-for="item in current_commodity.html"
                                                   :key="item.url" :href="item.url"
                                                   class="list-group-item list-group-item-action">{{item.name}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

            </transition>

            <!-- edit -->
            <transition name="fade">

                    <div id="commodity_edit_jumbotron" class="jumbotron col-sm-12 shadow overflow-hidden" v-if='this.$route.query.mode == "edit"'>
                        <div class="row text-center" v-if="!current_commodity.state.is_editable">
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
                                    <p v-if="current_commodity.owner_id == user_info.id">
                                        您的物品（名称：{{current_commodity.name}}，类别：{{current_commodity.type}}）暂不可编辑。若需编辑，请联系管理员。</p>
                                    <p v-else>您不是该物品的所有者。</p>
                                    <hr>
                                    <p class="mb-0">为您造成的不便，敬请谅解。百川轩祝您生活愉快！</p>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-else>
                            <div class="col-md-8">
                                <h4 class="mb-3">物品信息编辑</h4>
                                <div class="needs-validation">
                                    <div class="row">

                                        <!-- name -->
                                        <div class="col-md-6 mb-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                                                </svg>
                                                名称</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control shadow bg-white" disabled="true"
                                                       v-model="current_commodity.name">
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                </svg>
                                                修改名称</label>
                                            <div class="input-group shadow">
                                                <input type="text" class="form-control bg-white" placeholder="填写新的名称"
                                                       maxlength="20" v-model="edit.name_new"
                                                       :disabled="edit.confirmation.name">
                                                <div class="input-group-append">
                                                    <button class="btn btn-info font-weight-bold"
                                                            :disabled="edit.confirmation.name"
                                                            @click="edit_confirm_name">确认
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- type -->
                                    <div class="row">
                                        <!-- type-->
                                        <div class="col-md-6 mb-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                                                </svg>
                                                类别</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control shadow bg-white" disabled="true"
                                                       v-model="current_commodity.type"
                                                       required="">
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                </svg>
                                                修改类别</label>
                                            <div class="input-group shadow">
                                                <input class="form-control bg-white" v-model="type_keywords"
                                                       placeholder="搜索其他类别" maxlength="20">
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-info dropdown-toggle font-weight-bold shadow"
                                                            type="button"
                                                            data-toggle="dropdown"
                                                            :disabled="!edit.is_type_dropdown_available">
                                                        {{type_tip}}
                                                    </button>
                                                    <div class="dropdown-menu pre-scrollable shadow round-10"
                                                         style="height:200px;">
                                                        <a class="dropdown-item cursor-pointer" v-for="item in type_array"
                                                           :key="item.id"
                                                           @click="edit_choose_type(item)">{{item.name}}</a>
                                                    </div>
                                                </div>
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-info font-weight-bold shadow"
                                                            type="button"
                                                            :disabled="edit.confirmation.type"
                                                            @click="edit_confirm_type">
                                                        确认
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- detail -->
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-md-12 mb-3">
                                                <label>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" class="bi bi-file-earmark-text"
                                                         viewBox="0 0 16 16">
                                                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                                    </svg>
                                                    简介</label>
                                                <textarea class="form-control shadow bg-white"
                                                          v-model="current_commodity.detail"
                                                          disabled="true"
                                                          style="resize:vertical;min-height:100px;max-height:300px;"/>
                                            </div>
                                            <div class="col-md-12">
                                                <label>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                    </svg>
                                                    修改简介</label>
                                                <div class="input-group shadow">
                                                <textarea class="form-control bg-white"
                                                          maxlength="500" placeholder="填写新的物品详情"
                                                          style="resize:none;height:100px;" v-model="edit.detail_new"/>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-info font-weight-bold"
                                                                @click="edit_confirm_detail"
                                                                :disabled="edit.confirmation.detail">确认
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- html links, url -->
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-md-12 mb-3">
                                                <label>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                                                        <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"/>
                                                        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                                    </svg>
                                                    相关链接</label>

                                                <div class="list-group shadow">
                                                    <transition-group name="fade">
                                                        <div class="list-group-item list-group-item-action"
                                                             v-for="item in current_commodity.html" :key="item.id">
                                                            <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                    <button class="btn btn-outline-danger" :disabled="edit.confirmation.html"
                                                                            @click="edit_delete_url(item)">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="16" height="16" fill="currentColor"
                                                                             class="bi bi-dash-circle"
                                                                             viewBox="0 0 16 16">
                                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                                <input type="text" class="form-control"
                                                                       :disabled="edit.confirmation.html"
                                                                       placeholder="填写链接名称"
                                                                       v-model="item.name">
                                                                <input type="text" class="form-control"
                                                                       :disabled="edit.confirmation.html"
                                                                       placeholder="填写链接网址"
                                                                       v-model="item.url">
                                                            </div>
                                                        </div>
                                                    </transition-group>
                                                    <transition name="fade">
                                                        <div class="list-group-item d-flex">
                                                            <!-- add -->
                                                            <button v-if="current_commodity.html.length < 5" class="btn btn-outline-info"
                                                                    @click="this.edit_add_url"
                                                                    :disabled="!(current_commodity.html.length < 5) || edit.confirmation.html">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                     height="16" fill="currentColor"
                                                                     class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                                </svg>
                                                            </button>
                                                            <transition name="fade">
                                                                <button class="btn btn-info font-weight-bold ml-2 shadow"
                                                                        @click="edit_confirm_html"
                                                                        :disabled="edit.confirmation.html"
                                                                        v-if="current_commodity.html.length"
                                                                >确认</button>
                                                            </transition>
                                                        </div>
                                                    </transition>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <hr class="mb-4">
                                    <button class="btn btn-info btn-lg btn-block font-weight-bold shadow"
                                            @click="edit_submission_confirm"
                                            :disabled="!edit.is_submission_available">
                                        确认修改
                                    </button>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- poster and upload -->
                                <div class="mb-4">
                                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                                        <span></span>
                                    </h4>
                                    <ul class="list-group mb-3 shadow overflow-hidden" id="commodity_poster_upload">
                                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <div class="w-100 shadow round-5 overflow-hidden" :class='this.edit.poster_local.size ? "rainbow" : ""' style="height:auto;">
                                                <transition name="fade">
                                                    <img class="w-100 shadow round-10" :src="edit.poster_local_src"
                                                         alt="">
                                                </transition>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between bg-light">
                                            <div class="input-group mb-3">
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" ref="upload"
                                                           @change="edit_change_poster"
                                                           accept="image/jpeg,image/png,image/jpg">
                                                    <label class="custom-file-label">{{edit.poster_local.name}}</label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </transition>


            <!-- censorship -->
            <transition name="fade">
                <main role="main" class="container" v-if='this.$route.query.mode == "censorship"'>
                    <div id="commodity_censorship_jumbotron" class="jumbotron col-sm-12 shadow overflow-hidden">
                        <div class="row">
                            <div class="col-md-8">{{this.$route.query.id}}&nbsp;censorship</div>
                            <div class="col-md-4">
                                <!-- avatar and upload -->
                                <div class="mb-4">
                                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                                        <span></span>
                                    </h4>
                                    <ul class="list-group mb-3 shadow">
                                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <div class="rainbow shadow w-100" :class='this.edit.poster_local.size ? "rainbow" : ""' style="height:auto;">
                                                <img class="w-100 shadow round-10" :src="user_info.avatar" alt="">
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </transition>


        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    import {
        commodity_info_update_from_user,
        commodity_poster_upload,
        get_commodity_by_id, get_commodity_by_user_id,
        get_commodity_type_by_name
    } from "@/api/index";
    import notification_helper from "@/common/js/utils/notification_helper";
    import versatile_helper from "@/common/js/utils/versatile_helper";
    import time_helper from "@/common/js/utils/time_helper";
    import verification_helper from "@/common/js/utils/verification_helper";
    import lodash from "lodash"

    export default {
        name: "commodity_manage",
        watch: {
            type_keywords() {
                this.type_tip = "正在检索";
                this.edit.confirmation.type = true;
                this.debounced_search_type();
            },
        },
        created() {
            this.debounced_search_type = lodash.debounce(this.edit_search_type, 500);
            notification_helper.start_loading("加载中", "page_container");
            this.get_commodity();
        },
        data() {
            return {
                current_commodity: {
                    name: "加载中",
                    poster: "../../../../common/img/loading.gif",
                    state: {
                        is_editable: false,
                        class: "badge-secondary"
                    },
                    html: []
                },
                view: {},
                type_keywords: "",
                type_tip: "等待输入关键词",
                type_array: [],
                flag: false,
                edit: {
                    is_type_dropdown_available: false,
                    name_new: "",
                    type_keywords: "",
                    type_new: "",
                    html_new: [],
                    detail_new: "",
                    poster_local: {
                        name: "点击选择本地图片"
                    },
                    poster_local_src: "",
                    confirmation: {
                        name: false,
                        type: true,
                        html: false,
                        detail: false,
                    },
                    confirmation_info: {
                        name: "",
                        type: "",
                        html_new: "",
                        detail: ""
                    },
                    is_submission_available: true
                },
                censorship: {}
            }
        },
        computed: {
            ...mapState({
                user_info: "user_info",
                commodity: "commodity"
            })
        },
        methods: {
            ...mapActions({
                get_commodity_by_user_id: "get_commodity_by_user_id",
                sync_user_commodity: "sync_user_commodity"
            }),

            async get_commodity() {
                const result = await get_commodity_by_id(this.$route.query.id);
                if (result.code == 200) {
                    // succeed
                    notification_helper.stop_loading();
                    result.info.state = verification_helper.commodity_state_verification(result.info);
                    result.info.time_created = new Date(result.info.time_created);
                    result.info.last_modified = new Date(result.info.last_modified);
                    result.info.date_purchased = new Date(result.info.date_purchased);
                    result.info.html = JSON.parse(result.info.html);
                    result.info.time_created_string = time_helper.convert_date_to_date_time_string(result.info.time_created);
                    result.info.last_modified_string = time_helper.convert_date_to_date_time_string(result.info.last_modified);
                    result.info.date_purchased_string = time_helper.convert_date_to_date_string(result.info.date_purchased);
                    this.current_commodity = result.info;
                    console.log(this.current_commodity);
                    this.edit.poster_local_src = result.info.poster;
                }
            },

            // edit
            async edit_search_type() {
                if (!this.type_keywords) {
                    this.type_tip = "等待输入关键词";
                    this.edit.is_type_dropdown_available = false;
                    this.type_array = [];
                    return;
                }
                const result = await get_commodity_type_by_name(this.type_keywords);
                switch (result.code) {
                    case 200: {
                        // has got type data successfully
                        this.type_tip = result.msg;
                        this.edit.is_type_dropdown_available = true;
                        this.type_array = result.info;
                        break;
                    }
                    case 100: {
                        // no match
                        this.type_tip = result.msg;
                        this.edit.is_type_dropdown_available = false;
                        this.type_array = [];
                        break;
                    }
                    case 0: {
                        // internal error
                        this.type_tip = "请求超时"
                        this.edit.is_type_dropdown_available = false;
                        this.type_array = [];
                        break;
                    }
                }
            },

            edit_change_poster(e) {
                // accept new avatar from input
                this.edit.poster_local = e.target.files[0];
                this.edit.poster_local_src = URL.createObjectURL(e.target.files[0]);
            },

            edit_confirm_name() {
                if (this.edit.name_new == this.current_commodity.name) {
                    notification_helper.show_toast_warning("商品名称未变更");
                    return;
                }
                if (!verification_helper.commodity_name_verification(this.edit.name_new).has_error) {
                    notification_helper.show_toast_success(`已临时保存新的昵称：${this.edit.name_new}`);
                    this.edit.confirmation_info.name = this.edit.name_new;
                    this.confirmation.name = true;
                } else {
                    notification_helper.show_toast_warning(verification_helper.commodity_name_verification(this.name_new).detail);
                }
            },

            edit_choose_type(e) {
                this.type_tip = e.name;
                this.edit.confirmation.type = false;
            },

            edit_confirm_type() {
                if (this.type_tip == this.current_commodity.type) {
                    notification_helper.show_toast_warning("类别未变更");
                    return;
                }
                notification_helper.show_toast_success(`已临时保存新的类别：${this.type_tip}`);
                this.edit.confirmation_info.type = this.type_tip;
                this.is_type_dropdown_available = false;
                this.edit.confirmation.type = true;
            },

            edit_confirm_detail() {
                if (this.edit.detail_new == this.current_commodity.detail) {
                    notification_helper.show_toast_warning("物品详情未变更");
                    return;
                } else {
                    if (!verification_helper.commodity_detail_verification(this.edit.detail_new).has_error) {
                        notification_helper.show_toast_success(`已保存新的物品详情：${this.edit.detail_new.slice(0,9)}...`);
                        this.edit.confirmation_info.detail = this.edit.detail_new;
                        this.edit.confirmation.detail = true;
                    } else {
                        notification_helper.show_toast_warning(verification_helper.commodity_detail_verification(this.edit.detail_new).detail)
                        return;
                    }
                }
            },

            edit_add_url(e) {
                if (!this.current_commodity.html.length) {
                    this.current_commodity.html.push({
                        id: this.current_commodity.html.length + 1,
                        name: "",
                        url: ""
                    })
                } else if (!this.current_commodity.html[this.current_commodity.html.length - 1].name && !this.current_commodity.html[this.current_commodity.html.length - 1].url) {
                    notification_helper.show_toast_warning("上一条相关链接尚未填写完成");
                    return;
                } else {
                    this.current_commodity.html.push({
                        id: this.current_commodity.html.length + 1,
                        name: "",
                        url: ""
                    })
                }
            },

            edit_delete_url(e) {
                if (e.name || e.url) {
                    // not empty
                    this.$confirm(`您确定删除链接"${e.name}"？若误删原有链接，可刷新页面进行恢复。`, "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(() => {
                        versatile_helper.delete_array_element_by_id(this.current_commodity.html, e.id);
                    }).catch(() => {
                    })
                } else {
                    // empty
                    versatile_helper.delete_array_element_by_id(this.current_commodity.html, e.id);
                }
            },

            edit_confirm_html() {
                let error = [];
                for (let i = 0; i < this.current_commodity.html.length; i++) {
                    if (!this.current_commodity.html[i].name || !this.current_commodity.html[i].url) {
                        notification_helper.show_toast_warning("存在未完善的连接，请完善后进行确认");
                        return;
                    }
                    if (verification_helper.url_verification(this.current_commodity.html[i].url).has_error) {
                        error.push(this.current_commodity.html[i]);
                    }
                }
                if (error.length) {
                    let error_name = "";
                    for (let i = 0; i < error.length; i++) {
                        error_name += `"${error[i].name}"、`;
                    }
                    // get rid of the tail
                    notification_helper.show_toast_warning(`链接${error_name.substring(0, error_name.length - 1)}格式有误，请修改后进行确认`);
                    return;
                } else {
                    // duplicity check
                    for (let i = 0; i < this.current_commodity.html.length; i++) {
                        let url_compare = this.current_commodity.html[i].url;
                        for (let j = 0; j < this.current_commodity.html.length; j++) {
                            if (j <= i) continue;
                            else {
                                if (url_compare == this.current_commodity.html[j].url) {
                                    notification_helper.show_toast_warning("请勿提交重复的链接");
                                    return;
                                }
                            }
                        }
                    }

                    this.edit.confirmation.html = true;
                    this.edit.confirmation_info.html_new = this.current_commodity.html;
                    let url_name = "";
                    for (let i = 0; i < this.current_commodity.html.length; i++) {
                        url_name += `"${this.current_commodity.html[i].name}"、`;
                    }
                    notification_helper.show_toast_success(`已临时保存您的${this.current_commodity.html.length}条链接：${url_name.substring(0, url_name.length - 1)}`)
                }
            },

            async upload_poster() {
                notification_helper.start_loading("加载中", "commodity_poster_upload");
                // size check
                if (this.edit.poster_local.size > 4 * versatile_helper.MB) {
                    // avatar oversized
                    notification_helper.show_toast_warning(`图片过大(${(this.edit.poster_local.size / versatile_helper.MB).toFixed(2)}MB),请上传不大于4MB的图片`)
                    notification_helper.stop_loading();
                    return;
                }
                // size check passed, upload with form
                let form = new FormData();
                form.append("id", this.current_commodity.id);
                form.append("poster", this.edit.poster_local, this.edit.poster_local.name);
                let result = await commodity_poster_upload(form);
                if (result.code == 200) {
                    // succeed
                    this.current_commodity.poster = result.info.poster;
                    this.edit.poster_local = {
                        name: "点击选择本地图片"
                    };
                    notification_helper.stop_loading();
                    notification_helper.show_toast_success(result.msg);
                } else {
                    notification_helper.stop_loading();
                    notification_helper.show_toast_error(result.msg);
                    this.edit.poster_local = {
                        name: "点击选择本地图片"
                    };
                }
            },

            edit_submission_confirm() {
                this.$confirm("物品信息修改后，须进行二次审核。二次审核通过方可上架。确认修改？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.edit_submit();
                    if (this.edit.poster_local.size) {
                        this.upload_poster();
                    }
                }).catch(() => {
                })
            },

            async edit_submit() {
                if (verification_helper.empty_verification(this.edit.confirmation_info)) {
                    notification_helper.show_toast_warning("信息未变更");
                    return;
                }
                // show loading
                notification_helper.start_loading("加载中", "commodity_edit_jumbotron");
                this.edit.confirmation_info.html_new = JSON.stringify(this.current_commodity.html);
                // push in the unmodified fields for database update
                for (let confirmation_attr in this.edit.confirmation_info) {
                    //null, then push in the original
                    if (!this.edit.confirmation_info[confirmation_attr]) {
                        this.edit.confirmation_info[confirmation_attr] = this.current_commodity[confirmation_attr];
                    }
                }
                const result = await commodity_info_update_from_user(this.current_commodity.id, this.edit.confirmation_info.detail, this.edit.confirmation_info.name, this.edit.confirmation_info.html_new, this.edit.confirmation_info.type);
                if (result.code == 200) {
                    notification_helper.show_toast_success(result.msg);
                    notification_helper.stop_loading();
                    this.$router.replace("mypage_main");
                } else {
                    notification_helper.show_toast_error(result.msg);
                    notification_helper.stop_loading();
                }
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