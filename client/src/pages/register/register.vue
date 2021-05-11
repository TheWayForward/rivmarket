<template>
    <div id="page" class="d-flex">
        <div id="page_container" class="container" style="padding:120px 25px;">
            <transition name="fade">
                <div id="register_info_jumbotron" class="jumbotron col-sm-12 shadow overflow-hidden">
                    <div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3 align-content-center">
                                    <h6 style="line-height:35px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                                            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                                        </svg>
                                        真实姓名</h6>
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control shadow" v-model="realname"
                                           placeholder="填写您的真实姓名，以便填写寄件人、收件人信息">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3 align-content-center">
                                    <h6 style="line-height:35px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path fill-rule="evenodd"
                                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                        </svg>
                                        用户名</h6>
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control shadow" v-model="username" type="text" maxlength="20"
                                           placeholder="6至20位字母、数字或下划线，用于登录，设置后不可修改">
                                </div>
                            </div>
                        </div>
                        <transition name="fade">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-3 align-content-center">
                                        <h6 style="line-height:35px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
                                                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                                <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                                            </svg>
                                            密码</h6>
                                    </div>
                                    <div class="col-md-8">
                                        <input class="form-control shadow mr-2" type="password" maxlength="20"
                                               v-model="password"
                                               @input="input_password" placeholder="6至20位字母、数字或下划线">

                                    </div>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div class="form-group" v-show="is_confirm_password_available">
                                <div class="row">
                                    <div class="col-md-3 align-content-center">
                                        <h6 style="line-height:35px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                                            </svg>
                                            确认密码</h6>
                                    </div>
                                    <div class="col-md-9 d-flex">
                                        <input class="form-control shadow w-50 mr-2" v-model="password_confirm"
                                               type="password"
                                               :maxlength="password.length" placeholder="重复输入密码，确保您已记住" :disabled='this.strength == "未知，包含非法字符"'>
                                        <button style="height:38px;opacity:1;"
                                                :class="strength_class" v-show="show_password_strength"
                                                disabled="disabled">密码强度：{{strength}}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3 align-content-center">
                                    <h6 style="line-height:35px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                                            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                        </svg>
                                        院校</h6>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control shadow w-50" placeholder="输入关键词"
                                           v-model="university_keywords">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-9 text-left">
                                    <div class="dropdown">
                                        <!--a triangle with border-->
                                        <button class="btn btn-outline-info dropdown-toggle font-weight-bold shadow"
                                                type="button"
                                                data-toggle="dropdown"
                                                v-bind:disabled="!is_university_dropdown_available">
                                            {{university_tip}}
                                        </button>
                                        <div class="dropdown-menu pre-scrollable shadow round-10" style="height:200px;">
                                            <a v-for="item in university_array" :key="item.id"
                                               @click="choose_university(item)" class="dropdown-item cursor-pointer">{{item.name}}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3 align-content-center">
                                    <h6 style="line-height:35px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                                            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                                        </svg>
                                        手机</h6>
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control shadow" maxlength="11" v-model="tel" placeholder="输入您的手机号码">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-9 text-left d-flex">
                                    <input class="form-control shadow w-50 mr-2" maxlength="6" v-model="vcode"
                                           placeholder="输入验证码">
                                    <button class="btn btn-info shadow font-weight-bold" href="" @click="send_vcode">
                                        获取验证码
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3 align-content-center">
                                    <h6 style="line-height:35px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
                                            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                                            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        </svg>
                                        QQ</h6>
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control shadow" v-model="QQ" maxlength="12" placeholder="输入您的QQ号码">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3 align-content-center">
                                    <h6 style="line-height:35px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                        </svg>
                                        email</h6>
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control shadow" v-model="email" maxlength="100" placeholder="填写您的电子邮箱，以便接收重要通知">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3 align-content-center">
                                    <h6 style="line-height:35px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                                        </svg>
                                        住址</h6>
                                </div>
                                <div class="col-md-8">
                                <textarea class="form-control shadow" v-model="address"
                                          style="resize:none;height:100px;"
                                          placeholder="填写您当前的住址，以便填写寄件人、收件人地址" maxlength="200"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group d-flex" style="align-content:center;justify-content:center">
                            <label class="mr-2" style="line-height:35px;">
                                <input type="checkbox" v-model="confirm_terms" @input="change_term_confirmation">
                            </label>
                            <h6 style="line-height:35px;">我已阅读并同意<a href="">《"百川轩"用户服务协议》</a></h6>
                        </div>
                    </div>
                    <div class="btn-group shadow">
                        <button type="button" class="btn btn-outline-info font-weight-bold"
                                @click="goto_login">登录
                        </button>
                        <button type="button" class="btn btn-info font-weight-bold" :disabled="!is_register_available"
                                @click="submit">注册
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import verification_helper from "@/common/js/utils/verification_helper";
    import notification_helper from "@/common/js/utils/notification_helper";
    import {get_university_by_name, register} from "@/api";
    import lodash from "lodash";


    export default {
        name: "login",
        watch: {
            university_keywords: function () {
                this.university_tip = "正在检索";
                this.is_university_dropdown_available = false;
                this.debounced_search_university();
            },


        },
        created: function () {
            this.debounced_search_university = lodash.debounce(this.search_university, 500);
        },
        computed: {
            tel_verification() {
                return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel);
            }
        },
        data() {
            return {
                is_register_available: false,
                university_keywords: "",
                university_tip: "等待输入关键词",
                university: "",
                university_array: [],
                is_university_dropdown_available: false,
                password: "",
                password_confirm: "",
                show_password_strength: false,
                strength_class: "btn btn-danger shadow font-weight-bold",
                strength: 0,
                is_confirm_password_available: false,
                tel: "",
                username: "",
                realname: "",
                vcode: "",
                QQ: "",
                email: "",
                address: "",
                confirm_terms: false,
                user_info: {},
                timer: {},
            }

        },

        methods: {

            goto_login() {
                this.$router.back();
            },

            input_password() {
                if (this.password.length > 5) {
                    if (!verification_helper.password_verification(this.password)) {
                        this.strength = "未知（包含非法字符）";
                        this.strength_class = "btn btn-secondary shadow font-weight-bold"
                        return;
                    }
                    this.is_confirm_password_available = true;
                    this.strength = verification_helper.password_strength_verification(this.password);
                    switch (verification_helper.password_strength_verification(this.password)) {
                        case (0): {
                            this.strength = "未知，包含非法字符";
                            this.strength_class = "btn btn-secondary shadow font-weight-bold";
                            break;
                        }
                        case(1): {
                            this.strength = "弱";
                            this.strength_class = "btn btn-danger shadow font-weight-bold";
                            break;
                        }
                        case (2): {
                            this.strength = "中";
                            this.strength_class = "btn btn-warning shadow font-weight-bold";
                            break;
                        }
                        case (3): {
                            this.strength = "强";
                            this.strength_class = "btn btn-success shadow font-weight-bold";
                            break;
                        }
                    }
                    this.show_password_strength = true;
                } else {
                    this.is_confirm_password_available = false;
                    this.strength = 0;
                    this.show_password_strength = false;
                    this.password_confirm = "";

                }
            },

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

            choose_university(e) {
                this.university_tip = e.name;
                this.university = e.name;
            },

            send_vcode() {
                console.log("send_vcode");
            },

            change_term_confirmation() {
                this.is_register_available = !this.confirm_terms;
            },

            async submit() {
                if (!this.realname) {
                    notification_helper.show_toast_warning("未填写真实姓名");
                    return
                } else {
                    if (verification_helper.realname_verification(this.realname).has_error) {
                        notification_helper.show_toast_warning(verification_helper.realname_verification(this.realname).detail);
                        return;
                    }
                }

                if (!this.username) {
                    notification_helper.show_toast_warning("未填写用户名");
                    return;
                } else {
                    if (verification_helper.username_verification(this.username).has_error) {
                        notification_helper.show_toast_warning(verification_helper.username_verification(this.username).detail);
                        return;
                    }
                }

                if (!this.password) {
                    notification_helper.show_toast_warning("未设置密码");
                    return;
                } else {
                    if (verification_helper.password_verification(this.password).has_error) {
                        notification_helper.show_toast_warning(verification_helper.password_verification(this.password).detail);
                        return;
                    }
                }

                if (this.password && !this.password_confirm) {
                    notification_helper.show_toast_warning("未确认密码");
                    return;
                } else {
                    if (this.password != this.password_confirm) {
                        notification_helper.show_toast_warning("两次输入密码不一致")
                        return;
                    }
                }

                if (!this.university) {
                    notification_helper.show_toast_warning("未选择院校");
                    return;
                }

                if (!this.tel) {
                    notification_helper.show_toast_warning("未输入手机号码");
                    return;
                } else {
                    if (!verification_helper.tel_verification(this.tel)) {
                        notification_helper.show_toast_warning("手机号码格式错误");
                        return;
                    }
                }

                if (!this.vcode) {
                    notification_helper.show_toast_warning("未输入验证码");
                    return;
                } else {
                    console.log("need to add vcode verification");
                }

                if (!this.QQ) {
                    notification_helper.show_toast_warning("未输入QQ号码");
                    return;
                } else {
                    if (!verification_helper.QQ_verification(this.QQ)) {
                        notification_helper.show_toast_warning("QQ号码格式错误");
                        return;
                    }
                }

                if (!this.email) {
                    notification_helper.show_toast_warning("未输入email");
                    return;
                } else {
                    if (!verification_helper.email_verification(this.email)) {
                        notification_helper.show_toast_warning("email格式错误");
                        return;
                    }
                }

                if (!this.address) {
                    notification_helper.show_toast_warning("未填写住址");
                    return;
                }

                // all verification passed
                verification_helper.email_verification(this.email);
                this.is_register_available = false;
                notification_helper.start_loading("加载中", "register_info_jumbotron");
                const result = await register(this.realname, this.username, this.password, this.university_tip, this.tel, this.QQ, this.email, this.address);
                console.log(result);
                if (result.code == 100) {
                    // duplicate username
                    notification_helper.stop_loading();
                    notification_helper.show_toast_warning(result.msg);
                    this.is_register_available = true;
                    return;
                } else if (result.code == 200) {
                    // succeed
                    notification_helper.stop_loading();
                    notification_helper.show_toast_success(result.msg);
                    setTimeout(() => {
                        let obj = document.getElementById("register_info_jumbotron");
                        obj.click();
                        this.$router.back();
                    }, 2000);
                    // what will we do next ?

                } else {
                    // internal error
                    notification_helper.stop_loading();
                    notification_helper.show_toast_error("内部错误");
                    this.is_register_available = true;
                }
            }
        }

    }

</script>

<style scoped>
    @import "../../common/style/base.css";

    #page {
        width: 100%;
        margin: 0;
        background-image: url("../../common/img/background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        text-align: center;
    }

    #page_container {
        background-image: url("../../common/img/background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }


</style>