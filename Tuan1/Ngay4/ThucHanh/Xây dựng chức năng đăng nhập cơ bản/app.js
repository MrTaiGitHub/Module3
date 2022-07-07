const http = require('http');

const server = http.createServer((req, res)=>{

    let txt = ''

    if (req.url === '/login') {
            txt = 'Login Success'
    }else {
            txt = 'Logic Failed'
    }
    res.end(txt)
}).listen(8080,()=>{
    console.log('server listening')
})