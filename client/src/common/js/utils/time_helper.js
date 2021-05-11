let ONE_DAY = 86400000;

const format_number = function (n) {
    n = n.toString();
    return n[1] ? n : "0" + n;
}

function days_user_created_till_now (user_info) {
    let d = new Date(user_info.date_created);
    let d_now = new Date();
    return Math.floor( (d_now - d) / ONE_DAY) + 1;
}

function convert_date_to_date_string (date) {
    return `${date.getFullYear()}/${format_number(date.getMonth() + 1)}/${format_number(date.getDate())}`;
}

function convert_date_to_time_string (date) {
    return `${format_number(date.getHours())}:${format_number(date.getMinutes())}:${format_number(date.getSeconds())}`;
}

function convert_date_to_date_time_string (date) {
    return `${convert_date_to_date_string(date)} ${convert_date_to_time_string(date)}`;
}

export default {
    days_user_created_till_now,
    convert_date_to_date_string,
    convert_date_to_time_string,
    convert_date_to_date_time_string
}
