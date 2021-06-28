const express = require('express')

// 1. 创建路由实例
// 路由实例相当于一个 mini Express实例
const router = express.Router()

// 2. 配置路由
router.get('/user', (req, res) => {
  res.send('get /user')
})

router.post('/user/:id', (req, res) => {
  res.send(`post /user/${req.params.id}`)
})

// 3. 导出路由实例
// export default router
module.exports = router

// 4. 将路由集成到 Express实例中