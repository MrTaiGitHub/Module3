const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('qs');

const server = http.createServer((req, res) => {
    let urlParse = url.parse(req.url)
    let path = urlParse.pathname
    let trimPath = path.replace(/^\/+|\/+$/g, '')
    let chooseHandler
    if (typeof router[trimPath] === 'undefined') {
        chooseHandler = handler.notFound
    }else {
        chooseHandler = router[trimPath]
    }
    chooseHandler(req, res)

})
server.listen(8080, () => {
    console.log('listening on port 8080')
})

let handler = {}

    handler.login = (req, res) => {
        if (req.method === 'GET') {
            templates(req, res, './views/Login.html')
        } else {
            let data = ''
            req.on('data', chunk => {
                data += chunk
            })
            req.on('end', () =>{
                let parseData = qs.parse(data)
                fs.readFile('./views/Table.html','utf8',(err, data1)=>{
                    if(err) {
                        throw new Error(err.message)
                    }
                    data1 = data1.replace('{name}',parseData.name)
                    data1 = data1.replace('{password}',parseData.password)

                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write(data1)
                    res.end()
                })
            })
            req.on('error', () =>{
                console.log('err')
            })
        }
    }
    handler.table = (req, res) =>{
        templates(req, res, './views/Table.html')
    }
    handler.home = (req, res) =>{
        templates(req, res, './views/Home.html')
    }
    handler.notFound = (req, res) =>{
        templates(req, res, './views/NotFound.html')
    }

let templates = (req, res, path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            throw new Error(err.message)
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }
    })
}
let router = {
    'login': handler.login,
    'table': handler.table,
    '': handler.home
}