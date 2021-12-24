function modifyArray(nums) {
    const mapped = nums.map((item) => {
        if (item % 2 === 0) {
            return item * 2
        } else {
            return item * 3
        }
    })
    console.log("log",mapped)
    return mapped

}


modifyArray([1, 2, 3, 4, 5])