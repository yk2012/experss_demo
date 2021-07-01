const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
const { User } = require("../model");

module.exports = async (req, res, next) => {
  // 从请求头获取token数据
  let token = req.headers.authorization;
  // 验证token是否有效
  token = token ? token.split("Token ")[1] : null;
  // 如果无效，发送响应 401 结束响应
  if (!token) {
    return res.status(401).end();
  }
  try {
    const decodedToken = await verify(token, jwtSecret);
    // console.log('decodedToken:',decodedToken);
    req.user = await User.findById(decodedToken.userId);
    next();
  } catch (err) {
    return res.status(401).end();
  }
  // 如果有效，将用户信息读取，挂载到req请求对象上，继续往后执行
};
