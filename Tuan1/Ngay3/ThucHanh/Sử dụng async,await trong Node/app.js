async function getSum(arr){
    if (arr instanceof Array) {
        let sum = 0
        for (let i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return sum
    }
    throw new Error("Error")
}

async function check() {
    try{
        let result = await getSum([1,2,3,4])
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
}
check()