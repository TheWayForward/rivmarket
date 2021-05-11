// ajax request module

import axios from "axios"

export default function ajax(url = "", params = {}, type = "GET") {
    let promise;
    return new Promise((resolve, reject) => {
        if (type === "GET") {
            // GET request
            // generate query string from params
            let query_string = "";
            Object.keys(params).forEach(key => {
                query_string += key + "=" + params[key] + "&";
            });
            // filt out the last &
            if (query_string !== "") {
                query_string = query_string.substr(0,query_string.lastIndexOf("&"));
            }
            // generate full URL from query string and params
            url += "?" + query_string;
            promise = axios.get(url);
        } else if (type === "POST") {
            promise = axios.post(url,params);
        }
        promise.then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}
