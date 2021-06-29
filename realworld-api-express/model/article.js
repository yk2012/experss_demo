const mongoose = require("mongoose");
const baseModle = require("./base-model");

const articleSchema = new mongoose.Schema({
  ...baseModle,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
});

module.exports = articleSchema;
