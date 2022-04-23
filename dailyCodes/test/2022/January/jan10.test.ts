import { divisibleSumPairs } from "../../../src/2022/January/jan10-divisible-sum-pairs";



describe("divisibleSumPairs", () => {
    it("should return 3 for [1,2,3,4,5,6] and k = 5", () => {
        expect(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])).toBe(3)
    })
    it("should return 5 for [1,2,3,4,5,6] and k = 3", () => {
        expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5)
    })
    it("should return 15 for [29, 97, 52, 86, 27, 89, 77, 19, 99, 96] and k = 3", () => {
        expect(divisibleSumPairs(10, 3, [29, 97, 52, 86, 27, 89, 77, 19, 99, 96])).toBe(15)
    })
})