async function number(a, b) {
    if (b !== 0) {
        return a / b
    }else {
        throw new Error("err")
    }
}

async function check() {
    try {
        let result = await number(2, 7)
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
}
check()