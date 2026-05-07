const http = require('http');

http.createServer((req, res) => {
    setTimeout(() => {
        res.end("Slow response");
    }, 15000); // 15 sec delay
}).listen(3000);