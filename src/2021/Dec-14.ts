const decryptPassword = (s) => {
    let decryptArray = []
    for (let i = 0; i < s.length - 1; i++) {
        console.log("s[i]", s[i], "s[i+1]", s[i + 1], 'typeof', typeof +s[i])
        //2. if s[i] is lowercase && s[i+1] is uppercase, swap them, add a '*' and move to s[i+2]
        if((s[i].toLowerCase() === s[i]) && (s[i+1].toUpperCase() === s[i+1])){
            decryptArray.push(s[i+1], s[i], '*')
            // i++
        }
        //3. if s[i] is a number replace it with 0, place the original number at start and move to i+1
        if (!isNaN(s[i])) {
            decryptArray.splice(s[i], 1, "0")
            decryptArray.unshift(s[i])
        }
        

    }
    return decryptArray.join("")
}

module.exports = { decryptPassword }