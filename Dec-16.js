function getSecondLargest(nums) {
    if (nums.length <= 2) {
        return undefined
    }
    let sorted = nums.sort()

    for (let i = nums.length - 2; i > 0; i--) {
        if (sorted[i] != sorted[i + 1]) {
            return sorted[i]
        }
    }
}


module.exports = { getSecondLargest }