async function party (isKayoSick) {
    if (!isKayoSick) {
        return 2
    } else {
        throw new Error('I am sick')
    }
}

async function check() {
    try {
        let result = await party(false)
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
    finally {
        console.log('Party')
    }
}
check()