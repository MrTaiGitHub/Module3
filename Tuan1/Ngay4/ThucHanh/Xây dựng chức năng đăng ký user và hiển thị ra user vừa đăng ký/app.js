const http = require('http');
const fs = require('fs');
const qs = require('qs');
const server = http.createServer((req, res)=>{
    if (req.method === 'GET') {
        fs.readFile('./views/register.html', (err, data) => {
            res.writeHead(200, 'oke', {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }else {
        let data = ''
        req.on('data',chunk => {
            data += chunk
        })
        req.on('end',() =>{
            const user = qs.parse(data)
            fs.readFile('./views/login.html', 'utf8',(err,data1)=>{
                data1 = data1.replace('{name}', user.name)
                data1 = data1.replace('{email}', user.email)
                data1 = data1.replace('{password}', user.password)
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data1)
                res.end()
            })
        })
        req.on('error',()=>{
            console.log('error')
        })
    }
}).listen(8080,()=>{
    console.log('listening on port 8080')
})