const express = require("express");
const router = express.Router();

// 用户相关路由
router.use(require("./user"));

// 用户资料相关路由
router.use(require("profile", "./profile"));

// 文章相关路由
router.use(require("articles", "./article"));

// 标签相关路由
router.use(require("./tag"));

module.exports = router;
