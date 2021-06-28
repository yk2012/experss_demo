const express = require("express");

const app = express();
const port = 3000; // 默认3000
const myLogger = (req) => {};

function logOriginalUrl(req, res, next) {
  console.log("Request URL", req.originalUrl);
  next();
}
function logMethod(req, res, next) {
  console.log("Requset Type", req.method);
  next();
}
const logStuff = [logOriginalUrl, logMethod];

app.get("/user/:id", logStuff, (req, res, next) => {
  res.send("User Info");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
