const axios = require('axios');
async function f() {
    let json = await axios.get('http://jsonplaceholder.typicode.com/posts/1')
    return json.data
}
f().then(result=>{console.log(result)})