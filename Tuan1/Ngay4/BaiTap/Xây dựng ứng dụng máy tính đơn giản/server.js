const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer((req, res)=>{
    if (req.method === 'GET') {
        fs.readFile('./views/caculator.html','utf8', function(err,data){
            res.writeHead(200,'oke',{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else {
        let data1 = ''
        req.on('data',(chunk)=>{
            data1 += chunk
        })
        req.on('end',()=>{
            const caculator = qs.parse(data1)
            fs.readFile('./views/result.html','utf8',(err, data2)=>{
                    if(err) {
                        console.log(err)
                    }
                    let result = 0;
                    switch (caculator.caculator) {
                        case '+' :
                            result = caculator.number1 + caculator.number2
                        break
                        case '-' :
                            result = caculator.number1 - caculator.number2
                        break
                        case '*' :
                            result = caculator.number1 * caculator.number2
                        break
                        case '/' :
                            result = caculator.number1 / caculator.number2
                        break
                    }
                data2 = data2.replace('{result}',result)
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data2)
                res.end()
            })
        })
        req.on('error',(err)=>{
            console.log(err)
        })
    }
}).listen(8082,()=>{
    console.log('server listening on port 8082')
})