// home
import home from "@/pages/home/home";
import home_main from "@/pages/home/Children/home_main/home_main";
import commodity_view from "@/pages/home/Children/commodity_view/commodity_view";
import requirement_solve from "@/pages/home/Children/requirement_solve/requirement_solve";

// login
import login from "@/pages/login/login"

// register
import register from "@/pages/register/register";

// official
import official from "@/pages/official/official";

// mypage
import mypage from "@/pages/mypage/mypage";
import commodity_manage from "@/pages/mypage/Children/commodity_manage/commodity_manage";
import transaction_manage from "@/pages/mypage/Children/transaction_manage/transaction_manage";
import user_info_edit from "@/pages/mypage/Children/user_info_edit/user_info_edit";
import mypage_main from "@/pages/mypage/Children/mypage_main/mypage_main";
import commodity_add from "@/pages/mypage/Children/commodity_add/commodity_add";

// manager
import manager from "@/pages/manager/manager";
import manager_main from "@/pages/manager/Children/manager_main/manager_main";
import user_check from "@/pages/manager/Children/user_check/user_check";
import commodity_check from "@/pages/manager/Children/commodity_check/commodity_check";


const router = [
    {
        path: '/',
        redirect: '/home/home_main'
    },
    {
        path: "/home",
        name: "home",
        component: home,
        children: [
            {
                path: "home_main",
                name: "home_main",
                component: home_main
            },
            {
                path: "commodity_view",
                name: "commodity_view",
                component: commodity_view
            },
            {
                path: "requirement_solve",
                name: "requirement_solve",
                component: requirement_solve
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/register",
        name: "register",
        component: register
    },
    {
        path: "/official",
        name: "official",
        component: official
    },
    {
        path: "/mypage",
        name: "mypage",
        component: mypage,
        children: [
            {
                path: "mypage_main",
                name: "mypage_main",
                component: mypage_main
            },
            {
                path: "commodity_manage",
                name: "commodity_manage",
                component: commodity_manage
            },
            {
                path: "commodity_add",
                name: "commodity_add",
                component: commodity_add
            },
            {
                path: "transaction_manage",
                name: "transaction_manage",
                component: transaction_manage
            },
            {
                path: "user_info_edit",
                name: "user_info_edit",
                component: user_info_edit
            }
        ]
    },
    {
        path: "/manager",
        name: "manager",
        component: manager,
        children: [
            {
                path: "manager_main",
                name: "manager_main",
                component: manager_main
            },
            {
                path: "user_check",
                name: "user_check",
                component: user_check
            },
            {
                path: "commodity_check",
                name: "commodity_check",
                component: commodity_check
            },
            {
                path: "user_info_edit",
                name: "user_info_edit",
                component: user_info_edit
            }
        ]
    }]


export default router
