function vowelsAndConsonants(s) {
    // const a = s.split("")
    // const vowels = a.filter(
    //     item => item === "a" || item === "e" || item === "i" || item === "o" || item === "u"
    //     )
    // const consonants = a.filter(
    //     item => item !== "a" && item !== "e" && item !== "i" && item !== "o" && item !== "u"
    //     )
    
    const vowels = s.match(/[aeiouAEIOU]/g)
    const consonants = s.match(/[^aeiouAEIOU]/g)
    
    const concatenated = vowels.concat(consonants)
    for(let i = 0; i < concatenated.length; i ++){
        console.log(concatenated[i])
    }
}

https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
