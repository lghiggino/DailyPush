import { divisibleSumPairs } from "../../../src/2022/January/jan10-divisible-sum-pairs";



describe("divisibleSumPairs", () => {
    it("should return 3 for [1,2,3,4,5,6] and k = 5", () => {
        expect(divisibleSumPairs(6, 5, [1,2,3,4,5,6])).toBe(3)
    })
    it("should return 5 for [1,2,3,4,5,6] and k = 3", () => {
        expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(3)
    })
})