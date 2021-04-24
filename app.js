const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

  res.setHeader('Content-Type', 'text/html');
  res.end("<link rel='stylesheet' type='text/html' href='sb-admin-2.css'>")
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});