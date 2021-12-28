function getSecondLargest(nums) {
    if (nums.length <= 2) {
        return undefined
    }
    let sorted = nums.sort(function (a, b) {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      })
    const uniqueNums = [...new Set(nums)]
    const index = uniqueNums.length-2
    return uniqueNums[index]
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map


getSecondLargest([2, 3, 6, 6, 5])
getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])


module.exports = { getSecondLargest }