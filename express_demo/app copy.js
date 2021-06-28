const express = require("express");

const app = express();
const port = 3000; // 默认3000
const myLogger = (req) => {};

// // 不做任何限定的中间件
// app.use((req, res, next) => {
//   console.log("Time", Date.now());
//   next();
// });

// app.use('/user/:id',(req, res, next) => {
//   console.log("Request Type", req.method); // GET
//   next();
// });

// app.use(
//   "/user/:id",
//   (req, res, next) => {
//     console.log("Request URL", req.originalUrl);
//     next();
//   },
//   (req, res, next) => {
//     console.log("Request Type", req.method);
//     next();
//   }
// );

app.get(
  "/user/:id",
  (req, res, next) => {
    console.log("ID", req.params.id);
    next();
  },
  (req, res, next) => {
    res.send("User Info");
    next();
  }
);

app.get("/user/:id", (req, res, next) => {
  console.log("123");
  // res.end(req.params.id);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
