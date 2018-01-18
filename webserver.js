const http= require('http');
const fs = require('fs');


const server = http.createServer(function(req, res) {
    if(req.url === '/html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
    
        const message = 'Oies!';
    
        html = html.replace('{Message}', message);
    
        res.end(html);
    } else if(req.url === '/json') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let obj = {
            firstName: 'Francisco',
            lastName: 'Lisboa'
        }
    
        res.end(JSON.stringify(obj));
    }

    res.writeHead(404);
    res.end();
});

server.listen(1337, '127.0.0.1');