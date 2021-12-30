export function plusMinus(arr) {
    // Write your code here
    let positives = (arr.filter(item => {
        return item > 0
    }).length / arr.length).toFixed(6)

    let negatives = (arr.filter(item => {
        return item < 0
    }).length / arr.length).toFixed(6)

    let zeros = (arr.filter(item => {
        return item === 0
    }).length / arr.length).toFixed(6)

    return [+positives, +negatives, +zeros]
}

export function plusMinusLoop(arr) {
    let positives = []
    let negatives = []
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives.push(arr[i])
        }
        if (arr[i] < 0) {
            negatives.push(arr[i])
        }
        if (arr[i] === 0) {
            zeros.push(arr[i])
        }
    }
    let positiveValue = (positives.length / arr.length).toFixed(6)
    let negativeValue = (negatives.length / arr.length).toFixed(6)
    let zeroValue = (zeros.length / arr.length).toFixed(6)

    return [+positiveValue, +negativeValue, +zeroValue]
}