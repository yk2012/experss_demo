const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const baseModle = require("./base-model");

const articleSchema = new mongoose.Schema({
  ...baseModle,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tagList: {
    type: [String],
    default: null,
  },
  favoritesCount: {
    type: Number,
    default: 0,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = articleSchema;
