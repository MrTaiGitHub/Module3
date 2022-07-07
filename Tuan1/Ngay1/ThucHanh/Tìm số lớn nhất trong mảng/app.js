let Array = [2,434,5,8,456]

let max = Array[0]
for (i = 0 ; i < Array.length; i++) {
    if (Array[i] > max){
        max = Array[i]
    }
}
console.log(max)