const http = require("http");
const fs = require("fs");

const port = 8081;
const errPage = "Somthing went wrong...!";

http
  .createServer((request, response) => {
    // console.log(request.url);
    if (request.url === "/login" && request.method === "GET") {
      fs.readFile("./Node_JS_6/login.html", "utf-8", (err, data) => {
        if (err) return response.end(errPage);
        response.end(data);
      });
    } else if (request.url === "/style" && request.method === "GET") {
      fs.readFile("./Node_JS_6/style.css", "utf-8", (err, style) => {
        if (err) return response.end(errPage);
        response.end(style);
      });
    } else if (request.url === "/Iran" && request.method === "GET") {
      fs.readFile("./Node_JS_6/Iran.jpg", "utf-8", (err, img) => {
        if (err) return response.end(errPage);
        response.writeHead(200, { "Content-type": "image/jpg" });
        response.end(img);
      });
    } else if (request.url === "/main" && request.method === "GET") {
      fs.readFile("./Node_JS_6/main.js", "utf-8", (err, script) => {
        if (err) return response.end(errPage);
        response.end(script);
      });
    }
  })
  .listen(port);

//localhost:8081

// console.log("Server running at http://127.0.0.1:8081");
