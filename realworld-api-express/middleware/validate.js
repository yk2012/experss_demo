const { validationResult, buildCheckFunction } = require("express-validator");
const { isValidObjectId } = require("mongoose");

// 验证结果处理
exports = module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

// 判断id是否是有效的ObjectID
exports.isValidObjectId = (location, fields) => {
  return buildCheckFunction(location)(fields).custom(async (value) => {
    if (!isValidObjectId(value)) {
      return Promise.reject("ID 不是一个有效的 ObjectID");
    }
  });
};
