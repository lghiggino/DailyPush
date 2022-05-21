export function getA() {
    return "A"
}

export function getB() {
    setTimeout(() => {
        "B"
    }, 1)
}

export function getC() {
    return new Promise((resolve, reject) => { resolve("C") })
}

export async function getABC() {
    console.log(getA())
    console.log(await getB())
    console.log(getC().then((res, rej): any => { return (res) }))
}
