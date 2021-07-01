const { Article } = require("../model");

// List Articles
exports.listArticles = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /articles/");
  } catch (err) {
    next(err);
  }
};

// Feed Articles
exports.feedArticles = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /articles/feed");
  } catch (err) {
    next(err);
  }
};

// Get Article
exports.getArticle = async (req, res, next) => {
  try {
    // 处理请求
    const article = await Article.findById(req.params.articleId).populate("author");
    if (!article) {
      return res.status(404).end();
    }
    res.status(200).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};

// Create Article
exports.createArticle = async (req, res, next) => {
  try {
    // 处理请求
    const article = new Article(req.body.article);
    article.author = req.user._id;
    article.populate("author").execPopulate();
    await article.save();
    res.status(201).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};

// Update Article
exports.updateArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send("put /articles/:slug");
  } catch (err) {
    next(err);
  }
};

// Delete Article
exports.deleteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /articles/:slug");
  } catch (err) {
    next(err);
  }
};

// Add Comments to an Article
exports.addComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /articles/:slug/comments");
  } catch (err) {
    next(err);
  }
};

// Get Comments from an Article
exports.getComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /articles/:slug/comments");
  } catch (err) {
    next(err);
  }
};

// Delete Comment
exports.deleteComment = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /articles/:slug/comments/:id");
  } catch (err) {
    next(err);
  }
};

// Favorite Article
exports.favoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
};

// Unfavorite Article
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
};
