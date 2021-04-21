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
    let sql = 'SELECT * FROM university WHERE name LIKE ';  // sql语句
    key_array.forEach((item, index, arr) => {
        sql += "'%" + item + "%'";
        if (index != arr.length - 1) {
            sql += " OR name LIKE ";
        }
    });
    console.log(sql);
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
    let form = new multiparty.Form({ uploadDir: './public/images/avatar' });
    form.parse(req, (err, fields, files) => {
        if (!err) {
            // save the new avatar dir to database
            let id = Number(fields.id[0]);
            let avatar = directory_helper.generate_filepath_for_user_avatar(files.avatar[0].path);
            let sql = `UPDATE user SET avatar = "${avatar}" WHERE user.id = ${id}`;
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
                    console.log("api: /user_avatar_upload has thrown an error when updating user info: ", err);
                    res.json({
                        code: 0,
                        msg: "内部错误！"
                    })
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


// get user's commodity
router.get("/get_commodity_by_user_id", (req, res) => {
    let id = req.query.id;
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


router.get("/test", (req, res) => {
    console.log(req.connection.remoteAddress);
    res.json({code: 200, msg: "succ"});
})

module.exports = router;
