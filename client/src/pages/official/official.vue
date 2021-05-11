<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <transition name="fade">
                <div class="container">
                    <div class="jumbotron shadow basic-background-linear">
                        <!-- trademark and slogan -->
                        <div class="jumbotron shadow">
                            <img class="w-100" src="../../../src/common/img/logo.png" alt="">
                            <img class="w-100" src="../../../src/common/img/slogan.png" alt="">
                            <div class="row text-center">
                                <div class="col-md-12">
                                    <hr class="mb-4">
                                    <div class="alert alert-info shadow" role="alert">
                                        <p class="font-italic">用您的物品，解决他人的需求；或是他人用其物品，解决您的需求。总而言之，<span class="font-weight-bold">物尽其用。</span></p>
                                        <hr>
                                        <p>
                                            树立正确的环境保护意识与勤俭节约观念，是个人发展、社会发展与公民道德建设的重要内容。
                                        </p>
                                        <p>
                                            我们立志通过该项目的开发，在锻炼技术能力的同时，推动环保意识的普及，倡导勤俭节约新风尚。
                                        </p>
                                        <p>
                                            ——摘自《"百川轩"介绍文档》
                                        </p>
                                        <hr>
                                        <p style="font-family: Consolas">Copyright © TrWyFowrd 2021</p>
                                        <p style="font-family: Consolas">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                 class="bi bi-house-door mr-2" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                            <a href="https://github.com/TheWayForward/rivmarket">GitHub</a>
                                        </p>
                                    </div>
                                    <hr class="mt-4">
                                </div>
                            </div>
                        </div>
                        <!-- reference -->
                        <div class="jumbotron shadow">
                            <div class="row text-center">
                                <div class="col-md-12">
                                    <img class="w-100" src="../../../src/common/img/reference.png" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- log -->
                        <div class="jumbotron shadow">
                            <div class="text-center">
                                <div id="log" class="my-3 p-3 bg-white rounded shadow overflow-hidden">
                                    <h4 class="border-bottom pb-2 mb-2 font-weight-bold">开发日志</h4>
                                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">
                                        <span class="badge badge-pill badge-primary shadow ml-2">总数：{{logs.length}}</span>
                                        <span class="badge badge-pill badge-secondary shadow ml-2">最近更新：{{logs[0].time_created_string}}</span>
                                    </h6>

                                    <transition-group name="fade" class="w-100">
                                        <div class="media text-muted pt-3 list-group-item-action round-5 cursor-pointer"
                                             v-for="item in logs" :key="item.id">
                                            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-dark">
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
    import {get_log} from "@/api";
    import time_helper from "@/common/js/utils/time_helper";

    export default {
        name: "official",
        data() {
            return {
                logs: []
            }
        },
        methods: {
            async get_log() {
                const result = await get_log();
                if (result.code == 200) {
                    for (let i = 0; i < result.info.length; i++) {
                        result.info[i].time_created = new Date(result.info[i].time_created);
                        result.info[i].time_created_string = time_helper.convert_date_to_date_string(result.info[i].time_created);
                    }
                    this.logs = result.info;
                }
            }
        },
        created() {

        },
        mounted() {
            this.get_log();
        }
    }
</script>

<style scoped>
    @import "../../common/style/base.css";

    #page {
        height: 100%;
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