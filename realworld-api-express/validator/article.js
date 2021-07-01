const { body, param } = require("express-validator");
const validate = require("../middleware/validate");
const { Article } = require("../model");

exports.createArticle = validate([
  body("article.title").notEmpty().withMessage("文章标题不能为空"),
  body("article.description").notEmpty().withMessage("文章摘要不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);

exports.getArticle = validate([
  validate.isValidObjectId(["params"], "articleId"),
  // param("articleId").custom(async (value) => {
  //   if (!mongoose.isValidObjectId(value)) {
  //     return Promise.reject("文章ID类型错误");
  //   }
  // }),
]);

exports.updateArticle = [
  // 校验id是否是ObjectID
  validate([validate.isValidObjectId(["params"], "articleId")]),
  // 校验文章是否存在
  async (req, res, next) => {
    const articleId = req.params.articleId;
    const article = await Article.findById(articleId);
    req.article = article;
    if (!article) {
      return res.status(404).end();
    }
    next();
  },
  // 判断 修改的文章作者是否是当前登录用户
  async (req, res, next) => {
    console.log(typeof req.user._id, typeof req.article.author); // object object
    if (req.user._id.toString() !== req.article.author.toString()) {
      return res.status(403).end();
    }
    next();
  },
];

exports.deleteArticle = exports.updateArticle;
