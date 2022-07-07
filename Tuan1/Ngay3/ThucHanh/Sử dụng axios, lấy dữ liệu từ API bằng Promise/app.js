const axios = require('axios');

function f() {
    return new Promise((resolve, reject) => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then((json)=>{
                resolve(json.data)
            })
    })
}

f().then(result=>{
    console.log(result)
})