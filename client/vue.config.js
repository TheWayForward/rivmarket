const port = 3000;

module.exports = {
    devServer: {
        host: "127.0.0.1",
        port: 444,
        open: true,
        proxy: {
            "/api": {
                pathRewrite: {
                    "^/api": "/api"
                },
                target: "https://www.trwyfowrd.top:3000",
                changeOrigin: false,
                secure: true
            }
        }
    },

    pwa: {
        iconPaths: {
            favicon32: 'https://www.trwyfowrd.top:3000/images/common/favicon.ico',
            favicon16: 'https://www.trwyfowrd.top:3000/images/common/favicon.ico',
            appleTouchIcon: 'https://www.trwyfowrd.top:3000/images/common/favicon.ico',
            maskIcon: 'https://www.trwyfowrd.top:3000/images/common/favicon.ico',
            msTileImage: 'https://www.trwyfowrd.top:3000/images/common/favicon.ico'
        }
    },

}