const express = require("express");
const router = require("./router");

const app = express();
const port = 3000; // 默认3000

app.get("/todos", async (req, res, next) => {
  try {
    const db = await getDb();
    res.status(200).json(db.todos);
  } catch (err) {
    // 跳过所有剩余的无错误处理路由和中间函数
    next(err);
  }
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found.");
});

app.use((err, req, res, next) => {
  console.log("错误", err);
  res.status(500).json({
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
