let Array = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
let countNam = 0;
let poinNam =0;
let countNu = 0;
let poinNu = 0;
Array.forEach((item) => {
    if (item.gender === 'male') {
        countNam++;
        poinNam = poinNam + item.poin;
    } else if (item.gender === 'female') {
        countNu++
        poinNu = poinNu + item.poin
    }
})

let trungbinhnam = poinNam / countNam
console.log(trungbinhnam)
let trungbinhnu = poinNu / countNu
console.log(trungbinhnu)
