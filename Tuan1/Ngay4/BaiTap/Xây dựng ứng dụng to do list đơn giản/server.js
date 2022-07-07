const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/todo.html', 'utf8', (err, data) => {
            res.writeHead(200, 'oke', {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }else {
        let data = ''
        req.on('data',chunk => {
            data += chunk
        })
        req.on('end',()=>{
            const user = qs.parse(data)
            fs.readFile('./views/display.html','utf8', (err, data1) => {
                if (err) {
                    console.log(err)
                }
                data1 = data1.replace('{name}',user.name)
                data1 = data1.replace('{time}',user.time)
                res.writeHead(200,{'Content-type':'text/html'})
                res.write(data1)
                res.end()
            })
        })
        res.on('error',()=>{
            console.log('error')
        })
    }

})
server.listen(8081, () => {
    console.log('server is running')
})