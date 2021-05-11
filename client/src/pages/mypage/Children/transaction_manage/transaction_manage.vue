<template>
    <div id="page">
        <div id="page_container" class="padding_basic">
            <transition name="fade">
                <div id="transaction_info_jumbotron" class="jumbotron col-sm-12 shadow overflow-hidden">
                    <div class="row text-center" v-if="user_info.id != buyer.id && user_info.id != owner.id">
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
                                <p>抱歉，您不能查看与该物品相关的交易信息。</p>
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

                                <!-- owner info left panel -->
                                <div id="owner_info_panel" class="my-3 p-3 bg-white rounded shadow w-100"
                                     style="height:100%;" v-if="transaction.owner_id != user_info.id">
                                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">卖家信息</h6>

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

                                <!-- buyer info left panel -->
                                <div id="buyer_info_panel" class="my-3 p-3 bg-white rounded shadow w-100"
                                     style="height:100%;" v-else>
                                    <h6 class="border-bottom border-gray pb-2 mb-0 font-weight-bold">买家信息</h6>

                                    <!-- nickname -->
                                    <div class="media text-muted pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor"
                                             class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                        </svg>
                                        <p class="media-body ml-3 pb-3 mb-0 small lh-125 border-bottom border-gray">
                                            <strong class="d-block text-gray-dark">昵称</strong>{{this.buyer.nickname}}
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
                                            <strong class="d-block text-gray-dark">注册时间</strong>{{this.buyer.date_created_string}}
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
                                            <strong class="d-block text-gray-dark">院校</strong>{{this.buyer.university}}
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
                                            <strong class="d-block text-gray-dark">手机</strong>{{this.buyer.tel}}
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
                                            <strong class="d-block text-gray-dark">QQ</strong>{{this.buyer.QQ}}
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
                                            <strong class="d-block text-gray-dark">email</strong>{{this.buyer.email}}
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
                                            <strong class="d-block text-gray-dark">住址</strong>{{this.buyer.address}}
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
                                            <strong class="d-block text-gray-dark">简介</strong>{{this.buyer.detail}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <h2 class="mb-3 font-weight-bold">{{current_commodity.name}}
                                <h6>
                                    <span class="badge badge-info shadow ml-2">{{current_commodity.type}}</span>
                                    <span class="badge badge-secondary shadow ml-2">{{current_commodity.time_created_string}}</span>
                                    <span class="badge badge-success badge-pill shadow ml-2"
                                          v-if="this.user_info.id == this.current_commodity.owner_id">我的</span>

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
                                <div class="container bg-white round-10 shadow mb-3"
                                     v-if="this.user_info.id == this.owner.id && this.transaction.state.value == 0"
                                     style="padding:20px;">
                                    <div class="media">
                                        <span class="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                                                 fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                                            </svg>
                                        </span>
                                        <div class="media-body">
                                            <h5 class="mb-3 font-weight-bold">流转</h5>
                                            <div class="w-100 mt-3">
                                                <div class="btn-group w-100 shadow" role="group"
                                                     aria-label="Basic example">
                                                    <button type="button" class="btn font-weight-bold"
                                                            :class="operation.class.accept_transaction"
                                                            @click="choose_accept_transaction">确认交易
                                                    </button>
                                                    <button type="button" class="btn font-weight-bold"
                                                            :class="operation.class.reject_transaction"
                                                            @click="choose_reject_transaction">拒绝交易
                                                    </button>
                                                </div>
                                            </div>

                                            <transition-group name="fade">
                                                <!-- accept -->
                                                <div class="w-100 mt-3" v-if='operation.mode == "accept"' key="accept">
                                                    <div class="list-group shadow">
                                                        <a class="list-group-item list-group-item-action">若确认交易，您的物品"{{current_commodity.name}}"(类别：{{current_commodity.type}})将被出售给买家({{buyer.nickname}})，物品所有权将归买家({{buyer.nickname}})所有。</a>
                                                    </div>
                                                    <div class="input-group shadow mt-3">
                                                        <input v-model="operation.password" type="password"
                                                               class="form-control" placeholder="请输入您的商品密钥，以确认您要这样做"
                                                               maxlength="20">
                                                    </div>
                                                    <transition name="fade">
                                                        <div class="w-100 mt-3"
                                                             v-if="operation.password == current_commodity.password">
                                                            <button type="button"
                                                                    class="btn btn-success btn-lg w-100 shadow font-weight-bold"
                                                                    @click="accept_confirm">确认交易
                                                            </button>
                                                        </div>
                                                    </transition>
                                                </div>
                                                <div class="w-100 mt-3" v-else key="reject">
                                                    <div class="list-group shadow">
                                                        <a class="list-group-item list-group-item-action">若拒绝交易，您的物品"{{current_commodity.name}}"(类别：{{current_commodity.type}})将不会被出售给买家({{buyer.nickname}})，物品交易状态也将被解除，物品将继续公开展示。</a>
                                                    </div>
                                                    <div class="input-group shadow mt-3">
                                                        <input v-model="operation.password" type="password"
                                                               class="form-control" placeholder="请输入您的商品密钥，以确认您要这样做"
                                                               maxlength="20">
                                                    </div>
                                                    <transition name="fade">
                                                        <div class="w-100 mt-3"
                                                             v-if="operation.password == current_commodity.password">
                                                            <button type="button"
                                                                    class="btn btn-danger btn-lg w-100 shadow font-weight-bold"
                                                                    @click="reject_confirm">拒绝交易
                                                            </button>
                                                        </div>
                                                    </transition>
                                                </div>
                                            </transition-group>
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
    import {mapActions, mapState} from "vuex";
    import notification_helper from "@/common/js/utils/notification_helper";
    import {
        get_commodity_by_id,
        get_transaction_by_id,
        get_user_info_by_id,
        owner_accept_transaction,
        owner_reject_transaction
    } from "@/api";
    import time_helper from "@/common/js/utils/time_helper";
    import verification_helper from "@/common/js/utils/verification_helper";
    import email_helper from "@/common/js/utils/email_helper";

    export default {
        name: "transaction_manage",
        data() {
            return {
                transaction: {
                    state: {
                        value: ""
                    }
                },
                current_commodity: {
                    html: []
                },
                owner: {},
                buyer: {},
                operation: {
                    mode: "accept",
                    class: {
                        accept_transaction: "btn-success",
                        reject_transaction: "btn-outline-danger"
                    },
                    password: ""
                }
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

            async get_transaction() {
                notification_helper.start_loading("加载中", "transaction_info_jumbotron");
                let result = await get_transaction_by_id(this.$route.query.transaction_id);
                if (result.code == 200) {
                    result.info.state = verification_helper.transaction_state_verification(result.info);
                    result.info.time_created = new Date(result.info.time_created);
                    result.info.time_created_string = time_helper.convert_date_to_date_time_string(result.info.time_created);
                    this.transaction = result.info;
                    result = await this.get_owner_info(result.info.owner_id, result.info.buyer_id);
                }
            },

            async get_owner_info(id, buyer_id) {
                let result = await get_user_info_by_id(id);
                if (result.code == 200) {
                    result.info.date_created = new Date(result.info.date_created);
                    result.info.date_created_string = time_helper.convert_date_to_date_string(result.info.date_created)
                    this.owner = result.info;
                    result = await this.get_buyer_info(buyer_id);
                }
            },

            async get_buyer_info(id) {
                let result = await get_user_info_by_id(id);
                if (result.code == 200) {
                    result.info.date_created = new Date(result.info.date_created);
                    result.info.date_created_string = time_helper.convert_date_to_date_string(result.info.date_created)
                    this.buyer = result.info;
                    result = await this.get_commodity_info(this.transaction.commodity_id);
                }
            },

            async get_commodity_info(id) {
                let result = await get_commodity_by_id(id);
                if (result.code == 200) {
                    result.info.html = JSON.parse(result.info.html);
                    result.info.time_created = new Date(result.info.time_created);
                    result.info.time_created_string = time_helper.convert_date_to_date_time_string(result.info.time_created);
                    result.info.date_purchased = new Date(result.info.date_purchased);
                    result.info.date_purchased_string = time_helper.convert_date_to_date_string(result.info.date_purchased);
                    this.current_commodity = result.info;
                    notification_helper.stop_loading();
                }
            },

            choose_accept_transaction() {
                this.operation.password = "";
                this.operation.mode = "accept";
                this.operation.class.accept_transaction = "btn-success";
                this.operation.class.reject_transaction = "btn-outline-danger";
            },

            choose_reject_transaction() {
                this.operation.password = "";
                this.operation.mode = "reject";
                this.operation.class.accept_transaction = "btn-outline-success";
                this.operation.class.reject_transaction = "btn-danger";
            },

            accept_confirm() {
                this.$confirm(`确认将物品"${this.current_commodity.name}"(类别：${this.current_commodity.type})出售给${this.buyer.nickname}？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "info"
                }).then(() => {
                    this.accept();
                }).catch(() => {
                })
            },

            reject_confirm() {
                this.$confirm(`拒绝将物品"${this.current_commodity.name}"(类别：${this.current_commodity.type})出售给${this.buyer.nickname}？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "info"
                }).then(() => {
                    this.reject();
                }).catch(() => {
                })
            },

            async accept() {
                let email = email_helper.transaction_owner_accept_email(this.current_commodity, this.buyer, this.owner);
                notification_helper.start_loading("加载中", "transaction_info_jumbotron");
                const result = await owner_accept_transaction(this.transaction.id, this.current_commodity.id, this.buyer.id, email, this.buyer.email);
                switch (result.code) {
                    case 200: {
                        notification_helper.show_toast_success(result.msg);
                        notification_helper.stop_loading();
                        this.$router.push({
                            path: "/mypage/mypage_main",
                        })
                        break;
                    }
                    case 100: {
                        notification_helper.show_toast_warning(result.msg);
                        notification_helper.stop_loading();
                        break;
                    }
                    case 0: {
                        notification_helper.show_toast_error(result.msg);
                        notification_helper.stop_loading();
                        break;
                    }
                }
            },

            async reject() {
                let email = email_helper.transaction_owner_reject_email(this.current_commodity, this.buyer, this.owner);
                notification_helper.start_loading("加载中", "transaction_info_jumbotron");
                const result = await owner_reject_transaction(this.transaction.id, this.current_commodity.id, email, this.buyer.email);
                switch (result.code) {
                    case 200: {
                        notification_helper.show_toast_success(result.msg);
                        notification_helper.stop_loading();
                        this.$router.push({
                            path: "/mypage/mypage_main",
                        })
                        break;
                    }
                    case 100: {
                        notification_helper.show_toast_warning(result.msg);
                        notification_helper.stop_loading();
                        break;
                    }
                    case 0: {
                        notification_helper.show_toast_error(result.msg);
                        notification_helper.stop_loading();
                        break;
                    }
                }
            }

        },
        created() {
            this.get_transaction()
        },
        mounted() {
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