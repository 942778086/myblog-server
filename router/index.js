const router = require('koa-router')()
const user = require('../src/controller/userController')
const article = require('../src/controller/articleController')

router.get('/', (ctx, next) => {
    ctx.body = "Welcome to Koa2"
})

router.use('/user', user.routes(), user.allowedMethods())
router.use('/article', article.routes(), user.allowedMethods())

module.exports = router
