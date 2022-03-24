const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("Welcome to our homepage!");
  } else if (req.url === "/about") {
    res.end("Here is our short history!");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for!</p>
    <a href='/'>Back Home</a>
  `);
  }
});

server.listen(3000, function () {
  console.log("Server started on port 3000");
});
