const http = require('http');
http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
	res.end("Server 2 🚀");
}).listen(3000);
