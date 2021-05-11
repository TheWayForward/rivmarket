<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
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
            <transition name="fade">
                <div id="commodity_info_jumbotron" class="jumbotron col-sm-12 shadow overflow-hidden">
                    <div class="row">
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

                                <div class="my-3 p-3 bg-white rounded shadow w-100" style="height:100%;">
                                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">物品所有者信息</h6>

                                    <!-- username -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path fill-rule="evenodd"
                                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                            <strong class="d-block text-gray-dark">用户名</strong>{{this.owner.username}}
                                        </p>
                                    </div>

                                    <!-- nickname -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                            <strong class="d-block text-gray-dark">昵称</strong>{{this.owner.nickname}}
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
                                            <strong class="d-block text-gray-dark">注册时间</strong>{{this.owner.date_created_string}}
                                        </p>
                                    </div>

                                    <!-- university -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                            <strong class="d-block text-gray-dark">院校</strong>{{this.owner.university}}
                                        </p>
                                    </div>

                                    <!-- tel -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                            <strong class="d-block text-gray-dark">手机</strong>{{this.owner.tel}}
                                        </p>
                                    </div>

                                    <!-- QQ -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                                            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                            <strong class="d-block text-gray-dark">QQ</strong>{{this.owner.QQ}}
                                        </p>
                                    </div>

                                    <!-- email -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                            <strong class="d-block text-gray-dark">email</strong>{{this.owner.email}}
                                        </p>
                                    </div>

                                    <!-- address -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                            <strong class="d-block text-gray-dark">住址</strong>{{this.owner.address}}
                                        </p>
                                    </div>

                                    <!-- detail -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray text-justify">
                                            <strong class="d-block text-gray-dark">简介</strong>{{this.owner.detail}}
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
                                        <h5 class="mt-0 font-weight-bold">简介</h5>
                                        <p class="text-justify" style="text-indent:34px;">
                                            {{current_commodity.detail}}</p>
                                    </div>
                                </div>
                            </div>

                            <transition name="fade">
                                <div class="container bg-white round-10 shadow mb-3" style="padding:20px;"
                                     v-if="current_commodity.html.length">
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
                            </transition>

                            <transition name="fade">
                                <div class="container bg-white round-10 shadow mb-3" style="padding:20px;"
                                     v-if="censorship.availability">
                                    <div class="media">
                                        <span class="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                                                 fill="currentColor" class="bi bi-hr" viewBox="0 0 16 16">
                                                <path d="M12 3H4a1 1 0 0 0-1 1v2.5H2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5h-1V4a1 1 0 0 0-1-1zM2 9.5h1V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5h1V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5zm-1.5-2a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/></svg>
                                        </span>
                                        <div class="media-body">
                                            <h5 class="mb-3 font-weight-bold">审核
                                                <span class="badge badge-pill shadow ml-2"
                                                      :class="current_commodity.state.class">商品状态：{{current_commodity.state.name}}</span>
                                            </h5>
                                            <!-- censorship options -->
                                            <div class="w-100" v-if="current_commodity.state.value == 0">
                                                <div class="btn-group shadow w-100 mb-3">
                                                    <!-- approve -->
                                                    <button type="button"
                                                            class="font-weight-bold btn btn-outline-success"
                                                            @click="censorship_choose_approve">通过
                                                    </button>
                                                    <!-- reject -->
                                                    <button type="button"
                                                            class="font-weight-bold btn btn-outline-danger"
                                                            @click="censorship_choose_reject">驳回
                                                    </button>
                                                </div>
                                                <!-- approve panel -->
                                                <transition name="fade">
                                                    <div class="jumbotron shadow w-100 bg-white">
                                                        <transition name="fade">

                                                            <!-- approve -->

                                                            <div v-if='censorship.type == "approve"'>
                                                                <div class="w-100">
                                                                    <div>
                                                                        <h6 class="mb-3 font-weight-bold">审核选项</h6>
                                                                        <hr class="mb-3">
                                                                        <div class="d-block my-3 mb-3">
                                                                            <div class="custom-control custom-radio">
                                                                                <input id="censorship_approve_email_custom"
                                                                                       name="censorship_type"
                                                                                       type="radio"
                                                                                       class="custom-control-input"
                                                                                       required=""
                                                                                       @click="censorship_approve_choose_custom">
                                                                                <label class="custom-control-label"
                                                                                       for="censorship_approve_email_custom">使用自定义回复邮件</label>
                                                                            </div>
                                                                            <div class="custom-control custom-radio">
                                                                                <input id="censorship_approve_email_default"
                                                                                       name="censorship_type"
                                                                                       type="radio"
                                                                                       class="custom-control-input"
                                                                                       required="" checked=""
                                                                                       @click="censorship_approve_choose_default">
                                                                                <label class="custom-control-label"
                                                                                       for="censorship_approve_email_default">使用默认回复邮件</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-12 mb-3">
                                                                                <textarea type="text"
                                                                                          class="form-control shadow w-100"
                                                                                          style="resize:none;height:150px;"
                                                                                          placeholder="填写回复邮件内容"
                                                                                          v-model="censorship.approve.content_display"
                                                                                          :disabled="censorship.approve.default"
                                                                                          required=""
                                                                                          maxlength="500"
                                                                                >
                                                                                </textarea>
                                                                            </div>

                                                                        </div>
                                                                        <hr class="mb-4">
                                                                        <button class="btn btn-success btn-lg btn-block font-weight-bold shadow"
                                                                                type="submit"
                                                                                @click="submission_confirm">通过
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </transition>
                                                        <transition name="fade">

                                                            <!-- reject -->

                                                            <div v-if='censorship.type == "reject"'>
                                                                <div class="w-100">
                                                                    <div>
                                                                        <h6 class="mb-3 font-weight-bold">审核选项</h6>
                                                                        <hr class="mb-3">
                                                                        <div>
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                        class="btn btn-danger dropdown-toggle font-weight-bold shadow"
                                                                                        data-toggle="dropdown"
                                                                                        aria-expanded="false">
                                                                                    {{censorship.reject.reason}}
                                                                                </button>
                                                                                <div class="dropdown-menu"
                                                                                     style="z-index:100;">
                                                                                    <a v-for="item in censorship.reject.reason_array"
                                                                                       :key="item.id"
                                                                                       @click="censorship_reject_choose_reason(item)"
                                                                                       class="dropdown-item">{{item.name}}</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <transition name="fade">
                                                                            <div v-if="censorship.reject.reason_confirm">
                                                                                <div class="d-block my-3 mb-3">
                                                                                    <div class="custom-control custom-radio">
                                                                                        <input id="censorship_reject_email_custom"
                                                                                               name="censorship_type"
                                                                                               type="radio"
                                                                                               class="custom-control-input"
                                                                                               required=""
                                                                                               @click="censorship_reject_choose_custom">
                                                                                        <label class="custom-control-label"
                                                                                               for="censorship_reject_email_custom">使用自定义回复邮件</label>
                                                                                    </div>
                                                                                    <div class="custom-control custom-radio">
                                                                                        <input id="censorship_reject_email_default"
                                                                                               name="censorship_type"
                                                                                               type="radio"
                                                                                               class="custom-control-input"
                                                                                               checked="" required=""
                                                                                               @click="censorship_reject_choose_default">
                                                                                        <label class="custom-control-label"
                                                                                               for="censorship_reject_email_default">使用默认回复邮件</label>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-md-12 mb-3">
                                                                                <textarea type="text"
                                                                                          class="form-control shadow w-100"
                                                                                          style="resize:none;height:150px;"
                                                                                          placeholder="填写回复邮件内容"
                                                                                          v-model="censorship.reject.content_display"
                                                                                          :disabled="censorship.reject.default"
                                                                                          required="">
                                                                                </textarea>
                                                                                    </div>

                                                                                </div>

                                                                                <hr class="mb-4">
                                                                                <button class="btn btn-danger btn-lg btn-block font-weight-bold shadow"
                                                                                        type="submit"
                                                                                        @click="submission_confirm">驳回
                                                                                </button>
                                                                            </div>
                                                                        </transition>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </transition>
                                                    </div>
                                                </transition>
                                            </div>
                                            <div v-else>
                                                <div class="list-group">
                                                    <a class="list-group-item disabled">暂无可用操作</a>
                                                </div>
                                            </div>
                                            <hr class="mb-4">
                                            <!-- censorship history -->
                                            <transition name="fade">
                                                <div class="my-3 p-3 bg-white rounded shadow"
                                                     v-if="censorship_array.length">
                                                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">
                                                        审核历史</h6>
                                                    <transition-group name="fade">
                                                        <div class="media text-muted pt-3 round-5 list-group-item-action"
                                                             v-for="item in censorship_array" :key="item.id">
                                                            <svg v-if="item.type.value == 1"
                                                                 xmlns="http://www.w3.org/2000/svg" width="32"
                                                                 height="32" fill="currentColor" class="bi bi-check2"
                                                                 viewBox="0 0 16 16">
                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                                            </svg>
                                                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32"
                                                                 height="32" fill="currentColor" class="bi bi-x"
                                                                 viewBox="0 0 16 16">
                                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                            </svg>

                                                            <p class="media-body pb-3 mb-0 ml-2 small lh-125 border-bottom border-gray">
                                                                <strong class="text-dark">
                                                                    <div class="d-flex">
                                                                        <h6 class="mb-3">
                                                                            <span class="badge badge-pill shadow ml-2"
                                                                                  :class="item.type.class">{{item.type.name}}</span>
                                                                            <span class="badge badge-pill shadow ml-2 badge-info">审核员：{{item.realname}}</span>
                                                                            <span class="badge shadow ml-2 badge-secondary">审核时间：{{item.time_created_string}}</span>

                                                                        </h6>
                                                                    </div>
                                                                </strong>
                                                                {{item.detail}}
                                                            </p>
                                                        </div>
                                                    </transition-group>
                                                </div>
                                                <div v-else>
                                                </div>
                                            </transition>
                                        </div>
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
    import {
        get_commodity_by_id,
        manager_censorship_update,
        manager_get_censorship_by_commodity_id,
        manager_get_commodity_by_id
    } from "@/api";
    import verification_helper from "@/common/js/utils/verification_helper";
    import time_helper from "@/common/js/utils/time_helper";
    import email_helper from "@/common/js/utils/email_helper";

    export default {
        name: "commodity_check",
        data() {
            return {
                current_commodity: {
                    state: {
                        class: "badge badge-secondary",
                        name: "加载中"
                    },
                    html: []
                },
                owner: {},
                censorship_array: [],
                censorship: {
                    type: "approve",
                    availability: false,
                    approve: {
                        availability: true,
                        default: true,
                        content_display: "",
                        content_default: "",
                        content_custom: ""
                    },
                    reject: {
                        availability: false,
                        default: true,
                        reason: "选择驳回原因",
                        reason_array: [
                            {
                                id: 0,
                                name: "物品类别与物品不符"
                            },
                            {
                                id: 1,
                                name: "物品名称违规或与物品不符"
                            },
                            {
                                id: 2,
                                name: "物品图片违规或与物品不符"
                            },
                            {
                                id: 3,
                                name: "物品简介违规或与物品不符"
                            },
                            {
                                id: 4,
                                name: "相关链接失效，违规或与物品不符"
                            },
                            {
                                id: 5,
                                name: "重复的提交"
                            },
                            {
                                id: 6,
                                name: '"百川轩"不接受此类物品'
                            }
                        ],
                        reason_confirm: false,
                        content_display: "",
                        content_default: "",
                        content_custom: ""
                    }
                }
            }
        },
        computed: {
            ...mapState({
                user_info: "user_info",
                commodity: "commodity"
            }),

        },
        created() {

        },
        mounted() {
            this.get_commodity();
            this.get_censorship_array();
        },
        methods: {
            ...mapActions({
                get_commodity_by_user_id: "get_commodity_by_user_id",
                sync_user_commodity: "sync_user_commodity"
            }),

            async get_commodity() {
                notification_helper.start_loading("加载中", "commodity_info_jumbotron");
                const result = await manager_get_commodity_by_id(this.$route.query.id);
                if (result.code == 200) {
                    // succeed
                    notification_helper.stop_loading();
                    // current commodity parse
                    result.info.current_commodity.state = verification_helper.commodity_state_verification(result.info.current_commodity);
                    result.info.current_commodity.time_created = new Date(result.info.current_commodity.time_created);
                    result.info.current_commodity.last_modified = new Date(result.info.current_commodity.last_modified);
                    result.info.current_commodity.date_purchased = new Date(result.info.current_commodity.date_purchased);
                    result.info.current_commodity.html = JSON.parse(result.info.current_commodity.html);
                    result.info.current_commodity.time_created_string = time_helper.convert_date_to_date_time_string(result.info.current_commodity.time_created);
                    result.info.current_commodity.last_modified_string = time_helper.convert_date_to_date_time_string(result.info.current_commodity.last_modified);
                    result.info.current_commodity.date_purchased_string = time_helper.convert_date_to_date_string(result.info.current_commodity.date_purchased);
                    // owner info parse
                    result.info.owner.date_created = new Date(result.info.owner.date_created);
                    result.info.owner.date_created_string = time_helper.convert_date_to_date_string(result.info.owner.date_created)
                    this.current_commodity = result.info.current_commodity;
                    this.owner = result.info.owner;
                    this.censorship.availability = true;
                    this.censorship.approve.content_default = email_helper.commodity_approve_email(this.current_commodity, this.user_info, this.owner);
                    this.censorship.approve.content_display = this.censorship.approve.content_default;
                }
            },

            async get_censorship_array() {
                const result = await manager_get_censorship_by_commodity_id(this.$route.query.id);
                if (result.code == 200) {
                    let censorship_array = result.info;
                    for (let i = 0; i < censorship_array.length; i++) {
                        censorship_array[i].time_created = new Date(censorship_array[i].time_created);
                        censorship_array[i].time_created_string = time_helper.convert_date_to_date_time_string(censorship_array[i].time_created);
                        censorship_array[i].type = verification_helper.censorship_type_verification(censorship_array[i]);
                    }
                    this.censorship_array = censorship_array;
                    console.log(this.censorship_array);
                }
            },

            censorship_choose_approve() {
                this.censorship.type = "approve";
            },

            censorship_approve_choose_custom() {
                this.censorship.approve.default = false;
                this.censorship.approve.content_display = this.censorship.approve.content_custom;
            },

            censorship_approve_choose_default() {
                this.censorship.approve.default = true;
                this.censorship.approve.content_display = this.censorship.approve.content_default;
            },

            censorship_choose_reject() {
                this.censorship.type = "reject";
            },

            censorship_reject_choose_reason(e) {
                this.censorship.reject.reason = e.name;
                this.censorship.reject.content_default = email_helper.commodity_reject_email(this.current_commodity, this.user_info, this.owner, e.name);
                this.censorship.reject.content_display = this.censorship.reject.content_default;
                this.censorship.reject.reason_confirm = true;
            },

            censorship_reject_choose_custom() {
                this.censorship.reject.default = false;
                this.censorship.reject.content_display = this.censorship.reject.content_custom;
            },

            censorship_reject_choose_default() {
                this.censorship.reject.default = true;
                this.censorship.reject.content_display = this.censorship.reject.content_default;
            },

            submission_confirm() {
                this.$confirm(`确认${this.censorship.type == "approve" ? "通过" : "驳回"}物品"${this.current_commodity.name}"的审核？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.submit();
                }).catch(() => {
                })
            },

            async submit() {
                if (this.censorship.type == "approve" && !this.censorship.approve.content_display) {
                    // approved
                    notification_helper.show_toast_warning("未填写审核通过自定义邮件");
                    return;
                } else if (this.censorship.type == "reject" && !this.censorship.reject.content_display) {
                    // rejected
                    notification_helper.show_toast_warning("未填写审核驳回自定义邮件");
                    return;
                }
                notification_helper.start_loading("加载中", "commodity_info_jumbotron");
                let detail = "";
                switch (this.censorship.type) {
                    case "approve": {
                        if (!this.censorship.approve.default) {
                            detail = this.censorship.approve.content_display + "（审核通过）";
                        } else {
                            detail = this.censorship.approve.content_display;
                        }
                        break;
                    }
                    case "reject": {
                        if (!this.censorship.reject.default) {
                            detail = this.censorship.reject.content_display + `（审核驳回，原因：${this.censorship.reject.reason}）`;
                        } else {
                            detail = this.censorship.reject.content_display;
                        }
                        break;
                    }
                }
                let censorship = {
                    type: this.censorship.type == "approve" ? 1 : 0,
                    censor_id: this.user_info.id,
                    commodity_id: this.current_commodity.id,
                    detail: detail,
                    owner_email: this.owner.email
                };
                let result = await manager_censorship_update(censorship);
                if (result.code == 200) {
                    // succeed
                    notification_helper.show_toast_success(result.msg);
                    notification_helper.stop_loading();
                    this.$router.replace("manager_main");
                } else {
                    notification_helper.show_toast_error(result.msg);
                    notification_helper.stop_loading();
                }
            },

        },

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

    .avatar {
        height: 100px;
        border-radius: 10px;
    }

    #placeholder {
        background-image: url("../../../../common/img/wood.png");
    }
</style>