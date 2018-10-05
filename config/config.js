var path = require('path')

module.exports = {
    dev: {
        // 项目开发html模板
        indexFile: "template.index.ejs",
        // indexFile:"testlogin.ejs",
        port: 4200,
        // 本地服务器根目录(可以根据上线目录灵活调节)
        serverRoot: "/src",
        // 第三方库JQ如果使用再加在 DENDOR中
        VENDOR: [
            "lib-flexible",
            // "jquery"
        ]
    },
    build: {
        author: "",
        time: "",
        // 打包到指定文件夹下
        // outputProjectPath:"src\/html\/web\/webpack-demo",
        outputProjectPath: path.resolve(__dirname, '../build'),
        // prod.js 内再次打包需要删除的选项
        cleanLsit: [path.resolve(__dirname, '../dist')],
    }
}