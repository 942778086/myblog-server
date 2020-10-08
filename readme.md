# KOA2-BaseServer

## 1. What is this?
A common service side based nodejs that integrates CURD(for MySql)，CORS,static resource.U can build RESTFul Api quickly without repeat coding work

## 2. How to run it?
1. download dependencies with
 ```javascript
npm install
```

2. new a controller in ‘/src/controller’ like userController.define your level-2 url(url name is customized,but please name them after according userController for consistent style and better Maintainability).The methods in baseController accept two params: **mysql dataBase table name** and **http context**

```javascript
const router = require('koa-router')()
const baseController = require('../common/baseController')


/**
 * 列表查询
 * @type {Router}
 */
module.exports = router.get('/getAll', (ctx)=>{ return baseController.getAll('user',ctx) })

/**
 * 主键查询
 * @type {Router}
 */
module.exports = router.get('/getUser', (ctx) => { return baseController.getById('user', ctx) })

/**
 * 新建用户
 * @type {Router}
 */
module.exports = router.post('/newUser', (ctx) => { return baseController.addRecord('user', ctx) })

/**
 * 修改用户
 * @type {Router}
 */
module.exports = router.put('/editUser', (ctx) => { return baseController.updateRecord('user', ctx) })

/**
 * 删除用户
 * @type {this}
 */
module.exports = router.delete('/deleteUser', (ctx) => { return baseController.deleteById('user', ctx) })

/**
 * 根据id列表批量删除用户
 * @type {Router}
 */
module.exports = router.post('/mulDeleteUser', (ctx) => { return baseController.deleteByArr('user', ctx) })

/**
 * 条件查询
 * @type {Router}
 */
module.exports = router.post('/getUserByFileds', (ctx) => { return baseController.getByFields('user', ctx) })

/**
 * 模糊查询
 * @type {Router}
 */
module.exports = router.post('/getUserByLikeFileds', (ctx) => { return baseController.getByLike('user', ctx) })

```

3. Import the controller in 'router/index.js' and name the level-1 url
 ```javascript
const user = require('../src/controller/userController')

router.use('/user', user.routes(), user.allowedMethods())
```

4. modify your database config in /config.js

5. run it with
 ```javascript
node index.js
```


## 3. How to use it for the api consumer?
1. Base add:
 ```javascript
http.post('user/newUser', {
	name: 'wujianx',
	location: 'wuhan'
})
```

2. Base select:
 ```javascript
http.get('user/getAll?page=1&pageSize=10')
```

3. Base Select by field:
```javascript
http.post('user/getUserByFileds', {
	name: 'wujianx'
})
```

4. Base modify:
```javascript
http.put('user/editUser', {
	name: 'jiangxiny'
})
```

5. Base delete:
```javascript
http.delete('user/deleteUser?id=1')
```

6. Base Multiple delete:
```javascript
http.delete('user/mulDeleteUser', {
	arr: [1, 2, 3]
})
```