// facilitating generating dirs

let config = require("../config");
let root = "/public";
let global = `${config.protocol}${config.host}:${config.port}`;

function replace(filepath) {
    return filepath.replace(/\\/g,"\\\\");
}

function generate_filepath_for_user_avatar(filepath) {
    filepath = replace(filepath);
    return `${global}/${filepath.slice(7)}`;
}

function generate_filepath_for_commodity_poster(filepath) {
    filepath = replace(filepath);
    return `${global}/${filepath.slice(7)}`;
}

module.exports = {
    generate_filepath_for_user_avatar: generate_filepath_for_user_avatar,
    generate_filepath_for_commodity_poster: generate_filepath_for_commodity_poster
}