const http = require('http')
const process = require('process')

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n' + process.version);
}).listen(8000); // 另外一个选择另一个端口

console.log(`Worker ${process.pid} started`);