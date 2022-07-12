const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder

const server = http.createServer((req, res)=>{

    let string = new StringDecoder ('utf8')
    let buffer = ''
    req.on('data',(data)=>{
        buffer += string.write(data)
    })
    req.on('end',(end)=>{
        buffer += string.end()
        res.end()
        console.log(buffer)
    })



}).listen(8080,()=>{
    console.log('server listening on port 8080')
})