const decryptPassword = (s) => {
    let decryptArray = []
    for (let i = 0; i < s.length-1; i++){
        console.log("s[i]", s[i], "s[i+1]", s[i+1])
        //5. stop if i is more than or equal to string length
        if(i === s.lenght){
            return(decryptArray.join(""))
        }
        //2. if s[i] is lowercase && s[i+1] is uppercase, swap them, add a '*' and move to s[i+2]
        if((s[i].toLowerCase() === s[i]) && (s[i+1].toUpperCase() === s[i+1])){
            decryptArray.push(s[i+1], s[i], '*')
            i++
        }
        //3. if s[i] is a number replace it with 0, place the original number at start and move to i+1
        if(typeof s[i] === 'number'){
            decryptArray.push(0)
            decryptArray.unshifht(s[i]) 
        }
        else {
            decryptArray.push(s[i])
        }
    }
    return decryptArray.join("")
}

module.exports = { decryptPassword }