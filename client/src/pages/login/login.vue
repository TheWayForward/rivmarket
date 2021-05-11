<template>
    <html>
    <div id="page">
        <div class="container" style="margin-top:150px;">
            <div class="container">
                <div class="row mb-5" style="height:420px;">
                    <div class="col-md-8">


                    </div>
                    <div class="col-md-4">
                        <div class="my-3 p-4 bg-neutral rounded shadow h-100 rainbow">
                            <div class="form-signin align-content-center needs-validation" novalidate="">
                                <div class="text-center mb-4">
                                    <h1 class="h3 mb-3 font-weight-normal mt-3 mb-3">您好，请登录！</h1>
                                </div>

                                <div class="mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle mr-2" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                    <label>用户名/电话/email</label>
                                    <input type="text" class="form-control shadow" placeholder="用户名/电话/email均可登录" v-model="ute" @input="input_ute" required="">
                                </div>
                                <div class="mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock mr-2" viewBox="0 0 16 16">
                                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                        <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                                    </svg>
                                    <label>密码</label>
                                    <input type="password" class="form-control shadow" @input="input_password" v-model="password" required="">
                                </div>
                                <div class="btn-group mt-3 w-100 shadow">
                                    <button type="button" class="btn btn-info font-weight-bold" @click="login" :disabled="!is_login_available">登录</button>
                                    <button type="button" class="btn btn-outline-info font-weight-bold" @click="goto_register">注册</button>
                                </div>
                                <div class="mt-5 text-muted text-center">© 百川轩 2020-2021</div>
                                <div class="text-center">
                                    <small class="text-center text-muted">封面图片：葛饰北斋《神奈川冲浪里》</small>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5"></div>
                <div class="row mb-5"></div>
                <div class="row mb-5"></div>
                <div class="row mb-5"></div>
            </div>
        </div>

    </div>
    </html>
</template>

<script>
    import verification_helper from "@/common/js/utils/verification_helper";
    import notification_helper from "@/common/js/utils/notification_helper";
    import {username_login, tel_login, email_login} from "@/api/index"
    import {mapActions} from "vuex";
    import state from "@/store/state";
    import actions from "@/store/actions";

    export default {
        name: "login",
        computed: {},
        data() {
            return {
                is_login_available: false,
                login_mode: "",
                ute: "",
                password: "",
                form_class: "needs-validation",
                input_password_type: "password",
                password_img: require("./img/hide_password.png"),
                user_info: {},
                loading: false
            }

        },
        methods: {

            ...mapActions({
                sync_user_info: "sync_user_info"
            }),

            change_password_visibility() {
                if (this.input_password_type === "password") {
                    this.input_password_type = "text";
                    this.password_img = require("./img/hide_password.png");
                } else {
                    this.input_password_type = "password";
                    this.password_img = require("./img/show_password.png");
                }
            },

            input_ute() {
                if (this.ute && this.password) {
                    this.is_login_available = true;
                } else {
                    this.is_login_available = false;
                }
            },

            input_password() {
                if (this.ute && this.password) {
                    this.is_login_available = true;
                } else {
                    this.is_login_available = false;
                }
            },

            async login() {
                if (!this.ute || !this.password) {
                    notification_helper.show_toast_warning("输入用户名/电话/email与密码，再登录");
                    return;
                }
                let ute_judgement = verification_helper.ute_judgement(this.ute);
                switch (ute_judgement.type) {
                    case "username": {
                        this.is_login_available = false;
                        notification_helper.start_loading("登录中", "login_info_jumbotron");
                        const result = await username_login(this.ute, this.password);
                        if (result.code == 0) {
                            notification_helper.stop_loading();
                            notification_helper.show_toast_error(result.msg);
                            this.is_login_available = true;
                        } else if (result.code == 200) {
                            // succeed
                            notification_helper.stop_loading();
                            notification_helper.show_toast_success(result.msg);
                            this.is_login_available = false;
                            this.user_info = result.info;
                            this.sync_user_info(this.user_info);
                            this.$router.replace({
                                path: "/home/home_main"
                            })
                            window.localStorage.setItem("user_info", JSON.stringify(this.user_info));
                        } else {
                            notification_helper.stop_loading();
                            notification_helper.show_toast_error("未知错误");
                            this.is_login_available = true;
                        }
                        break;
                    }
                    case "tel": {
                        notification_helper.start_loading("登录中", "login_info_jumbotron");
                        const result = await tel_login(this.ute, this.password);
                        if (result.code == 0) {
                            notification_helper.stop_loading();
                            notification_helper.show_toast_error(result.msg);
                            this.is_login_available = true;
                        } else if (result.code == 200) {
                            // succeed
                            notification_helper.stop_loading();
                            notification_helper.show_toast_success(result.msg);
                            this.is_login_available = false;
                            this.user_info = result.info;
                            this.sync_user_info(this.user_info);
                            this.$router.replace({
                                path: "/home/home_main"
                            })
                            window.localStorage.setItem("user_info", JSON.stringify(this.user_info));
                        } else {
                            notification_helper.stop_loading();
                            notification_helper.show_toast_error("未知错误");
                            this.is_login_available = true;
                        }
                        break;
                    }
                    case "email": {
                        notification_helper.start_loading("登录中", "login_info_jumbotron");
                        const result = await email_login(this.ute, this.password);
                        if (result.code == 0) {
                            notification_helper.stop_loading();
                            notification_helper.show_toast_error(result.msg);
                            this.is_login_available = true;
                        } else if (result.code == 200) {
                            // succeed
                            notification_helper.stop_loading();
                            notification_helper.show_toast_success(result.msg);
                            this.is_login_available = false;
                            this.user_info = result.info;
                            this.sync_user_info(this.user_info);
                            this.$router.replace({
                                path: "/home/home_main"
                            })
                            window.localStorage.setItem("user_info", JSON.stringify(this.user_info));
                        } else {
                            notification_helper.stop_loading();
                            notification_helper.show_toast_error("未知错误");
                            this.is_login_available = true;
                        }
                        break;
                    }
                    default: {
                        notification_helper.show_toast_error("请输入正确的用户名/电话/邮箱。");
                        break;
                    }
                }
            },

            goto_register() {
                this.$router.push({
                    name: "register"
                })
            }
        },
    }

</script>

<style scoped>
    html {
        overflow-y: hidden;
        overflow-x: hidden;
    }

    #page {
        position: absolute;
        width: 100%;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        background-image: url("../../common/img/background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
</style>