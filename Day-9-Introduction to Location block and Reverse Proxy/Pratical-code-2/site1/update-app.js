const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from Backend 🚀");
});

server.listen(3000, () => {
    console.log("Backend running on port 3000");
});


const api = http.createServer((req, res) => {
    console.log("---- Incoming Request ----");
    console.log("Host:", req.headers.host);
    console.log("X-Real-IP:", req.headers['x-real-ip']);
    console.log("X-Forwarded-For:", req.headers['x-forwarded-for']);
    console.log("--------------------------",req.headers['x-forwarded-proto']);

    res.end("Hello from API");
});
api.listen(4000,(req,res)=>{
	console.log("API running om port 4000");

});
