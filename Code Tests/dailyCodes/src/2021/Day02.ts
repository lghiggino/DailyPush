const fs = require("fs")

fs.readFile('./day02dataset.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err.message)
        return
    }
    const arrayOfData = data.split("\n")
    // console.log(arrayOfData)
    let object = {
        forward: 0,
        down: 0,
        up: 0
    }
    arrayOfData.forEach(element => {
        if (element.includes("forward")) {
            const num = element.split(" ")[1]
            object.forward += +num
        }
        if (element.includes("down")) {
            const num = element.split(" ")[1]
            object.down += +num
        }
        if (element.includes("up")) {
            const num = element.split(" ")[1]
            object.up += +num
        }
    })
    // console.log(object)
    const calc = (object.down - object.up) * object.forward
    console.log(calc)
})

//no idea here
fs.readFile('./day02dataset.txt', 'utf-8', (err, data) => {
    const value = data.split(/\n(?!$)/)
    .map(x => x.split` `)
    .reduce((a, [d, n]) => (({ f() { a[0] = +n + a[0]; a[1] = a[1] + n * a[2] }, d() { a[2] = +n + a[2] }, u() { a[2] = -n + a[2] } })[d[0]](), a), [0, 0, 0])
    console.log(value)
})
