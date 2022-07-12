const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
    fs.readFile('./views/login.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write('<h1>404 Not Found</h1>')
            res.end()
        }

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
    }else {
            let array = []
            let data1 = ''
            req.on('data', (chunk) => {
                data1 += chunk
            })
            req.on('end', () => {
                let qsData = qs.parse(data1)
                array.push(qsData)
                console.log(qsData)
                fs.readFile('./views/index.html', 'utf8',(err, data)=>{
                    if(err) {
                        throw new Error(err.message)
                    }
                    data = data.replace('{name}',qsData.name)
                    data = data.replace('{email}',qsData.email)
                    data = data.replace('{phone}',qsData.phone)
                    data = data.replace('{address}',qsData.address)
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write(data)
                    res.end()
                })
            })
            req.on('error', () => {
                console.log('error')
            })
        }
}).listen(8080, () => {
    console.log('server running on port 8080')
})