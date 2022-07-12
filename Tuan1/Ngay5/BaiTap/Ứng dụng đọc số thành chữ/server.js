const http = require('http');
const fs = require('fs');
const qs = require('qs');
let ketQua = ''
let donVi = ''
let chuc = ''
let tram = ''
let hang_donVi = ['khong', 'mot', 'hai', 'ba', 'bon', 'nam', 'sau', 'bay', 'tam', 'chin']
let hang_chuc = ['mot', 'hai', 'ba', 'bon', 'nam', 'sau', 'bay', 'tam', 'chin']
let hang_tram = ['mot', 'hai', 'ba', 'bon', 'nam', 'sau', 'bay', 'tam', 'chin']


const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', 'utf8', (err, data) => {
            if (err) {
                throw new Error(err.message)
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    } else {
        let data = ''
        req.on('data', chunk => {
            data += chunk
        })
        req.on('end', () => {
            let qsData = qs.parse(data)
            let Number = qsData.number
            if (Number.length === 1) {
                for (let i = 0; i < hang_donVi.length; i++) {
                    if (i === +(Number[0])) {
                        ketQua = hang_donVi[i]
                        break
                    }
                }
            } else if (Number.length === 2) {
                if (Number[0] === 1 && Number[1] === 0) {
                    ketQua = 'muoi'
                } else if (Number[0] !== 1 && Number[1] === 0) {
                    for (let i = 0; i < hang_chuc.length; i++) {
                        
                    }
                } else {
                    ketQua
                }
            }


        })
        req.on('error', () => {
            console.log('error')
        })
    }
}).listen(8080, () => {
    console.log('server listening on port 8080')
})