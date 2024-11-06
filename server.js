import http from "http";

const PORT = 4444;
const server = http.createServer((req, res) => {
  if (!req.headers["authorization"]) {
    (res.statusCode = 401),
      res.setHeader("Content-Type", "text/plain"),
      res.end("Unauthorized");
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Authorization header received");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// curl http://localhost:4444
// curl -H "Authorization: Bearer token" http://localhost:4444