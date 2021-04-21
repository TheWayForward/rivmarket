module.exports = {
    host: "127.0.0.1",
    port: parseInt(process.env.PORT,10) || 3000,
    mail_account: "951947409@qq.com",
    protocol: "http://",
    user: "root",
    password: "",
    database: "rivmarket",
    secret: "123456",
    // 1 minute
    max_age: 1000 * 60
}