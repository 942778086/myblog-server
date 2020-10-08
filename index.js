const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const logAsync = require('./middleware/log-async')
const router = require('./router/index')
const config = require('./config')
const bodyparse = require('koa-bodyparser')
const server = require('koa-static')
const http = require('http');

// 程序遇到未捕获异常将不会结束进程
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
// 获取前端对象
app.use(bodyparse())
// 跨域
app.use(cors())
// 日志中间件
app.use(logAsync())
// 静态资源服务器
app.use(server(__dirname, '/upload'))
// 挂载路由
app.use(router.routes()).use(router.allowedMethods())

// http server
let httpServer = http.createServer(app.callback());
httpServer.listen(config.port, () => {
    console.log(`🚀 Server ready at http://localhost:${config.port}`)
})
