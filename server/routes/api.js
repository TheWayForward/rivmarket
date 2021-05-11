const users = {};
var express = require("express");
var path = require("path");
var multiparty = require("multiparty");
var node_mailer = require("nodemailer");
var file_upload = require("express-fileupload");
var multer = require("multer");
var busboy = require("connect-busboy");
var fs = require("fs");
var db = require("../database/database");
var config = require("../config");
var cors = require("cors");
var router = express.Router();

var directory_helper = require("../utils/directory_helper");

// init mail server, key fhbtcfuhqhlfbbca mppioylcmzfybchb
var mailer = node_mailer.createTransport({
    host: "smtp.qq.com",
    service: "qq",
    secure: true,
    auth: {
        user: "951947409@qq.com",
        pass: "vnybljqsrnxybdff"
    }
})

// mail template
var mail_options = function (email_to, subject, html) {
    return {
        from: config.mail_account,
        to: email_to,
        subject: subject,
        html: html
    }
}

// response on ajax requests

// user apis

// login with username and password
router.post("/username_login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let sql = `SELECT * FROM user WHERE username = "${username}"`;
    db.query(sql, (err, result, fields) => {
        if (err) {
            console.log("api: /username_login has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        } else {
            result = JSON.parse(JSON.stringify(result));
            console.log(result);
            if (result[0]) {
                if (result[0].password !== password) {
                    res.json({
                        code: 0,
                        msg: "密码错误！"
                    })
                } else {
                    req.session.id = result[0].id;
                    res.json({
                        code: 200,
                        msg: "登录成功！(登录类型：用户名)",
                        info: result[0]
                    })
                }
            } else {
                res.json({
                    code: 0,
                    msg: "用户不存在！",
                    info: res[0]
                })
            }
        }
    })
})

// login with tel and password
router.post("/tel_login", (req, res) => {
    let tel = req.body.tel;
    let password = req.body.password;
    let sql = `SELECT * FROM user WHERE tel = "${tel}"`;
    db.query(sql, (err, result, fields) => {
        if (err) {
            console.log("api: /tel_login has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误"
            })
        } else {
            result = JSON.parse(JSON.stringify(result));
            if (result[0]) {
                if (result[0].password !== password) {
                    res.json({
                        code: 0,
                        msg: "密码错误！"
                    })
                } else {
                    console.log(result[0].id);
                    req.session.id = result[0].id;
                    res.json({
                        code: 200,
                        msg: "登录成功！(登录类型：电话)",
                        info: result[0]
                    })
                }
            } else {
                res.json({
                    code: 0,
                    msg: "用户不存在！",
                    info: res[0]
                })
            }
        }
    })
})

// login with email and password
router.post("/email_login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let sql = `SELECT * FROM user WHERE email = "${email}"`;
    console.log(sql);
    db.query(sql, (err, result, fields) => {
        if (err) {
            console.log("api: /email_login has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误"
            })
        } else {
            result = JSON.parse(JSON.stringify(result));
            console.log(result);
            if (result[0]) {
                if (result[0].password !== password) {
                    res.json({
                        code: 0,
                        msg: "密码错误！"
                    })
                } else {
                    req.session.id = result[0].id;
                    res.json({
                        code: 200,
                        msg: "登录成功！(登录类型：email)",
                        info: result[0]
                    })
                }
            } else {
                res.json({
                    code: 0,
                    msg: "用户不存在！",
                    info: res[0]
                })
            }
        }
    })
})

// get userinfo by session id
router.get("api/get_user_info_by_session_id", (req, res) => {
    let id = req.query.id || req.session.id;
    let sql = `SELECT * FROM user WHERE id = ${id} LIMIT 1`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            result = JSON.parse(JSON.stringify(result));
            if (!result[0]) {
                // result is empty, session expired
                delete req.session.id;
                res.json({
                    code: 300,
                    msg: "登录已过期，请重新登录！"
                })
            } else {
                // result exists, session valid
                res.json({
                    code: 200,
                    msg: "登录成功！",
                    info: result[0]
                })
            }
        } else {
            console.log("api: /get_user_info_by_session_id has thrown an error: ", err);
            res.json({
                code: 0,
                message: "内部错误！"
            })
        }
    })
})

// log out
router.get("/log_out", (req, res) => {
    delete req.session.id;
    res.json({
        code: 200,
        msg: "已退出登录！"
    })
})

// search for university by name
router.post("/get_university_by_name", (req, res) => {
    let keywords = req.body.keywords;
    keywords = keywords.replace(/\s+/g, ' ');
    keywords = keywords.replace(/(^\s*)|(\s*$)/g, '');
    let key_array = keywords.split(' ');
    let sql = 'SELECT * FROM university WHERE name LIKE ';
    key_array.forEach((item, index, arr) => {
        sql += "'%" + item + "%'";
        if (index != arr.length - 1) {
            sql += " OR name LIKE ";
        }
    });
    db.query(sql, (err, result, fields) => {
        result = JSON.parse(JSON.stringify(result));
        if (!err) {
            if (result.length) {
                res.json({
                    code: 200,
                    msg: `共${result.length}所院校`,
                    info: result
                });
            } else {
                res.json({
                    code: 100,
                    msg: "未检索到相关院校"
                })
            }

        } else {
            console.log("api: /get_university_by_name has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    });
})

// search for commodity type by name
router.post("/get_commodity_type_by_name", (req, res) => {
    let keywords = req.body.keywords;
    keywords = keywords.replace(/\s+/g, ' ');
    keywords = keywords.replace(/(^\s*)|(\s*$)/g, '');
    let key_array = keywords.split(' ');
    let sql = 'SELECT * FROM commodity_type WHERE name LIKE ';
    key_array.forEach((item, index, arr) => {
        sql += "'%" + item + "%'";
        if (index != arr.length - 1) {
            sql += " OR name LIKE ";
        }
    });
    db.query(sql, (err, result, fields) => {
        result = JSON.parse(JSON.stringify(result));
        if (!err) {
            if (result.length) {
                res.json({
                    code: 200,
                    msg: `共${result.length}个类别`,
                    info: result
                });
            } else {
                res.json({
                    code: 100,
                    msg: "未检索到相关类别"
                })
            }

        } else {
            console.log("api: /get_commodity_type_by_name has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    });
})

// search for commodity with name
router.post("/get_commodity_by_name", (req, res) => {
    let keywords = req.body.keywords;
    keywords = keywords.replace(/\s+/g, ' ');
    keywords = keywords.replace(/(^\s*)|(\s*$)/g, '');
    let key_array = keywords.split(' ');
    let sql = "SELECT id, name, detail, state, poster, type, view, time_created FROM commodity WHERE name LIKE ";
    key_array.forEach((item, index, arr) => {
        sql += "'%" + item + "%'";
        if (index != arr.length - 1) {
            sql += " OR name LIKE ";
        }
    });
    sql += "AND state = 1 AND is_available = 1";
    db.query(sql, (err, result, fields) => {
        result = JSON.parse(JSON.stringify(result));
        if (!err) {
            if (result.length) {
                res.json({
                    code: 200,
                    msg: `共${result.length}件物品`,
                    info: result
                });
            } else {
                res.json({
                    code: 100,
                    msg: "未检索到相关物品"
                })
            }

        } else {
            console.log("api: /get_commodity_by_name has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    });
})

// search for commodity with type
router.post("/get_commodity_by_type", (req, res) => {
    let keywords = req.body.keywords;
    keywords = keywords.replace(/\s+/g, ' ');
    keywords = keywords.replace(/(^\s*)|(\s*$)/g, '');
    let key_array = keywords.split(' ');
    let sql = "SELECT id, name, detail, state, poster, type, time_created FROM commodity WHERE type LIKE ";
    key_array.forEach((item, index, arr) => {
        sql += "'%" + item + "%'";
        if (index != arr.length - 1) {
            sql += " OR name LIKE ";
        }
    });
    sql += "AND state = 1 AND is_available = 1";
    db.query(sql, (err, result, fields) => {
        result = JSON.parse(JSON.stringify(result));
        if (!err) {
            if (result.length) {
                res.json({
                    code: 200,
                    msg: `共${result.length}件物品`,
                    info: result
                });
            } else {
                res.json({
                    code: 100,
                    msg: "未检索到相关物品"
                })
            }

        } else {
            console.log("api: /get_commodity_by_name has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    });
})

router.post("/user_get_commodity_batch", (req, res) => {
    let limit_from = req.body.limit_from;
    let limit_length = req.body.limit_length;
    let sql = `SELECT c.id, c.is_available, c.name, c.type, c.detail, c.availability, c.owner_id, c.poster, c.time_created, c.view, u.avatar, u.nickname FROM commodity c JOIN user u ON c.owner_id = u.id WHERE c.state = 1 AND c.availability = 1 ORDER BY time_created DESC LIMIT ${limit_from}, ${limit_length}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            let commodity_batch = result;
            sql = "SELECT id from commodity WHERE state = 1 AND availability = 1";
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    let amount = result.length;
                    res.json({
                        code: 200,
                        msg: "批量获取物品信息成功！",
                        amount: amount,
                        limit_from: limit_from,
                        limit_length: limit_length,
                        info: commodity_batch
                    })
                } else {
                    console.log("api: /user_get_commodity_batch has thrown an error when getting commodity amount");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log(`api: /user_get_commodity_batch has thrown an error when querying commodity batch limit ${limit_from}, ${limit_length}`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

router.post("/get_requirement_by_detail", (req, res) => {
    let keywords = req.body.keywords;
    keywords = keywords.replace(/\s+/g, ' ');
    keywords = keywords.replace(/(^\s*)|(\s*$)/g, '');
    let key_array = keywords.split(' ');
    let sql = "SELECT r.id, r.detail, r.date_expire, r.commodity_type, r.time_created, r.view, u.nickname, u.avatar FROM requirement r JOIN user u ON r.creator_id = u.id WHERE r.state = 0 AND r.is_available = 1 AND (r.detail LIKE ";
    key_array.forEach((item, index, arr) => {
        sql += "'%" + item + "%'";
        if (index != arr.length - 1) {
            sql += " OR r.detail LIKE ";
        } else {
            sql += ")";
        }
    });
    db.query(sql, (err, result, fields) => {
        result = JSON.parse(JSON.stringify(result));
        if (!err) {
            if (result.length) {
                res.json({
                    code: 200,
                    msg: `共${result.length}条需求`,
                    info: result
                });
            } else {
                res.json({
                    code: 100,
                    msg: "未检索到相关需求"
                })
            }

        } else {
            console.log("api: /get_commodity_by_name has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    });
})

router.post("/get_requirement_by_type", (req, res) => {
    let keywords = req.body.keywords;
    keywords = keywords.replace(/\s+/g, ' ');
    keywords = keywords.replace(/(^\s*)|(\s*$)/g, '');
    let key_array = keywords.split(' ');
    let sql = "SELECT r.id, r.detail, r.date_expire, r.commodity_type, r.time_created, r.view, u.nickname, u.avatar FROM requirement r JOIN user u ON r.creator_id = u.id WHERE r.state = 0 AND r.is_available = 1 AND (r.commodity_type LIKE ";
    key_array.forEach((item, index, arr) => {
        sql += "'%" + item + "%'";
        if (index != arr.length - 1) {
            sql += " OR r.commodity_type LIKE ";
        } else {
            sql += ")";
        }
    });
    db.query(sql, (err, result, fields) => {
        result = JSON.parse(JSON.stringify(result));
        if (!err) {
            if (result.length) {
                res.json({
                    code: 200,
                    msg: `共${result.length}条需求`,
                    info: result
                });
            } else {
                res.json({
                    code: 100,
                    msg: "未检索到相关需求"
                })
            }

        } else {
            console.log("api: /get_commodity_by_name has thrown an error: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    });
})

router.post("/user_get_requirement_batch", (req, res) => {
    let limit_from = req.body.limit_from;
    let limit_length = req.body.limit_length;
    let sql = `SELECT r.id, r.detail, r.date_expire, r.commodity_type, r.time_created, r.view, u.nickname, u.avatar FROM requirement r JOIN user u ON r.creator_id = u.id WHERE r.state = 0 AND r.is_available = 1 ORDER BY time_created DESC LIMIT ${limit_from}, ${limit_length}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            let requirement_batch = result;
            sql = "SELECT id from requirement WHERE state = 0 AND is_available = 1";
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    let amount = result.length;
                    res.json({
                        code: 200,
                        msg: "批量获取物品信息成功！",
                        amount: amount,
                        limit_from: limit_from,
                        limit_length: limit_length,
                        info: requirement_batch
                    })
                } else {
                    console.log("api: /user_get_requirement_batch has thrown an error when getting requirement amount");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log(`api: /user_get_requirement_batch has thrown an error when querying requirement batch limit ${limit_from}, ${limit_length}`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// register
router.post("/register", (req, res) => {
    let username = req.body.username;
    // a must is to check if there are duplicate usernames
    let sql = `SELECT * FROM user WHERE username = "${username}"`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            if (result.length) {
                // duplicate username
                res.json({
                    code: 100,
                    msg: "用户名已被注册！"
                })
            } else {
                let realname = req.body.realname;
                let password = req.body.password;
                let university = req.body.university;
                let tel = req.body.tel;
                let QQ = req.body.QQ;
                let email = req.body.email;
                let address = req.body.address;
                let sql = `SELECT id from user`;
                db.query(sql, (err, result, fields) => {
                    if (!err) {
                        let detail = "TA很懒，TA什么也没留下。";
                        // public has been a static folder, so don't attach it to dir
                        let avatar = `${config.protocol}${config.host}:${config.port}/images/common/avatar_default.png`;
                        let sql = `INSERT INTO user(id, username, realname, password, university, tel, QQ, email, address, detail, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
                        let sql_params = [result.length + 1, username, realname, password, university, tel, QQ, email, address, detail, avatar];
                        db.query(sql, sql_params, (err, result, fields) => {
                            if (!err) {
                                // send a mail to the new account
                                mailer.sendMail(mail_options(email, "百川轩：您已注册成功！", `${realname}同学，您好！您已注册成功！百川轩祝您生活愉快！`), (err, res) => {
                                    if (!err) {
                                        console.log(`api: /register: Mail has been sent to ${email}`);
                                    } else {
                                        console.log("api: /register: failed to send mail: ", err);
                                    }
                                })
                                // create a folder for this user
                                fs.mkdirSync(path.join(path.resolve(__dirname, '..'), `public/images/avatar/${username}`), true);
                                res.json({
                                    code: 200,
                                    msg: "注册成功！",
                                    info: {
                                        username: username,
                                        realname: realname,
                                        password: password,
                                        university: university,
                                        tel: tel,
                                        QQ: QQ,
                                        email: email,
                                        address: address,
                                        detail: detail,
                                        avatar: avatar
                                    }
                                })
                            } else {
                                console.log("api: /register has thrown an error when inserting user: ", err);
                                res.json({
                                    code: 0,
                                    msg: "内部错误！"
                                })
                            }
                        })
                    } else {
                        console.log("api: /register has thrown an error when getting user amount: ", err);
                        res.json({
                            code: 0,
                            msg: "内部错误！"
                        })
                    }
                })
            }
        } else {
            console.log("api: /register has thrown an error when querying username: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// user info update
router.post("/user_info_update", (req, res) => {
    let id = req.body.id;
    let gender = req.body.gender;
    let university = req.body.university;
    let nickname = req.body.nickname;
    let tel = req.body.tel;
    let email = req.body.email;
    let QQ = req.body.QQ;
    let address = req.body.address;
    let detail = req.body.detail;
    let sql = `UPDATE user SET gender = ${gender}, university = "${university}", nickname = "${nickname}", tel = "${tel}", email = "${email}", QQ = "${QQ}", address = "${address}", detail = "${detail}" WHERE user.id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "用户信息修改成功！"
            })
        } else {
            console.log("api: /user_info_update has thrown an error when updating user info: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// user avatar upload
router.post("/user_avatar_upload", (req, res) => {
    let form = new multiparty.Form({uploadDir: './public/images/avatar'});
    form.parse(req, (err, fields, files) => {
        if (!err) {
            // save the new avatar dir to database
            let id = Number(fields.id[0]);
            let avatar = directory_helper.generate_filepath_for_user_avatar(files.avatar[0].path);
            // save the path to avatar database, then the user gets it by his own id
            let sql = "SELECT id FROM avatar";
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    // has got the amount
                    sql = "INSERT INTO avatar(id, user_id, is_available, path) VALUES (?, ?, ?, ?)";
                    let sql_params = [result.length + 1, id, 1, avatar];
                    db.query(sql, sql_params, (err, result, fields) => {
                        if (!err) {
                            // update user field avatar
                            sql = `UPDATE user SET avatar = "${avatar}" WHERE id = ${id}`;
                            db.query(sql, (err, result, fields) => {
                                if (!err) {
                                    res.json({
                                        code: 200,
                                        msg: "头像更换成功！",
                                        info: {
                                            avatar: avatar
                                        }
                                    })
                                } else {
                                    console.log("api: /user_avatar_upload has thrown an error when updating user field avatar");
                                }
                            })
                        } else {
                            console.log(err);
                            console.log("api: /user_avatar_upload has thrown an error when inserting avatar");
                        }
                    })
                } else {
                    console.log("api: /user_avatar_upload has thrown an error when getting avatar amount");
                }
            })
        } else {
            console.log("api: /user_avatar_upload has thrown an error when parsing form");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    });
})

// commodity poster upload
router.post("/commodity_poster_upload", (req, res) => {
    let form = new multiparty.Form({uploadDir: './public/images/commodity_poster'});
    form.parse(req, (err, fields, files) => {
        if (!err) {
            // save the new poster dir to database
            let id = Number(fields.id[0]);
            let poster = directory_helper.generate_filepath_for_commodity_poster(files.poster[0].path);
            // save the path to poster database, then the commodity gets it by its own id
            let sql = "SELECT id FROM commodity_poster";
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    // has got the amount
                    sql = "INSERT INTO commodity_poster(id, commodity_id, is_available, path) VALUES (?, ?, ?, ?)";
                    let sql_params = [result.length + 1, id, 1, poster];
                    db.query(sql, sql_params, (err, result, fields) => {
                        if (!err) {
                            sql = `UPDATE commodity SET poster = "${poster}" WHERE id = ${id}`;
                            db.query(sql, (err, result, fields) => {
                                if (!err) {
                                    res.json({
                                        code: 200,
                                        msg: "物品图片更换成功！",
                                        info: {
                                            poster: poster
                                        }
                                    })
                                } else {
                                    console.log("api: /commodity_poster_upload has thrown an error when updating commodity field poster");
                                    res.json({
                                        code: 0,
                                        msg: "内部错误！"
                                    })
                                }
                            })
                        } else {
                            console.log("api: /commodity_poster_upload has thrown an error when inserting poster");
                            res.json({
                                code: 0,
                                msg: "内部错误！"
                            })
                        }
                    })
                } else {
                    console.log("api: /commodity_poster_upload has thrown an error when getting poster amount");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log("api: /commodity_poster_upload has thrown an error when parsing form");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})


// get user's commodity
router.post("/get_commodity_by_user_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT * FROM commodity WHERE owner_id = ${id} ORDER BY time_created DESC`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            result = JSON.parse(JSON.stringify(result));
            res.json({
                code: 200,
                msg: "已获取用户所有商品",
                info: result
            })
        } else {
            console.log("api: /get_commodity_by_user_id has thrown an error when querying commodity by user id: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// get commodity by id
router.post("/get_commodity_by_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT * FROM commodity WHERE id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "获取商品信息成功！",
                info: result[0]
            })
        } else {
            console.log("api: /get_commodity_by_id has thrown an err when querying commodity: ", err);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// get user info by id for user
router.post("/get_user_info_by_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT id, nickname, avatar, date_created, university, tel, QQ, email, address, detail FROM user WHERE id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "获取用户信息成功！",
                info: result[0]
            })
        } else {
            console.log("api: /get_user_info_by_id has thrown an error when querying user");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })

})

// commodity info update from user
router.post("/commodity_info_update_from_user", (req, res) => {
    // if update accepted from user, the commodity needs to be re-censored, state set to 0
    let id = req.body.id;
    let detail = req.body.detail;
    let name = req.body.name;
    let html = req.body.html;
    let type = req.body.type;
    let sql = `UPDATE commodity SET detail = "${detail}", name = "${name}", html = '${html}', type = "${type}" WHERE commodity.id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            // pending censor, state set to 0
            sql = `UPDATE commodity SET state = 0 WHERE commodity.id = ${id}`;
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    res.json({
                        code: 200,
                        msg: "物品信息修改成功！请等待审核。"
                    })
                } else {
                    console.log("api: /commodity_info_update_from_user has thrown an error when updating commodity state");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log("api: /commodity_info_update_from_user has thrown an error when updating commodity info");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// commodity register
router.post("/commodity_register", (req, res) => {
    let creator_id = req.body.creator_id;
    let owner_id = req.body.owner_id;
    let password = req.body.password;
    let name = req.body.name;
    let type = req.body.type;
    let date_purchased = req.body.date_purchased;
    let detail = req.body.detail;
    let html = JSON.stringify(req.body.html);
    // get the amount
    let sql = "SELECT id FROM commodity";
    db.query(sql, (err, result, fields) => {
        if (!err) {
            sql = `INSERT INTO commodity(id, name, type, owner_id, password, html, detail, creator_id, date_purchased) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            let id = result.length + 1;
            let sql_params = [id, name, type, owner_id, password, html, detail, creator_id, date_purchased];
            db.query(sql, sql_params, (err, result, fields) => {
                if (!err) {
                    // response back id for poster upload
                    res.json({
                        code: 200,
                        msg: "物品添加成功！",
                        info: {
                            id: id
                        }
                    })
                } else {
                    console.log("api: /commodity_register has thrown an error when inserting commodity");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log("api: /commodity_register has thrown an error when getting commodity amount");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

router.post("/requirement_register", (req, res) => {
    console.log(req.body);
    let creator_id = req.body.creator_id;
    let commodity_type = req.body.commodity_type;
    let date_expire = req.body.date_expire;
    let detail = req.body.detail;
    // user cannot submit if have more than 5 unsolved requirements available, user (creator_id), available (is_available), unsolved (state 0)
    let sql = `SELECT id FROM requirement WHERE creator_id = ${creator_id} AND is_available = 1 AND state = 0`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            if (result.length >= 5) {
                // reject
                res.json({
                    code: 100,
                    msg: `您尚有${result.length}条待解决的需求。当且仅当待解决需求在5条以下时，您可提交新的需求。`
                })
            } else {
                // can submit
                sql = "SELECT id FROM requirement";
                db.query(sql, (err, result, fields) => {
                    if (!err) {
                        sql = "INSERT INTO requirement (id, creator_id, commodity_type, date_expire, detail) VALUES (?, ?, ?, ?, ?)";
                        let sql_params = [result.length + 1, creator_id, commodity_type, date_expire, detail];
                        db.query(sql, sql_params, (err, result, fields) => {
                            if (!err) {
                                res.json({
                                    code: 200,
                                    msg: "需求添加成功，感谢您的支持！百川轩将尽快为您寻找解决方案！"
                                })
                            } else {
                                console.log("api: /requirement_register has thrown an error when inserting requirement");
                                res.json({
                                    code: 0,
                                    msg: "内部错误！"
                                })
                            }
                        })
                    } else {
                        console.log("api: /requirement_register has thrown an error when getting requirement amount");
                        res.json({
                            code: 0,
                            msg: "内部错误！"
                        })
                    }
                })
            }
        } else {
            console.log("api: /requirement_register has thrown an error when getting user's requirement amount");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
});

router.post("/get_requirement_by_user_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT * FROM requirement WHERE creator_id = ${id} AND is_available = 1 ORDER BY time_created DESC`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "获取需求信息成功！",
                info: result
            })
        } else {
            console.log("api: /get_requirement_by_user_id has thrown an error when querying requirement");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// delete the requirement by id
router.post("/requirement_delete", (req, res) => {
    let requirement_id = req.body.id;
    let sql = `UPDATE requirement SET is_available = 0 WHERE requirement.id = ${requirement_id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "已删除该需求！"
            })
        } else {
            console.log("api: /requirement_delete has thrown an error when updating requirement state");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// user transactions
// commodity
// get transaction by user id
router.post("/get_transaction_by_user_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT t.*, t.state, c.name, c.type, c.poster, t.detail, u.nickname, u.avatar FROM ((transaction t JOIN user u ON t.owner_id = u.id) JOIN commodity c ON t.commodity_id = c.id) WHERE t.buyer_id = ${id} ORDER BY t.time_created DESC`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            let transaction_created = result;
            sql = `SELECT t.*, t.state, c.name, c.type, c.poster, t.detail, u.nickname, u.avatar FROM ((transaction t JOIN user u ON t.buyer_id = u.id) JOIN commodity c ON t.commodity_id = c.id )  WHERE t.owner_id = ${id} ORDER BY t.time_created DESC`;
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    let transaction_involved = result;
                    res.json({
                        code: 200,
                        msg: "获取交易信息成功！",
                        info: {
                            transaction_created: transaction_created,
                            transaction_involved: transaction_involved
                        }
                    })
                } else {
                    console.log("api: /get_transaction_by_user_id has thrown an error when user's transactions involved");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log("api: /get_transaction_by_user_id has thrown an error when querying user's transactions created");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// the buyer creates a transaction
router.post("/create_transaction", (req, res) => {
    let owner_id = req.body.owner_id;
    let buyer_id = req.body.buyer_id;
    let commodity_id = req.body.commodity_id;
    let detail = req.body.detail;
    let email = req.body.email;
    let owner_email = req.body.owner_email;
    let sql = `SELECT id FROM transaction WHERE buyer_id = ${buyer_id} AND state = 0`;
    // prevent from too much submissions
    db.query(sql, (err, result, fields) => {
        if (!err) {
            if (result.length > 1) {
                res.json({
                    code: 100,
                    msg: `您已有${result.length}条进行中的交易。请在这些交易完成后再创建交易！`
                })
            } else {
                sql = `SELECT state FROM commodity WHERE id = ${commodity_id}`;
                // check commodity state
                db.query(sql, (err, result, fields) => {
                    if (!err) {
                        // can continue the transaction when state is 1
                        if (result[0].state == 1) {
                            // change state to 2
                            sql = `UPDATE commodity SET state = 2 WHERE commodity.id = ${commodity_id}`;
                            db.query(sql, (err, result, fields) => {
                                if (!err) {
                                    // get transaction amount
                                    sql = "SELECT id FROM transaction";
                                    db.query(sql, (err, result, fields) => {
                                        if (!err) {
                                            // create transaction
                                            sql = "INSERT INTO transaction (id, commodity_id, owner_id, buyer_id, detail) VALUES (?, ?, ?, ?, ?)";
                                            let sql_params = [result.length + 1, commodity_id, owner_id, buyer_id, detail];
                                            db.query(sql, sql_params, (err, result, fields) => {
                                                if (!err) {
                                                    res.json({
                                                        code: 200,
                                                        msg: "交易创建成功！请等待卖家确认！"
                                                    })
                                                    // send mail
                                                    mailer.sendMail(mail_options(owner_email, "百川轩：用户购买请求！", email), (err, res) => {
                                                        if (!err) {
                                                            console.log(`api: /create_transaction: Mail has been sent to ${owner_email}`);
                                                        } else {
                                                            console.log("api: /create_transaction: failed to send mail: ", err);
                                                        }
                                                    })
                                                } else {
                                                    console.log(err);
                                                    console.log("api: /create_transaction has thrown an error when inserting transaction");
                                                    res.json({
                                                        code: 0,
                                                        msg: "内部错误！"
                                                    })
                                                }
                                            })
                                        } else {
                                            console.log("api: /create_transaction has thrown an error when getting transaction amount");
                                            res.json({
                                                code: 0,
                                                msg: "内部错误！"
                                            })
                                        }
                                    })
                                } else {
                                    console.log("api: /create_transaction has thrown an error when updating commodity state");
                                    res.json({
                                        code: 0,
                                        msg: "内部错误！"
                                    })
                                }
                            })
                        } else {
                            res.json({
                                code: 100,
                                msg: "物品暂时不可交易，请刷新页面！"
                            })
                        }
                    } else {
                        console.log("api: /create_transaction has thrown an error when validating commodity state");
                        res.json({
                            code: 0,
                            msg: "内部错误！"
                        })
                    }
                })
            }
        } else {
            console.log("api: /create_transaction has thrown an error when getting user's transaction amount");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// both sides look on transaction
router.post("/get_transaction_by_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT * FROM transaction WHERE id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "获取交易成功！",
                info: result[0]
            })
        } else {
            console.log(err);
            console.log("api: /get_transaction_by_id has thrown an error when querying transaction");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// the owner rejects the transaction
router.post("/owner_reject_transaction", (req, res) => {
    let transaction_id = req.body.transaction_id;
    let commodity_id = req.body.commodity_id;
    let email = req.body.email;
    let buyer_email = req.body.buyer_email;
    let sql = `SELECT state FROM transaction WHERE id = ${transaction_id}`;
    // validate 1st
    db.query(sql, (err, result, fields) => {
        if (!err) {
            if (result[0].state == 0) {
                // pending, can continue
                // update transaction to state 2
                sql = `UPDATE transaction SET state = 2 WHERE transaction.id = ${transaction_id}`;
                db.query(sql, (err, result, fields) => {
                    if (!err) {
                        // update commodity to state 1
                        sql = `UPDATE commodity SET state = 1 WHERE commodity.id = ${commodity_id}`;
                        db.query(sql, (err, result, fields) => {
                            if (!err) {
                                // complete
                                res.json({
                                    code: 200,
                                    msg: "已拒绝交易！"
                                })
                                // send mail
                                mailer.sendMail(mail_options(buyer_email, "百川轩：交易关闭提示！", email), (err, res) => {
                                    if (!err) {
                                        console.log(`api: /create_transaction: Mail has been sent to ${buyer_email}`);
                                    } else {
                                        console.log("api: /create_transaction: failed to send mail: ", err);
                                    }
                                })
                            } else {
                                console.log(`api: /owner_reject_transaction has thrown an error when updating commodity state`);
                                res.json({
                                    code: 0,
                                    msg: "内部错误！"
                                })
                            }
                        })
                    } else {
                        console.log(`api: /owner_reject_transaction has thrown an error when updating transaction state`);
                        res.json({
                            code: 0,
                            msg: "内部错误！"
                        })
                    }
                })
            } else {
                res.json({
                    code: 100,
                    msg: "交易暂时不可操作，请刷新页面重试！"
                })
            }
        } else {
            console.log(`api: /owner_reject_transaction has thrown an error when querying transaction`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// the owner accepts the transaction
router.post("/owner_accept_transaction", (req, res) => {
    let transaction_id = req.body.transaction_id;
    let commodity_id = req.body.commodity_id;
    let buyer_id = req.body.buyer_id
    let email = req.body.email;
    let buyer_email = req.body.buyer_email;
    let sql = `SELECT state FROM transaction WHERE id = ${transaction_id}`;
    // validate 1st
    db.query(sql, (err, result, fields) => {
        if (!err) {
            if (result[0].state == 0) {
                // pending, can continue
                // update transaction to state 1
                sql = `UPDATE transaction SET state = 1 WHERE transaction.id = ${transaction_id}`;
                db.query(sql, (err, result, fields) => {
                    if (!err) {
                        // update commodity to state 1
                        sql = `UPDATE commodity SET state = 1, owner_id = ${buyer_id} WHERE commodity.id = ${commodity_id}`;
                        db.query(sql, (err, result, fields) => {
                            if (!err) {
                                // complete
                                res.json({
                                    code: 200,
                                    msg: "已确认交易！"
                                })
                                // send mail
                                mailer.sendMail(mail_options(buyer_email, "百川轩：成交提示！", email), (err, res) => {
                                    if (!err) {
                                        console.log(`api: /create_transaction: Mail has been sent to ${buyer_email}`);
                                    } else {
                                        console.log("api: /create_transaction: failed to send mail: ", err);
                                    }
                                })
                            } else {
                                console.log(`api: /owner_reject_transaction has thrown an error when updating commodity state`);
                                res.json({
                                    code: 0,
                                    msg: "内部错误！"
                                })
                            }
                        })
                    } else {
                        console.log(`api: /owner_reject_transaction has thrown an error when updating transaction state`);
                        res.json({
                            code: 0,
                            msg: "内部错误！"
                        })
                    }
                })
            } else {
                res.json({
                    code: 100,
                    msg: "交易暂时不可操作，请刷新页面重试！"
                })
            }
        } else {
            console.log(`api: /owner_reject_transaction has thrown an error when querying transaction`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})


// requirement

// get requirement by id
router.post("/get_requirement_by_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT * FROM requirement WHERE id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "获取需求成功！",
                info: result[0]
            })
        } else {
            console.log(`api: /get_requirement_by_id has thrown an error when querying requirement`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// solve requirement
router.post("/solve_requirement", (req, res) => {
    // create a transaction, update requirement state, commodity state and owner, and send mail
    let requirement_id = req.body.requirement_id;
    let requirement_creator_id = req.body.requirement_creator_id;
    let commodity_id = req.body.commodity_id;
    let resolve_id = req.body.resolve_id;
    let requirement_creator_email = req.body.requirement_creator_email;
    let email = req.body.email;
    let sql = "SELECT id FROM transaction";
    db.query(sql, (err, result, fields) => {
        if (!err) {
            // create transaction
            sql = "INSERT INTO transaction (id, commodity_id, owner_id, buyer_id, detail, state) VALUES (?, ?, ?, ?, ?, ?)";
            let transaction_id = result.length + 1;
            let sql_params = [transaction_id, commodity_id, resolve_id, requirement_creator_id, "需求解决", 1];
            db.query(sql, sql_params, (err, result, fields) => {
                if (!err) {
                    // update requirement
                    sql = `UPDATE requirement SET state = 1, resolve_id = ${resolve_id}, transaction_id = ${transaction_id}, commodity_id = ${commodity_id} WHERE requirement.id = ${requirement_id}`;
                    db.query(sql, (err, result, fields) => {
                        if (!err) {
                            // update commodity
                            sql = `UPDATE commodity SET state = 1, owner_id = ${requirement_creator_id} WHERE commodity.id = ${commodity_id}`;
                            db.query(sql, (err, result, fields) => {
                                if (!err) {
                                    // completed
                                    res.json({
                                        code: 200,
                                        msg: "物品转让成功！感谢您的支持！"
                                    })
                                    mailer.sendMail(mail_options(requirement_creator_email, "百川轩：需求已被解决！", email), (err, res) => {
                                        if (!err) {
                                            console.log(`api: /register: Mail has been sent to ${email}`);
                                        } else {
                                            console.log("api: /register: failed to send mail: ", err);
                                        }
                                    })
                                } else {
                                    console.log(`api: /solve_requirement has thrown an error when updating commodity`);
                                    res.json({
                                        code: 0,
                                        msg: "内部错误！"
                                    })
                                }
                            })
                        } else {
                            console.log(`api: /solve_requirement has thrown an error when updating requirement`);
                            res.json({
                                code: 0,
                                msg: "内部错误！"
                            })
                        }
                    })
                } else {
                    console.log(`api: /solve_requirement has thrown an error when inserting transaction`);
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log(`api: /solve_requirement has thrown an error when getting transaction amount`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})



// manager apis

// manager gets user in batches
router.post("/manager_get_user_batch", (req, res) => {
    let limit_from = req.body.limit_from;
    let limit_length = req.body.limit_length;
    let sql = `SELECT id, is_available, is_manager, wechat_openid, university, nickname, avatar, date_created FROM user ORDER BY date_created ASC LIMIT ${limit_from}, ${limit_length}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            let user_batch = result;
            sql = "SELECT id from user";
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    res.json({
                        code: 200,
                        msg: "管理员：批量获取用户信息成功！",
                        amount: result.length,
                        limit_from: limit_from,
                        limit_length: limit_length,
                        info: user_batch
                    })
                } else {
                    console.log("api: /manager_get_user_batch has thrown an error when getting user amount");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log(`api: /manager_get_user_batch has thrown an error when querying user batch limit ${limit_from}, ${limit_length}`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// manager gets user by id
router.post("/manager_get_user_by_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT * FROM user WHERE id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "管理员：获取用户信息成功！",
                info: result[0]
            })
        } else {
            console.log("api: /manager_get_user_by_id has thrown an error when querying user with id for manager");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
});

// manager gets commodity in batches
router.post("/manager_get_commodity_batch", (req, res) => {
    let limit_from = req.body.limit_from;
    let limit_length = req.body.limit_length;
    let sql = `SELECT c.id, c.is_available, c.name, c.type, c.availability, c.state, c.owner_id, c.poster, c.time_created, c.view, u.avatar, u.nickname FROM commodity c JOIN user u ON c.owner_id = u.id ORDER BY time_created DESC LIMIT ${limit_from}, ${limit_length}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            let commodity_batch = result;
            sql = "SELECT id from commodity";
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    let amount = result.length;
                    sql = "SELECT id from commodity WHERE state = 0";
                    db.query(sql, (err, result, fields) => {
                        if (!err) {
                            res.json({
                                code: 200,
                                msg: "管理员：批量获取物品信息成功！",
                                amount: amount,
                                uncensored_amount: result.length,
                                limit_from: limit_from,
                                limit_length: limit_length,
                                info: commodity_batch
                            })
                        } else {
                            console.log("api: /manager_get_commodity_batch has thrown an error when getting uncensored commodity amount");
                            res.json({
                                code: 0,
                                msg: "内部错误！"
                            })
                        }
                    })
                } else {
                    console.log("api: /manager_get_commodity_batch has thrown an error when getting commodity amount");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log(`api: /manager_get_commodity_batch has thrown an error when querying commodity batch limit ${limit_from}, ${limit_length}`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
});

// manager gets commodity by id
router.post("/manager_get_commodity_by_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT * FROM commodity WHERE id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            let current_commodity = result[0];
            let owner_id = result[0].owner_id;
            sql = `SELECT * FROM user WHERE id = ${owner_id}`;
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    res.json({
                        code: 200,
                        msg: "管理员：获取物品信息成功！",
                        info: {
                            current_commodity: current_commodity,
                            owner: result[0]
                        }
                    })
                } else {
                    console.log("api: /manager_get_commodity_by_id has thrown an error when querying commodity owner with id for manager");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log("api: /manager_get_commodity_by_id has thrown an error when querying commodity with id for manager");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
});

// manager get requirement in batches
router.post("/manager_get_requirement_batch", (req, res) => {
    let limit_from = req.body.limit_from;
    let limit_length = req.body.limit_length;
    let sql = `SELECT r.id, r.state, r.creator_id, r.time_created, r.date_expire, r.commodity_type, r.detail, r.resolve_id, r.transaction_id, r.commodity_id, r.view, u.avatar, u.nickname FROM requirement r JOIN user u ON r.creator_id = u.id WHERE r.is_available = 1 ORDER BY date_created DESC LIMIT ${limit_from}, ${limit_length}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            let requirement_batch = result;
            sql = "SELECT id from requirement WHERE is_available = 1";
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    res.json({
                        code: 200,
                        msg: "管理员：批量获取需求信息成功！",
                        amount: result.length,
                        limit_from: limit_from,
                        limit_length: limit_length,
                        info: requirement_batch
                    })
                } else {
                    console.log("api: /manager_get_requirement_batch has thrown an error when getting requirement amount");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log(`api: /manager_get_requirement_batch has thrown an error when querying requirement batch limit ${limit_from}, ${limit_length}`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// manager censorship
router.post("/manager_censorship_update", (req, res) => {
    let type = req.body.censorship.type;
    let censor_id = req.body.censorship.censor_id;
    let commodity_id = req.body.censorship.commodity_id;
    let detail = req.body.censorship.detail;
    let owner_email = req.body.censorship.owner_email;
    let sql = "SELECT id FROM censorship";
    db.query(sql, (err, result, fields) => {
        if (!err) {
            // save censor info
            sql = `INSERT INTO censorship (id, censor_id, commodity_id, detail, type) VALUES (?, ?, ?, ?, ?)`;
            let sql_params = [result.length + 1, censor_id, commodity_id, detail, type];
            db.query(sql, sql_params, (err, result, fields) => {
                if (!err) {
                    // commodity state update, 1 if approved, 5 if rejected
                    sql = `UPDATE commodity SET state = ${type ? 1 : 5} WHERE commodity.id = ${commodity_id}`;
                    db.query(sql, (err, result, fields) => {
                        if (!err) {
                            // completed, response and send email
                            mailer.sendMail(mail_options(owner_email, "百川轩：物品审核通知", detail), (err, res) => {
                                if (!err) {
                                    console.log(`api: /register: Mail has been sent to ${email}`);
                                } else {
                                    console.log("api: /register: failed to send mail: ", err);
                                }
                            })
                            res.json({
                                code: 200,
                                msg: type ? "管理员：已通过审核！" : "管理员：已驳回审核！"
                            })
                        } else {
                            console.log("api: /manager_censorship_update has thrown an error when updating commodity state");
                            res.json({
                                code: 0,
                                msg: "内部错误！"
                            })
                        }
                    })
                } else {
                    console.log("api: /manager_censorship_update has thrown an error when inserting censorship");
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log("api: /manager_censorship_update has thrown an error when getting censorship amount");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// manager get censorship by commodity id
router.post("/manager_get_censorship_by_commodity_id", (req, res) => {
    let id = req.body.id;
    let sql = `SELECT c.id, c.censor_id, c.commodity_id, c.detail, c.type, c.time_created, u.avatar, u.realname FROM censorship c JOIN user u ON c.censor_id = u.id WHERE c.commodity_id = ${id} ORDER BY time_created DESC `;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "管理员：获取物品审核信息成功！",
                info: result
            })
        } else {
            console.log("api: /manager_get_censorship_by_commodity_id has thrown an error when querying censorship");
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

// add view
router.post("/add_view", (req, res) => {
    let table = req.body.table;
    let id = req.body.id;
    let sql = `SELECT view FROM ${table} WHERE id = ${id}`;
    db.query(sql, (err, result, fields) => {
        if (!err) {
            let view = result[0].view + 1;
            sql = `UPDATE ${table} SET view = ${view} WHERE ${table}.id = ${id}`;
            db.query(sql, (err, result, fields) => {
                if (!err) {
                    console.log(`api: /add_view has updated view(${view}) at table ${table} id ${id}`);
                    res.json({
                        code: 200,
                        msg: "浏览量增加成功！"
                    })
                } else {
                    console.log(`api: /add_view has thrown an error when updating view at table ${table}`);
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log(`api: /add_view has thrown an error when querying view at table ${table}`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

router.post("/add_log", (req, res) => {
    let version = req.body.version;
    let date = req.body.date;
    let detail = req.body.detail;
    let sql = "SELECT id FROM log";
    db.query(sql, (err, result, fields) => {
        if (!err) {
            sql = `INSERT INTO log (id, version, detail, time_created) VALUES (?, ?, ?, ?)`
            let sql_params = [result.length + 1, version, detail, date];
            db.query(sql, sql_params, (err, result, fields) => {
                if (!err) {
                    res.json({
                        code: 200,
                        msg: "开发日志添加成功！"
                    })
                } else {
                    console.log(`api: /add_log has thrown an error when inserting log`);
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
                }
            })
        } else {
            console.log(`api: /add_log has thrown an error when getting log amount`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})

router.post("/get_log", (req, res) => {
    let sql = "SELECT * FROM log ORDER BY time_created DESC";
    db.query(sql, (err, result, fields) => {
        if (!err) {
            res.json({
                code: 200,
                msg: "获取开发日志成功！",
                info: result
            })
        } else {
            console.log(`api: /get_log has thrown an error when getting logs`);
            res.json({
                code: 0,
                msg: "内部错误！"
            })
        }
    })
})


router.get("/test", (req, res) => {
    res.json({
        code: 200,
        msg: "copy",
        info: {
            query: req.query
        }
    })
})

module.exports = router;
