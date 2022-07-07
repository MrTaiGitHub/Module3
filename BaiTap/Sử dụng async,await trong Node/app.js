async function Max(arr) {
    if (arr instanceof Array) {
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max
    } else {
        throw new Error('Wrong typeof input')
    }
}
async function check() {
    try {
        let result = await Max([1, 2, 3])
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
check()

