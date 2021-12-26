function sides(...expressions) {
    console.log("expressions", expressions)
    const s1 = (expressions[1] + Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0])) / 4
    const s2 = (expressions[1] - Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0])) / 4

    const responseArray = [s1, s2].sort()
    
    return responseArray
}

module.exports = { sides }