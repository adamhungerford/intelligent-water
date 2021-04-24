const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 4000;

document.write("<link rel='stylesheet' type='text/css' href='sb-admin-2.css'>");

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});