const express = require("express");
const articleCtrl = require("../controller/article");

const router = express.Router();

// List Articles
router.get("/", articleCtrl.listArticles);

// Feed Articles
router.get("/feed", articleCtrl.feedArticles);

// Get Article
router.get("/:slug", articleCtrl.getArticle);

// Create Article
router.post("/", articleCtrl.createArticle);

// Update Article
router.put("/:slug", articleCtrl.updateArticle);

// Delete Article
router.delete("/:slug", articleCtrl.deleteArticle);

// Add Comments to an Article
router.post("/:slug/comments", articleCtrl.addComments);

// Get Comments from an Article
router.get("/:slug/comments", articleCtrl.getComments);

// Delete Comment
router.delete("/:slug/comments/:id", articleCtrl.deleteComment);

// Favorite Article
router.post("/:slug/favorite", articleCtrl.favoriteArticle);

// Unfavorite Article
router.delete("/:slug/favorite", articleCtrl.unfavoriteArticle);

module.exports = router;
