const express = require("express");
const profileCtrl = require("../controller/profile");

const router = express.Router();

// Get Profile 获取用户资料
router.get("/:username", profileCtrl.getProfile);

// Follow user 关注用户
router.post("/:username/follow", profileCtrl.followUser);

// Unfollow user 取消关注用户
router.delete("/:username/follow", profileCtrl.unfollowUser);

module.exports = router;
