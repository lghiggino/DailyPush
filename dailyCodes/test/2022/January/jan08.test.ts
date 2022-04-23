import { getTotalX } from "../../../src/2022/January/jan08-between-two-sets";

describe("getTotalX", () => {
    it("should return 3 for [2,4] and [16,32,96]", () => {
        expect(getTotalX([2, 4], [16, 32, 96])).toBe(3)
    })
    it("should return 2 for [3,4] and [24, 48]", () => {
        expect(getTotalX([3, 4], [24, 48])).toBe(2)
    })
})