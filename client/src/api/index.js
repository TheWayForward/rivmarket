import ajax from "@/api/ajax";
import ajax_fileupload from "@/api/ajax_fileupload";

const BASE_URL = "https://www.trwyfowrd.top:3000";

// login with username and password
export const username_login = (username, password) => ajax(`${BASE_URL}/api/username_login`, {
    username,
    password
}, "POST")

// login with tel and password
export const tel_login = (tel, password) => ajax(`${BASE_URL}/api/tel_login`, {tel, password}, "POST");

// login with email and password
export const email_login = (email, password) => ajax(`${BASE_URL}/api/email_login`, {email, password}, "POST");

// fuzzy university search
export const get_university_by_name = (keywords) => ajax(`${BASE_URL}/api/get_university_by_name`, {keywords}, "POST");

// user register
export const register = (realname, username, password, university, tel, QQ, email, address) => ajax(`${BASE_URL}/api/register`, {
    realname,
    username,
    password,
    university,
    tel,
    QQ,
    email,
    address
}, "POST");

// user info update
export const user_info_update = (id, gender, university, nickname, tel, email, QQ, address, detail) => ajax(`${BASE_URL}/api/user_info_update`, {
    id,
    gender,
    university,
    nickname,
    tel,
    email,
    QQ,
    address,
    detail
}, "POST");

// user avatar upload
export const user_avatar_upload = (form) => ajax_fileupload(`${BASE_URL}/api/user_avatar_upload`, form);

// get user info by id
export const get_user_info_by_id = (id) => ajax(`${BASE_URL}/api/get_user_info_by_id`, {id}, "POST");

// get user info by session id
export const get_user_info_by_session_id = (id) => ajax(`${BASE_URL}/api/get_user_info_by_session_id`, {id});

// log out
export const log_out = () => ajax(`${BASE_URL}/api/log_out`);

// get commodity by user id
export const get_commodity_by_user_id = (id) => ajax(`${BASE_URL}/api/get_commodity_by_user_id`, {id}, "POST");

// get commodity by id
export const get_commodity_by_id = (id) => ajax(`${BASE_URL}/api/get_commodity_by_id`, {id}, "POST");

// fuzzy commodity type search
export const get_commodity_type_by_name = (keywords) => ajax(`${BASE_URL}/api/get_commodity_type_by_name`, {keywords}, "POST");

// fuzzy commodity search with name
export const get_commodity_by_name = (keywords) => ajax(`${BASE_URL}/api/get_commodity_by_name`, {keywords}, "POST");

// fuzzy commodity search with type
export const get_commodity_by_type = (keywords) => ajax(`${BASE_URL}/api/get_commodity_by_type`, {keywords}, "POST");

// user get commodity in batches
export const user_get_commodity_batch = (limit_from, limit_length) => ajax(`${BASE_URL}/api/user_get_commodity_batch`, {limit_from, limit_length}, "POST");

// fuzzy requirement search by detail
export const get_requirement_by_detail = (keywords) => ajax(`${BASE_URL}/api/get_requirement_by_detail`, {keywords}, "POST");

// fuzzy requirement search by type
export const get_requirement_by_type = (keywords) => ajax(`${BASE_URL}/api/get_requirement_by_type`, {keywords}, "POST");

// user get requirement in batches
export const user_get_requirement_batch = (limit_from, limit_length) => ajax(`${BASE_URL}/api/user_get_requirement_batch`, {limit_from, limit_length}, "POST");

// commodity poster upload
export const commodity_poster_upload = (form) => ajax_fileupload(`${BASE_URL}/api/commodity_poster_upload`, form);

// commodity info update from user
export const commodity_info_update_from_user = (id, detail, name, html, type) => ajax(`${BASE_URL}/api/commodity_info_update_from_user`, {
    id,
    detail,
    name,
    html,
    type
}, "POST");

// commodity info register
export const commodity_register = (creator_id, owner_id, password, name, type, date_purchased, detail, html) => ajax(`${BASE_URL}/api/commodity_register`, {
    creator_id,
    owner_id,
    password,
    name,
    type,
    date_purchased,
    detail,
    html
}, "POST");

// user get requirement
export const get_requirement_by_user_id = (id) => ajax(`${BASE_URL}/api/get_requirement_by_user_id`, {id}, "POST");

// requirement register
export const requirement_register = (creator_id, commodity_type, date_expire, detail) => ajax(`${BASE_URL}/api/requirement_register`, {
    creator_id,
    commodity_type,
    date_expire,
    detail
}, "POST");

// requirement delete
export const requirement_delete = (id) => ajax(`${BASE_URL}/api/requirement_delete`, {id}, "POST");

// user transactions
// commodity
// get transaction by user id
export const get_transaction_by_user_id = (id) => ajax(`${BASE_URL}/api/get_transaction_by_user_id`, {id}, "POST");

// the buyer creates a transaction
export const create_transaction = (buyer_id, owner_id, commodity_id, detail, email, owner_email) => ajax(`${BASE_URL}/api/create_transaction`, {buyer_id, owner_id, commodity_id, detail, email, owner_email}, "POST");

// both sides look on transaction
export const get_transaction_by_id = (id) => ajax(`${BASE_URL}/api/get_transaction_by_id`, {id}, "POST");

// the owner accepts the transaction
export const owner_accept_transaction = (transaction_id, commodity_id, buyer_id, email, buyer_email) => ajax(`${BASE_URL}/api/owner_accept_transaction`, {transaction_id, commodity_id, buyer_id, email, buyer_email}, "POST");

// the owner rejects the transaction
export const owner_reject_transaction = (transaction_id, commodity_id, email, buyer_email) => ajax(`${BASE_URL}/api/owner_reject_transaction`, {transaction_id, commodity_id, email, buyer_email}, "POST");

// requirement
export const get_requirement_by_id = (id) => ajax(`${BASE_URL}/api/get_requirement_by_id`, {id}, "POST");

//solution
export const solve_requirement = (requirement_id, requirement_creator_id, commodity_id, resolve_id, requirement_creator_email, email) => ajax(`${BASE_URL}/api/solve_requirement`, {requirement_id, requirement_creator_id, commodity_id, resolve_id, requirement_creator_email, email}, "POST");

// manager apis

// manager gets users in batches
export const manager_get_user_batch = (limit_from, limit_length) => ajax(`${BASE_URL}/api/manager_get_user_batch`, {
    limit_from,
    limit_length
}, "POST");

// manager gets one user by id
export const manager_get_user_by_id = (id) => ajax(`${BASE_URL}/api/manager_get_user_by_id`, {id}, "POST");

// manager gets commodities in batches
export const manager_get_commodity_batch = (limit_from, limit_length) => ajax(`${BASE_URL}/api/manager_get_commodity_batch`, {
    limit_from,
    limit_length
}, "POST");

// manager gets one commodity by id
export const manager_get_commodity_by_id = (id) => ajax(`${BASE_URL}/api/manager_get_commodity_by_id`, {id}, "POST");

// manager gets requirements in batches
export const manager_get_requirement_batch = (limit_from, limit_length) => ajax(`${BASE_URL}/api/manager_get_requirement_batch`, {
    limit_from,
    limit_length
}, "POST");

// manager censorship
export const manager_censorship_update = (censorship) => ajax(`${BASE_URL}/api/manager_censorship_update`, {censorship}, "POST");

// manager get censorship by commodity id
export const manager_get_censorship_by_commodity_id = (id) => ajax(`${BASE_URL}/api/manager_get_censorship_by_commodity_id`, {id}, "POST");

// add view
export const add_view = (table, id) => ajax(`${BASE_URL}/api/add_view`, {table, id}, "POST");

// add log
export const add_log = (version, date, detail) => ajax(`${BASE_URL}/api/add_log`, {version, date, detail}, "POST");

// get log
export const get_log = () => ajax(`${BASE_URL}/api/get_log`, {}, "POST");