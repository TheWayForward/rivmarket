<template>
    <div class="navbar navbar-expand-sm navbar-light shadow"
         style="background:linear-gradient(to bottom right, #ED7D31, #FFC186);border-radius: 0 0 20px 20px;">
        <a class="navbar-brand cursor-pointer" @click="goto_home"><img class="top-bar-image"
                                                                       src="../../common/img/logo.png"
                                                                       alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#content">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="content" class="collapse navbar-collapse">
            <ul class="navbar-nav">

                <li class="nav-item" v-if="!this.user_info.id">
                    <a class="nav-link font-weight-bold cursor-pointer" @click="goto_login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"></path>
                            <path fill-rule="evenodd"
                                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
                        </svg>
                        登录/注册</a>
                </li>
                <transition name="fade">
                    <li class="nav-item ml-2" v-if="$store.state.user_info.id">
                        <a class="nav-link font-weight-bold cursor-pointer" @click="goto_mypage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path>
                            </svg>
                            我的主页</a>
                    </li>
                </transition>
                <transition name="fade">
                    <li class="nav-item ml-2" v-if="$store.state.user_info.id">
                        <a class="nav-link font-weight-bold" style="cursor:pointer;" @click="user_log_out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                            </svg>
                            退出登录</a>
                    </li>
                </transition>
                <transition name="fade">
                    <li class="nav-item ml-2">
                        <a class="nav-link cursor-pointer" @click="goto_mypage_commodity_add">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                            </svg>
                            物品处置</a>
                    </li>
                </transition>
                <transition name="fade">
                    <li class="nav-item ml-2" v-if="user_info.is_manager">
                        <a class="nav-link cursor-pointer" @click="goto_manager">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 class="bi bi-tools" viewBox="0 0 16 16">
                                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
                            </svg>
                            管理员</a>
                    </li>
                </transition>
                <transition name="fade">
                    <li class="nav-item ml-2">
                        <a class="nav-link cursor-pointer" @click="goto_official">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            关于我们</a>
                    </li>
                </transition>
                <transition name="fade">
                    <li class="nav-item ml-2">
                        <a class="nav-link" style="text-decoration:underline;"
                           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2021007268">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                            </svg>
                            京ICP备2021007268号</a>
                    </li>
                </transition>
            </ul>
        </div>
    </div>
</template>

<script>
    import notification_helper from "@/common/js/utils/notification_helper";
    import {mapState, mapActions} from "vuex";

    export default {
        name: "navigation_bar",
        data() {
            return {}
        },
        computed: {
            ...mapState({
                user_info: "user_info"
            })
        },
        methods: {
            ...mapActions({
                log_out: "log_out"
            }),

            goto_home() {
                this.$router.replace({
                    path: "/home/home_main"
                })
            },

            goto_login() {
                this.$router.replace({
                    path: "/login"
                })
            },

            goto_mypage() {
                this.$router.push({
                    path: "/mypage/mypage_main"
                })
            },

            goto_mypage_commodity_add() {
                if (!this.user_info.id) {
                    this.$confirm("使用此功能，需要登录/注册。现在登录/注册？", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(() => {
                        this.$router.replace({
                            path: "/login"
                        });
                    }).catch(() => {
                    })
                } else {
                    this.$router.push({
                        path: "/mypage/commodity_add"
                    })
                }
            },

            goto_mypage_requirement_add() {
                if (!this.user_info.id) {
                    this.$confirm("使用此功能，需要登录/注册。现在登录/注册？", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(() => {
                        this.$router.replace({
                            path: "/login"
                        });
                    }).catch(() => {
                    })
                } else {
                    this.$router.push({
                        path: "/mypage/commodity_add"
                    })
                }
            },

            goto_manager() {
                this.$router.replace({
                    path: "/manager/manager_main"
                })
            },

            goto_official() {
                this.$router.replace({
                    path: "/official"
                })
            },

            user_log_out() {
                this.$confirm("您确定要退出登录吗？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "info"
                }).then(() => {
                    notification_helper.show_toast_success("已退出登录！");
                    let result = this.log_out({});
                    this.$router.replace({
                        path: "/home/home_main"
                    });
                    window.localStorage.removeItem("user_info");
                }).catch(() => {
                })
            }
        }
    }
</script>
<style scoped>
    @import "../../common/style/base.css";

    li:hover {
        border-radius: 5px;
        font-weight: bold;
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px,
        rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }

    .top-bar-image {
        margin: 5px;
        height: 50px;
        z-index: 1000;
    }

    .basic-background {
        background: #ED7D31;
    }

    .shadow {
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px,
        rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }

    .shadow-bold {
        box-shadow: 0px 3px 3px 3px gainsboro;
    }

    .shadow-filter {
        filter: drop-shadow(0px 15px 10px #999999);
    }

    .round-5 {
        border-radius: 5px;
    }

    .round-20 {
        border-radius: 20px;
    }

    .overflow-hidden {
        overflow: hidden;
    }

    .bottom-center {
        text-align: center;
        position: fixed;
        bottom: 50px;
    }

    .no-decoration {
        text-decoration: none;
    }

    .center {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    a:link {
        color: black;
    }

    li {
        overflow: hidden;
    }

    li:hover {
        color: #007bff;
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px,
        rgb(0 0 0 / 12%) 0px 1px 10px 0px;
        transition: 0.3s ease;
    }


    /*.nav-link:hover {
        transform: scale(1.05);
        transition: ease 0.5s;
    }*/

</style>