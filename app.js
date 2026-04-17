const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DevOps 🚀 from Jenkins');
});

server.listen(3000);
