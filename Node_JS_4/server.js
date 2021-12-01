const http = require("http");

const port = 8081;

http
  .createServer((request, response) => {
    // console.log(request.url);
    if (request.url === "/" && request.method === "GET") {
      console.log("Hello Web Application");
    } else if (request.url === "/About%20Me" && request.method === "GET") {
      console.log("About Me");
    } else if (request.url === "/register" && request.method === "GET") {
      console.log("register");
    } else if (request.url === "/login") {
      console.log("login");
    } else if (request.url === "/contact-us" && request.method === "GET") {
      console.log("contact-us");
    } else {
      console.log("Not Found");
    }
  })
  .listen(port);

//localhost:8081

// console.log("Server running at http://127.0.0.1:8081");
