const fs = require('fs');
console.log("start")
fs.readFile('text.txt','utf8',(err,data)=>{
    console.log(data)
})
console.log("end")