const jwt = require("jsonwebtoken");
const { promisify } = require("util");

// 解析
exports.sign = promisify(jwt.sign);

// 验证
exports.verify = promisify(jwt.verify);

// 不验证直接解析
exports.decode = jwt.decode();
