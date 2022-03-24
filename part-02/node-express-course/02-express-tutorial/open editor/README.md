# http basics

ports you need to remember:

- 80 --> http port
- 443 --> https port
- 22 --> ssh port

## final code

```
const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("Hello World!");
});

server.listen(3000, function () {
  console.log("server started at port 3000");
});
```

2 major issues in this code:

1. no info about the data that we're sending back (no metadata about the body).
2. returns the same content everytime the user requests different routes.

## ports in development

- ports in development are really arbritrary and you can use whatever you want

## a method that we always need to include in our response

- <code>res.end()</code>
  <br>
  this is signaling that all of the response headers and body have been sent; that server should consider this message complete. MUST be called on each response
  (indicating that the response stream is finished)
