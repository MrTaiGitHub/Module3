const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder
const server = http.createServer((req, res) => {


    const parseUrl = url.parse(req.url)
    const parseString = parseUrl.query
    res.end("hello nodejs ")
    console.log(parseString)


}).listen(8080,()=>{

})