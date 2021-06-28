const express = require("express");
const userCtrl = require("../controller/user");

const router = express.Router();

// Authentication 用户登录
router.post("/users/login", userCtrl.login);

// Registration 用户注册
router.post("/users", userCtrl.register);

// Get Current User 获取当前登录用户
router.get("/user", userCtrl.getCurrentUser);

// Update User 更新用户
router.put("/user", userCtrl.updateUser);

module.exports = router;
