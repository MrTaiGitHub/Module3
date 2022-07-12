const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    fs.readFile('./Templates/index.html','utf8',(err, data)=>{
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end('404 Not Found')
        }
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })

}).listen(8080,()=>{
    console.log('server listening on port 8080')
})