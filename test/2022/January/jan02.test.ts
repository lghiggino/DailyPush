import { miniMaxSum, minMaxSumOfN } from "../../../src/2022/January/jan02";

describe("miniMaxSum", () => {
    it("should return [10, 14] for [1, 2, 3, 4, 5]", () => {
        expect(miniMaxSum([1, 2, 3, 4, 5])).toStrictEqual([10, 14])
    })
    it("should return [4,4] for [1, 1, 1, 1, 1]", () => {
        expect(miniMaxSum([1, 1, 1, 1, 1])).toStrictEqual([4, 4])
    })
})

describe("minMaxSumOfN", () => {
    it("should return [3,9] for ([1, 2, 3, 4, 5], 2)", () => {
        expect(minMaxSumOfN([1, 2, 3, 4, 5], 2)).toStrictEqual([3, 9])
    })
    it("should return [6,12] for ([1, 2, 3, 4, 5], 3)", () => {
        expect(minMaxSumOfN([1, 2, 3, 4, 5], 3)).toStrictEqual([6, 12])
    })
})