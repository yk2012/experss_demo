const express = require("express");

const app = express();
const port = 3000; // 默认3000
const myLogger = (req) => {};

// req 请求对象
// res 响应对象
// next 下一个中间件
app.use((req, res, next) => {
  console.log(req.method, req.url, Date.now())
  // 交出执行权，往后继续匹配执行
  next()
})

app.get("/", (req, res) => {
  res.send("get /");
});

// const myLooger = (req) => {
//   console.log(req.method, req.url, Date.now());
// };
// app.get("/", (req, res) => {
//   myLooger(req);
//   res.send("get /");
// });

app.get("/about", (req, res) => {
  res.send("get /about");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
