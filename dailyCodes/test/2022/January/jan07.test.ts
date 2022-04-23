import { breakingRecords } from "../../../src/2022/January/jan07-breakingRecords"

describe("breakingRecords", () => {
    it("should return [2, 4] for [10, 5, 20, 20, 4, 5, 2, 25, 1]", () => {
        expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toStrictEqual([2, 4])
    })
    it("should return [4,0] for [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]", () => {
        expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toStrictEqual([4,0])
    })
})