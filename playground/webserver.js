var http= require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    res.end("Oies!\n");
});

server.listen(1337, '127.0.0.1');