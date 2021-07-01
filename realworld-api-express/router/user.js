const express = require("express");
const userCtrl = require("../controller/user");
const userValidator = require("../validator/user");
const auth = require("../middleware/auth");

const router = express.Router();

// Authentication 用户登录
router.post("/users/login", userValidator.login, userCtrl.login);

// Registration 用户注册
router.post("/users", userValidator.register, userCtrl.register);

// Get Current User 获取当前登录用户
router.get("/user", auth, userCtrl.getCurrentUser);

// Update User 更新用户
router.put("/user", auth, userCtrl.updateUser);

module.exports = router;
