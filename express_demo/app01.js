const express = require("express");

const app = express();
const port = 3000; // 默认3000

app.get("/", (request, response) => {
  console.log("request.url:", request.url);
  console.log("request.method:", request.method);
  console.log("request.headers:", request.headers);
  console.log('请求参数：', request.query)

  // 设置响应状态码
  // response.statusCode = 201

  // response.write('a')
  // response.write('b')
  // response.write('c')
 
  // 结束响应
  // response.end()
  // response.end('efg')

  // response.send("Hello World");
  // response.send({
  //   name: 'yk'
  // })
  response.cookie('yk', 'kk')
  response.status(201).send('OK')

});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a POST request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
