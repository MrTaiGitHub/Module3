const http = require('http');
const qs = require('qs');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if (req.method === 'GET'){
        fs.readFile("./views/caculator.html",'utf8',(err, data)=>{
            if (err){
                throw new Error(err.message)
            }
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else {
        let data = ''
        req.on('data',chunk => {
            data += chunk
        })
        req.on('end',()=>{
            let parseData = qs.parse(data)
            fs.readFile('./views/result.html','utf8',(err, data1)=>{
                let result = 0;
                switch (parseData.caculator) {
                    case '+' :
                        result = Number(parseData.a )+ Number(parseData.b)
                        break
                    case '-' :
                        result = parseData.a - parseData.b
                        break
                    case '*' :
                        result = parseData.a * parseData.b
                        break
                    case '/' :
                        result = parseData.a / parseData.b
                        break
                }
                data1 = data1.replace('{result}',result)
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data1)
                res.end()
            })
        })
        req.on('error',()=>{
            console.log('error')
        })
    }
})
server.listen(8080,()=>{
    console.log('server listening on port 8080')
})