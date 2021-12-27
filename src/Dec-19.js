const excluded = ["a", "e", "i", "o", "u"]

function shortcut(string) {
    const split = string.split("")
    const responseArr = []
    for (let i = 0; i < string.length; i++) {
        if (!excluded.includes(split[i])) {
            responseArr.push(split[i])
        }
    }
    return responseArr.join("")
}

function shortcut(string) {
    return string.replace(/[aeiou]/g, '')
}


function shortcut(str) {
    return str.split('').filter(function (e) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1
    }).join('')
}