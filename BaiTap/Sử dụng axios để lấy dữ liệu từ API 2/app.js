const axios = require('axios');

async function getPictureOfDay() {
    let picture = await axios.get('https://jsonplaceholder.typicode.com/users')
    return picture.data
}
getPictureOfDay().then(result => {
    console.log(result)
})