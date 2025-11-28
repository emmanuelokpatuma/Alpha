const http = require("http");

const PORT = process.env.PORT || 3000;
const MESSAGE = "Hello World from Alpha Repo";

const server = http.createServer((req, res) => {
  res.end(MESSAGE);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
