const buyCar = (buyCar) => {
  return new Promise((resolve, reject) =>{
      setTimeout(() =>{
          if (!buyCar) {
              resolve('Du tien')
          }else {
              reject('Ko du tien')
          }
      },1000)
  })
}
buyCar(true).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
buyCar(false).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

