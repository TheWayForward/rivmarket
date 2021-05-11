<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <transition name="fade">
                    <div id="commodity_info_jumbotron" class="jumbotron col-sm-12 shadow overflow-hidden">
                        <div class="row">
                            <!-- info form -->
                            <div class="col-md-8">
                                <h4 class="mb-3">物品信息</h4>
                                <div class="needs-validation">
                                    <div class="row">

                                        <!-- commodity name -->
                                        <div class="col-md-6 mb-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                                                </svg>
                                                名称</label>
                                            <div class="input-group shadow">
                                                <input type="text" class="form-control bg-white" maxlength="20"
                                                       placeholder="填写物品名称，20字以内" v-model="name">
                                            </div>
                                        </div>

                                        <!-- commodity type -->
                                        <div class="col-md-6 mb-3">
                                            <label>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                                                </svg>
                                                类别
                                            </label>
                                            <div class="input-group shadow">
                                                <input class="form-control bg-white"
                                                       placeholder="输入关键词，检索物品类别" maxlength="20"
                                                       v-model="type_keywords">
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-info dropdown-toggle font-weight-bold shadow"
                                                            type="button"
                                                            data-toggle="dropdown"
                                                            :disabled="!is_type_dropdown_available">{{this.type_tip}}
                                                    </button>
                                                    <div class="dropdown-menu pre-scrollable shadow round-10"
                                                         style="height:200px;">
                                                        <a class="dropdown-item cursor-pointer" v-for="item in type_array"
                                                           :key="item.id" @click="choose_type(item)">{{item.name}}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- date purchased -->
                                    <div >
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <label>
                                                    <svg data-v-1ce2dfc2="" xmlns="http://www.w3.org/2000/svg"
                                                         width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
                                                         class="bi bi-save">
                                                        <path data-v-1ce2dfc2=""
                                                              d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"></path>
                                                    </svg>
                                                    购买日期
                                                </label>
                                                <div class="input-group round-5 overflow-hidden shadow">
                                                    <el-date-picker
                                                            class="bg-white w-100"
                                                            v-model="date_purchased"
                                                            type="date"
                                                            placeholder="点击选择日期"
                                                            :picker-options="picker_options">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- password -->
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <label>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
                                                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                                        <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                                                    </svg>
                                                    物品密钥</label>
                                                <div class="input-group shadow">
                                                    <input type="password" class="form-control bg-white" maxlength="20"
                                                           placeholder="6至20位字母、数字或下划线" v-model="password" @input="input_password">
                                                </div>
                                            </div>
                                            <!-- confirm -->
                                            <transition name="fade">
                                                <div class="col-md-6 mb-3" v-if="password.length > 5">
                                                    <label>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                                                        </svg>
                                                        确认物品密钥</label>
                                                    <div class="input-group shadow">
                                                        <input type="password" class="form-control bg-white"
                                                               placeholder="6至20位字母、数字或下划线" v-model="password_confirm" :maxlength="password.length" :disabled='this.strength == "未知，包含非法字符"'>
                                                    </div>
                                                </div>
                                            </transition>
                                        </div>
                                    </div>

                                    <!-- password strength -->
                                    <transition name="fade">
                                        <div class="mb-3" v-if="show_password_strength">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <button style="opacity:1;"
                                                            :class="strength_class"
                                                            disabled="disabled">密码强度：{{strength}}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>

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
                                                <div class="input-group shadow">
                                                    <textarea class="form-control bg-white" maxlength="500"
                                                              placeholder="填写物品简介（简明扼要，100字以上，500字以内）"
                                                              style="resize:none;height:200px;" v-model="detail"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- html links, URL -->
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
                                                             v-for="item in this.html" :key="item.id">
                                                            <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                    <button class="btn btn-outline-danger" :disabled="html_confirmation"
                                                                            @click="delete_url(item)">
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
                                                                       :disabled="html_confirmation"
                                                                       placeholder="填写链接名称"
                                                                       v-model="item.name">
                                                                <input type="text" class="form-control"
                                                                       :disabled="html_confirmation"
                                                                       placeholder="填写链接网址"
                                                                       v-model="item.url">
                                                            </div>
                                                        </div>
                                                    </transition-group>
                                                    <transition name="fade">
                                                        <div class="list-group-item d-flex">
                                                            <!-- add -->
                                                            <button v-if="this.html.length < 5" class="btn btn-outline-info"
                                                                    @click="this.add_url"
                                                                    :disabled="!(this.html.length < 5) || this.html_confirmation">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                     height="16" fill="currentColor"
                                                                     class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </transition>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <hr class="mb-4">
                                    <button class="btn btn-info btn-lg btn-block font-weight-bold shadow mb-4" @click="submission_confirm">
                                        确认添加
                                    </button>
                                </div>
                            </div>

                            <!-- poster upload -->
                            <div class="col-md-4">
                                <h4 class="d-flex justify-content-between align-items-center mb-3">
                                    <span>物品图片</span>
                                </h4>
                                <ul class="list-group mb-3 shadow" id="commodity_poster_upload">
                                    <transition name="fade">
                                        <li v-if='poster_local.name != "点击选择本地图片"' class="list-group-item d-flex justify-content-between lh-condensed">
                                            <div class="rainbow shadow" style="height: auto;">
                                                <img class="w-100 shadow round-10" :src="poster_local_src" alt="">
                                            </div>
                                        </li>
                                    </transition>
                                    <li class="list-group-item d-flex justify-content-between bg-light">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-info font-weight-bold" type="button"
                                                        :disabled='true'>
                                                    上传图片
                                                </button>
                                            </div>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" ref="upload"
                                                       accept="image/jpeg,image/png,image/jpg" @change="choose_poster">
                                                <label class="custom-file-label">{{poster_local.name}}</label>
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
    import {mapActions, mapState} from "vuex";
    import {get_commodity_type_by_name, commodity_poster_upload, commodity_register} from "@/api/index";
    import notification_helper from "@/common/js/utils/notification_helper";
    import versatile_helper from "@/common/js/utils/versatile_helper";
    import time_helper from "@/common/js/utils/time_helper";
    import verification_helper from "@/common/js/utils/verification_helper";
    import lodash from "lodash"

    export default {
        name: "commodity_add",
        watch: {
            type_keywords() {
                this.type_tip = "检索中";
                this.debounced_search_type();
            },
        },
        created() {
            this.debounced_search_type = lodash.debounce(this.search_type, 500);
        },
        data() {
            return {
                name: "",
                type_keywords: "",
                type_tip: "等待输入关键词",
                type_array: [],
                type: "",
                is_type_dropdown_available: false,
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
                date_purchased: "",
                password: "",
                password_confirm: "",
                poster_local: {
                    name: "点击选择本地图片"
                },
                poster_local_src: "",
                detail: "",
                strength: "",
                strength_class: "btn btn-danger shadow font-weight-bold",
                show_password_strength: false,
                html: [],
                html_confirmation: false
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

            input_password() {
                if (this.password.length > 5) {
                    if (!verification_helper.password_verification(this.password)) {
                        this.strength = "未知（包含非法字符）";
                        this.strength_class = "btn btn-secondary shadow font-weight-bold"
                        return;
                    }
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
                    this.strength = 0;
                    this.show_password_strength = false;
                    this.password_confirm = "";
                }
            },
            
            add_url() {
                if (!this.html.length) {
                    this.html.push({
                        id: this.html.length + 1,
                        name: "",
                        url: ""
                    })
                } else if (!this.html[this.html.length - 1].name && !this.html[this.html.length - 1].url) {
                    notification_helper.show_toast_warning("上一条相关链接尚未填写完成");
                    return;
                } else {
                    this.html.push({
                        id: this.html.length + 1,
                        name: "",
                        url: ""
                    })
                }
            },
            
            delete_url(e) {
                if (e.name || e.url) {
                    // not empty
                    this.$confirm(`您确定删除链接"${e.name}"？`, "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(() => {
                        versatile_helper.delete_array_element_by_id(this.html, e.id);
                    }).catch(() => {
                    })
                } else {
                    // empty
                    versatile_helper.delete_array_element_by_id(this.html, e.id);
                }
            },
            
            choose_poster(e) {
                // size check
                if (e.target.files[0].size > 4 * versatile_helper.MB) {
                    // avatar oversized
                    notification_helper.show_toast_warning(`图片过大(${(e.target.files[0].size / versatile_helper.MB).toFixed(2)}MB),请上传不大于4MB的图片`)
                    return;
                }
                this.poster_local = e.target.files[0];
                this.poster_local_src = URL.createObjectURL(e.target.files[0]);
            },
            
            submission_confirm() {
                if (!this.name) {
                    notification_helper.show_toast_warning("未填写物品名称");
                    return;
                }
                if (!this.type) {
                    notification_helper.show_toast_warning("未选择类别");
                    return;
                }
                if (!this.date_purchased) {
                    notification_helper.show_toast_warning("未选择购买日期");
                    return;
                }
                if (!this.password) {
                    notification_helper.show_toast_warning("未填写物品密钥");
                    return;
                } else {
                    if (verification_helper.password_verification(this.password).has_error) {
                        notification_helper.show_toast_warning(verification_helper.password_verification(this.password).detail);
                        return;
                    }
                }
                if (!this.password_confirm) {
                    notification_helper.show_toast_warning("未确认物品密钥");
                    return;
                } else {
                    if (this.password != this.password_confirm) {
                        notification_helper.show_toast_warning("两次输入密钥不一致")
                        return;
                    }
                }
                if (!this.detail) {
                    notification_helper.show_toast_warning("未填写物品简介");
                    return;
                } else {
                    if (this.detail.length < 100) {
                        notification_helper.show_toast_warning(`物品简介过短（现有${this.detail.length}字，应不少于100字）`);
                        return;
                    }
                }
                // urls
                let error = [];
                for (let i = 0; i < this.html.length; i++) {
                    if (!this.html[i].name || !this.html[i].url) {
                        notification_helper.show_toast_warning("存在未完善的连接，请完善后进行确认");
                        return;
                    }
                    if (verification_helper.url_verification(this.html[i].url).has_error) {
                        error.push(this.html[i]);
                    }
                }
                if (error.length) {
                    let error_name = "";
                    for (let i = 0; i < error.length; i++) {
                        error_name += `"${error[i].name}"、`;
                    }
                    // get rid of the tail
                    notification_helper.show_toast_warning(`链接${error_name.substring(0, error_name.length - 1)}格式有误`);
                    return;
                } else {
                    // duplicity check
                    for (let i = 0; i < this.html.length; i++) {
                        let url_compare = this.html[i].url;
                        for (let j = 0; j < this.html.length; j++) {
                            if (j <= i) continue;
                            else {
                                if (url_compare == this.html[j].url) {
                                    notification_helper.show_toast_warning("请勿提交重复的链接");
                                    return;
                                }
                            }
                        }
                    }
                }
                
                if (!this.poster_local_src) {
                    notification_helper.show_toast_warning("未上传物品图片");
                    return;
                }
                this.$confirm(`确定上传物品"${this.name}"？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.submit();
                }).catch(() => {
                })
            },

            async upload_poster(id) {
                // size check passed, upload with form
                let form = new FormData();
                form.append("id", id);
                form.append("poster", this.poster_local, this.poster_local.name);
                return commodity_poster_upload(form);
            },

            async submit() {
                notification_helper.start_loading("加载中", "commodity_info_jumbotron");
                // notification_helper.start_loading("加载中", "commodity_poster_upload");
                // update basic info initially
                let result = await commodity_register(this.user_info.id, this.user_info.id, this.password, this.name, this.type, this.date_purchased, this.detail, this.html)
                if (result.code == 200) {
                    // upload poster
                    result = await this.upload_poster(result.info.id);
                    if (result.code == 200) {
                        // updated successfully
                        notification_helper.show_toast_success("物品添加成功，请等待审核");
                        notification_helper.stop_loading();
                        this.$router.replace("mypage_main");
                    } else {
                        notification_helper.show_toast_error(result.msg);
                        notification_helper.stop_loading();
                    }
                }
            }


        }
    }
</script>

<style scoped>

</style>