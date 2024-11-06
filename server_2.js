import http from "http";
import fs from "fs";

const PORT = 5555;
const server = http.createServer((req, res) => {
  try {
    throw new Error("Test error for logging");
  } catch (error) {
    fs.appendFile(
      "errors.log",
      `${new Date().toISOString()} - ${error.message}\n`,
      (err) => {
        if (err) console.error("Error logging to file", err);
      }
    );

    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal error occurred");
  }
});
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
