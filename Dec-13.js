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

//Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^[a].*[a]$|^[e].*[e]$|^[i].*[i]$|^[o].*[o]$|^[u].*[u]$/g
    
    /*
     * Do not remove the return statement
     */
    return re;
}
