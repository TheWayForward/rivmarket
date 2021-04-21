// facilitating generating dirs

let config = require("../config");
let root = "/public";
let global = `${config.protocol}${config.host}:${config.port}`;

function replace_divide(dirname) {
    for(let i = 0; i < dirname.length; i++) {
        if (dirname[i] == "\\") {
            dirname[i] = "/"
        }
    }
    return dirname;
}

function generate_filepath_for_user_avatar(filepath) {
    filepath = filepath.replace(/\\/g,"\\\\");
    return `${global}/${filepath.slice(7)}`;
}

module.exports = {
    replace_divide: replace_divide,
    generate_filepath_for_user_avatar: generate_filepath_for_user_avatar
}