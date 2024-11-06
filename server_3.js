import http from "http";

const PORT = 6666;
const server = http.createServer((req, res) => {
  if (req.method === "PUT") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("PUT has been processed");
  } else if (req.method === "DELETE") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("DELETE has been processed");
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method not supported");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
