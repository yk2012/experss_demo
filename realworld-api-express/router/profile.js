const express = require("express");
const profileCtrl = require("../controller/profile");
const auth = require("../middleware/auth");

const router = express.Router();

// Get Profile 获取用户资料
router.get("/:username", profileCtrl.getProfile);

// Follow user 关注用户
router.post("/:username/follow", auth, profileCtrl.followUser);

// Unfollow user 取消关注用户
router.delete("/:username/follow", auth, profileCtrl.unfollowUser);

module.exports = router;
