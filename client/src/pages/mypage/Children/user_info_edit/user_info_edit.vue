<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <transition name="fade">
                <div id="user_info_edit_jumbotron" class="jumbotron col-sm-12 shadow overflow-hidden">
                    <div class="row">
                        <div class="col-md-8">
                            <h4 class="mb-3">用户信息编辑</h4>
                            <div class="needs-validation">
                                <div class="row">
                                    <!-- username -->
                                    <div class="col-md-4 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor"
                                                 class="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                <path fill-rule="evenodd"
                                                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                            </svg>
                                            用户名</label>
                                        <div class="input-group shadow">
                                            <input type="text" class="form-control bg-white" disabled="true"
                                                   v-model="user_info.username">
                                            <!-- lock icon -->
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
                                                </svg>
                                            </span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- realname -->
                                    <div class="col-md-4 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                                                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                                            </svg>
                                            真实姓名
                                        </label>
                                        <div class="input-group shadow">
                                            <input type="text" class="form-control bg-white" disabled="true"
                                                   v-model="user_info.realname">
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
                                                </svg>
                                            </span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- realname -->
                                    <div class="col-md-4 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                <path fill-rule="evenodd"
                                                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                            </svg>
                                            性别
                                        </label>
                                        <div class="input-group shadow">
                                            <div class="btn-group w-100" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-outline-info"
                                                        :disabled="Boolean(user_info.gender)"
                                                        @click="choose_gender_male">男
                                                </button>
                                                <button type="button" class="btn btn-outline-info"
                                                        :disabled="Boolean(user_info.gender)"
                                                        @click="choose_gender_female">女
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <!-- university -->
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                                                <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                            </svg>
                                            院校</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control shadow bg-white" disabled="true"
                                                   required="" v-model="user_info.university">
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                            修改院校</label>
                                        <div class="input-group shadow">
                                            <input class="form-control bg-white" v-model="university_keywords"
                                                   placeholder="搜索其他院校" maxlength="20">
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-info dropdown-toggle font-weight-bold shadow"
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        :disabled="!is_university_dropdown_available">
                                                    {{this.university_tip}}
                                                </button>
                                                <div class="dropdown-menu pre-scrollable shadow round-10"
                                                     style="height:200px;">
                                                    <a v-for="item in university_array" :key="item.id"
                                                       @click="choose_university(item)" class="dropdown-item cursor-pointer">{{item.name}}</a>
                                                </div>
                                            </div>
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-info font-weight-bold shadow"
                                                        type="button"
                                                        @click="confirm_university"
                                                        :disabled="confirmation.university">
                                                    确认
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <!-- nickname -->
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-person-lines-fill"
                                                 viewBox="0 0 16 16">
                                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                            </svg>
                                            昵称</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control shadow bg-white" disabled="true"
                                                   v-model="this.user_info.nickname">
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                            修改昵称</label>
                                        <div class="input-group shadow">
                                            <input type="text" class="form-control bg-white" placeholder="填写新的昵称"
                                                   maxlength="20" v-model="nickname_new"
                                                   :disabled="this.confirmation.nickname">
                                            <div class="input-group-append">
                                                <button class="btn btn-info font-weight-bold"
                                                        :disabled="this.confirmation.nickname"
                                                        @click="confirm_nickname">确认
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <!-- tel -->
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                                                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                                            </svg>
                                            手机</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control shadow bg-white" disabled="true"
                                                   required="" v-model="user_info.tel">
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                            修改手机</label>
                                        <div class="input-group shadow">
                                            <input type="text" class="form-control bg-white" placeholder="填写新的手机号"
                                                   maxlength="11" v-model="tel_new">
                                            <div class="input-group-append">
                                                <button class="btn btn-info font-weight-bold" @click="confirm_tel"
                                                        :disabled="this.confirmation.tel">确认
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <!-- email -->
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                            </svg>
                                            email</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control shadow bg-white" disabled="true"
                                                   required="" v-model="user_info.email">
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                            修改email</label>
                                        <div class="input-group shadow">
                                            <input type="text" class="form-control bg-white" placeholder="填写新的email"
                                                   maxlength="100" v-model="email_new">
                                            <div class="input-group-append">
                                                <button class="btn btn-info font-weight-bold" @click="confirm_email"
                                                        :disabled="this.confirmation.email">确认
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <!-- QQ -->
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
                                                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                                                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            </svg>
                                            QQ</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control shadow bg-white" disabled="true"
                                                   maxlength="12" v-model="user_info.QQ">
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                            修改QQ</label>
                                        <div class="input-group shadow">
                                            <input type="text" class="form-control bg-white" placeholder="填写新的QQ"
                                                   maxlength="20" v-model="QQ_new">
                                            <div class="input-group-append">
                                                <button class="btn btn-info font-weight-bold" @click="confirm_QQ"
                                                        :disabled="this.confirmation.QQ">确认
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <!-- detail -->
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-file-earmark-person"
                                                 viewBox="0 0 16 16">
                                                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                                            </svg>
                                            简介</label>
                                        <textarea class="form-control shadow bg-white" v-model="user_info.detail"
                                                  disabled="true" style="resize:none;height:100px;"/>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                            修改简介</label>
                                        <div class="input-group shadow">
                                                <textarea class="form-control bg-white" v-model="detail_new"
                                                          maxlength="200" placeholder="填写新的简介"
                                                          style="resize:none;height:100px;"/>
                                            <div class="input-group-append">
                                                <button class="btn btn-info font-weight-bold"
                                                        @click="confirm_detail"
                                                        :disabled="confirmation.detail">确认
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <div class="row">
                                        <!-- address -->
                                        <div class="col-md-6 mb-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                          d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                                                </svg>
                                                住址</label>
                                            <textarea class="form-control shadow bg-white" v-model="user_info.address"
                                                      disabled="true" style="resize:none;height:100px;"/>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                </svg>
                                                修改住址</label>
                                            <div class="input-group shadow">
                                                <textarea class="form-control bg-white" v-model="address_new"
                                                          maxlength="200" placeholder="填写新的住址"
                                                          style="resize:none;height:100px;"/>
                                                <div class="input-group-append">
                                                    <button class="btn btn-info font-weight-bold"
                                                            @click="confirm_address"
                                                            :disabled="this.confirmation.address">确认
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mb-4">
                                <button class="btn btn-info btn-lg btn-block font-weight-bold shadow"
                                        @click="submission_confirm"
                                        :disabled="!is_submission_available">
                                    确认修改
                                </button>
                            </div>
                        </div>

                        <!-- avatar and upload -->
                        <div class="col-md-4 mb-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span></span>
                            </h4>
                            <ul class="list-group mb-3 shadow" id="avatar_upload">
                                <transition name="fade">
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div class="shadow round-5 overflow-hidden w-100"
                                             :class='this.avatar_local.size ? "rainbow" : ""'
                                             style="height: auto;">
                                            <transition name="fade">
                                                <img class="w-100 shadow round-10" :src="avatar_local_src" alt="">
                                            </transition>
                                        </div>
                                    </li>
                                </transition>
                                <li class="list-group-item d-flex justify-content-between bg-light">
                                    <div class="input-group mb-3">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" ref="upload"
                                                   accept="image/jpeg,image/png,image/jpg" @change="change_avatar">
                                            <label class="custom-file-label">{{avatar_local.name}}</label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import notification_helper from "@/common/js/utils/notification_helper";
    import verification_helper from "@/common/js/utils/verification_helper";
    import versatile_helper from "@/common/js/utils/versatile_helper";
    import {mapState, mapActions} from "vuex";
    import {get_university_by_name, user_info_update, user_avatar_upload} from "@/api";
    import lodash from "lodash";

    export default {
        name: "user_info_edit",
        watch: {
            university_keywords: function () {
                this.university_tip = "检索中";
                this.confirmation.university = true;
                this.is_university_dropdown_available = false;
                this.debounced_search_university();
            },
        },
        created: function () {
            this.debounced_search_university = lodash.debounce(this.search_university, 500);
            setTimeout(() => {
                this.avatar_local_src = this.user_info.avatar;
            }, 500);
        },
        data() {
            return {
                gender_new: 0,
                university_keywords: "",
                is_university_dropdown_available: false,
                university_tip: "等待输入关键词",
                university_array: [],
                university_new: "",
                nickname_new: "",
                tel_new: "",
                address_new: "",
                email_new: "",
                QQ_new: "",
                detail_new: "",
                avatar_local_src: "",
                avatar_flag: false,
                confirmation: {
                    university: true,
                    nickname: false,
                    tel: false,
                    address: false,
                    email: false,
                    QQ: false,
                    detail: false
                },
                confirmation_info: {
                    gender: "",
                    university: "",
                    nickname: "",
                    tel: "",
                    address: "",
                    email: "",
                    QQ: "",
                    detail: ""
                },
                is_submission_available: true,
                avatar_local: {
                    name: "点击选择本地图片"
                },
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
                sync_user_info: "sync_user_info"
            }),

            async search_university() {
                if (!this.university_keywords) {
                    this.university_tip = "等待输入关键词";
                    this.is_university_dropdown_available = false;
                    this.university_array = [];
                    return;
                }
                const result = await get_university_by_name(this.university_keywords);
                switch (result.code) {
                    case 200: {
                        // has got university data successfully
                        this.university_tip = result.msg;
                        this.is_university_dropdown_available = true;
                        this.university_array = result.info;
                        break;
                    }
                    case 100: {
                        // no match
                        this.university_tip = result.msg;
                        this.is_university_dropdown_available = false;
                        this.university_array = [];
                        break;
                    }
                    case 0: {
                        // internal error
                        this.university_tip = "请求超时"
                        this.is_university_dropdown_available = false;
                        this.university_array = [];
                        break;
                    }
                }
            },

            choose_gender_male(e) {
                this.confirmation_info.gender = 1;
                notification_helper.show_toast_success(`已临时保存：性别：男，提交后将不可更改`);
            },

            choose_gender_female(e) {
                this.confirmation_info.gender = 2;
                notification_helper.show_toast_success(`已临时保存：性别：女，提交后将不可更改`);
            },

            choose_university(e) {
                this.university_tip = e.name;
                this.confirmation.university = false;
            },

            confirm_university() {
                if (this.university_tip == this.user_info.university) {
                    notification_helper.show_toast_warning("院校未变更");
                    return;
                }
                notification_helper.show_toast_success(`已临时保存新的院校：${this.university_tip}`);
                this.university_new = this.university_tip;
                this.is_university_dropdown_available = false;
                this.confirmation.university = true;
            },

            confirm_nickname() {
                if (this.nickname_new == this.user_info.nickname) {
                    notification_helper.show_toast_warning("昵称未变更");
                    return;
                }
                if (!verification_helper.nickname_verification(this.nickname_new).has_error) {
                    notification_helper.show_toast_success(`已临时保存新的昵称：${this.nickname_new}`);
                    this.confirmation_info.nickname = this.nickname_new;
                    this.confirmation.nickname = true;
                } else {
                    notification_helper.show_toast_warning(verification_helper.nickname_verification(this.nickname_new).detail);
                }
            },

            confirm_tel() {
                if (this.tel_new == this.user_info.tel) {
                    notification_helper.show_toast_warning("手机未变更");
                    return;
                }
                if (!verification_helper.tel_verification(this.tel_new).has_error) {
                    notification_helper.show_toast_success(`已临时保存新的手机：${this.tel_new}`);
                    this.confirmation_info.tel = this.tel_new;
                    this.confirmation.tel = true;
                } else {
                    notification_helper.show_toast_warning(verification_helper.tel_verification(this.tel_new).detail);
                }
            },

            confirm_email() {
                if (this.email_new == this.user_info.email) {
                    notification_helper.show_toast_warning("email未变更");
                    return;
                }
                if (!verification_helper.email_verification(this.email_new).has_error) {
                    notification_helper.show_toast_success(`已临时保存新的email：${this.email_new}`);
                    this.confirmation_info.email = this.email_new;
                    this.confirmation.email = true;
                } else {
                    notification_helper.show_toast_warning(verification_helper.email_verification(this.email_new).detail);
                }
            },

            confirm_QQ() {
                if (this.QQ_new == this.user_info.QQ) {
                    notification_helper.show_toast_warning("QQ未变更");
                    return;
                }
                if (!verification_helper.QQ_verification(this.QQ_new).has_error) {
                    notification_helper.show_toast_success(`已临时保存新的QQ：${this.QQ_new}`);
                    this.confirmation_info.QQ = this.QQ_new;
                    this.confirmation.QQ = true;
                } else {
                    notification_helper.show_toast_warning(verification_helper.QQ_verification(this.QQ_new).detail);
                }
            },

            confirm_address() {
                if (this.address_new == this.user_info.address) {
                    notification_helper.show_toast_warning("住址未变更");
                    return;
                }
                if (!verification_helper.address_verification(this.address_new).has_error) {
                    notification_helper.show_toast_success(`已临时保存新的住址：${this.address_new}`);
                    this.confirmation_info.address = this.address_new;
                    this.confirmation.address = true;
                } else {
                    notification_helper.show_toast_warning(verification_helper.address_verification(this.address_new).detail);
                }
            },

            confirm_detail() {
                if (this.detail_new.length < 10) {
                    if (!this.detail_new) {
                        notification_helper.show_toast_warning("简介不能为空");
                        return;
                    }
                    notification_helper.show_toast_warning("简介过短");
                    return;
                }
                if (this.detail_new == this.user_info.detail) {
                    notification_helper.show_toast_warning("简介未变更");
                    return;
                } else {
                    notification_helper.show_toast_success(`已临时保存新的简介：${this.detail_new.slice(0, 9)}...`);
                    this.confirmation_info.detail = this.detail_new;
                    this.confirmation.detail = true;
                }
            },

            change_avatar(e) {
                if (e.target.files[0].size > 1 * versatile_helper.MB) {
                    // avatar oversized
                    notification_helper.show_toast_warning(`图片过大(${(e.target.files[0].size / versatile_helper.MB).toFixed(2)}MB),请上传不大于1MB的图片`)
                    return;
                } else {
                    notification_helper.show_toast_success(`已临时保存新的头像：${e.target.files[0].name}`)
                    this.avatar_local = e.target.files[0];
                    this.avatar_local_src = URL.createObjectURL(e.target.files[0]);
                    this.avatar_flag = true;
                }
            },

            submission_confirm() {
                this.$confirm("确定修改您的用户信息？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.submit();
                }).catch(() => {
                })
            },

            async submit() {
                // check deltas
                if (verification_helper.empty_verification(this.confirmation_info) && !this.avatar_local.size) {
                    notification_helper.show_toast_warning("信息未变更");
                    return;
                }

                this.is_submission_available = false;
                // push in the unmodified fields for database update
                for (let confirmation_attr in this.confirmation_info) {
                    //null, then push in the original
                    if (!this.confirmation_info[confirmation_attr]) {
                        this.confirmation_info[confirmation_attr] = this.user_info[confirmation_attr];
                    }
                }

                // then push back
                for (let confirmation_attr in this.confirmation_info) {
                    this.user_info[confirmation_attr] = this.confirmation_info[confirmation_attr];
                }

                // show loading
                notification_helper.start_loading("加载中", "user_info_edit_jumbotron");
                let result = await user_info_update(this.user_info.id, this.confirmation_info.gender, this.confirmation_info.university, this.confirmation_info.nickname, this.confirmation_info.tel, this.confirmation_info.email, this.confirmation_info.QQ, this.confirmation_info.address, this.confirmation_info.detail);
                if (result.code == 200) {
                    result = await this.upload_avatar();
                    if (result.code == 200) {
                        notification_helper.show_toast_success("用户信息更新成功");
                        if (result.info.avatar) {
                            this.user_info.avatar = result.info.avatar;
                        }
                        this.sync_user_info(this.user_info);
                        window.localStorage.setItem("user_info", JSON.stringify(this.user_info));
                        notification_helper.stop_loading();
                        this.$router.replace("mypage_main");
                    } else {
                        notification_helper.show_toast_error(result.msg);
                        notification_helper.stop_loading();
                    }
                } else {
                    notification_helper.show_toast_error(result.msg);
                    notification_helper.stop_loading();
                }
            },

            async upload_avatar() {
                if (!this.avatar_flag) {
                    return {
                        code: 200,
                        msg: "用户信息更新成功！",
                        info: {}
                    }
                } else {
                    // upload with form
                    let form = new FormData();
                    form.append("id", this.user_info.id);
                    form.append("avatar", this.avatar_local, this.avatar_local.name);
                    return user_avatar_upload(form);
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