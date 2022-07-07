let Array = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7']

function getDay(str) {

    let date = new Date(str)

    console.log(Array[date.getDay()])
}
getDay("2022-07-04")