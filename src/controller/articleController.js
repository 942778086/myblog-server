const router = require('koa-router')()
const baseController = require('../common/baseController')


/**
 * 列表查询
 * @type {Router}
 */
module.exports = router.get('/getAll', (ctx)=>{ return baseController.getAll('article',ctx) })

/**
 * 主键查询
 * @type {Router}
 */
module.exports = router.get('/getArticle', (ctx) => { return baseController.getById('article', ctx) })

/**
 * 新建记录
 * @type {Router}
 */
module.exports = router.post('/newArticle', (ctx) => { return baseController.addRecord('article', ctx) })

/**
 * 修改记录
 * @type {Router}
 */
module.exports = router.put('/editArticle', (ctx) => { return baseController.updateRecord('article', ctx) })

/**
 * 删除记录
 * @type {this}
 */
module.exports = router.delete('/deleteArticle', (ctx) => { return baseController.deleteById('article', ctx) })

/**
 * 根据id列表批量删除记录
 * @type {Router}
 */
module.exports = router.post('/mulDeleteArticle', (ctx) => { return baseController.deleteByArr('article', ctx) })

/**
 * 条件查询
 * @type {Router}
 */
module.exports = router.post('/getArticleByFileds', (ctx) => { return baseController.getByFields('article', ctx) })

/**
 * 模糊查询
 * @type {Router}
 */
module.exports = router.post('/getArticleByLikeFileds', (ctx) => { return baseController.getByLike('article', ctx) })
