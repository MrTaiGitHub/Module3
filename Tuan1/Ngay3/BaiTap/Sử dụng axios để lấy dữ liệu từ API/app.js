const axios = require('axios');

function getPictureOfDay() {
    return new Promise((resolve, reject) => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(result =>{
                resolve(result.data)
            } )
    })
}
getPictureOfDay().then(result => {
    console.log(result)
})