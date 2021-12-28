function compareTriplets(a, b) {
    // Write your code here
    let sumA = 0
    let sumB = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            sumA += 0
            sumB += 0
        } else if (a[i] > b[i]) {
            sumA += 1
            sumB += 0
        } else if (a[i] < b[i]) {
            sumA += 0
            sumB += 1
        }
    }
    console.log([sumA, sumB])
    return [sumA, sumB]
}

module.exports = { compareTriplets }