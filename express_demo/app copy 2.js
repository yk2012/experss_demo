const express = require("express");

const app = express();
const port = 3000; // 默认3000
const myLogger = (req) => {};

app.get(
  "/user/:id",
  (req, res, next) => {
    if (req.params.id === "0") next("route");
    else next();
  },
  (req, res, next) => {
    res.send("regular");
  }
);

app.get("/user/:id", (req, res, next) => {
  res.send("special");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
