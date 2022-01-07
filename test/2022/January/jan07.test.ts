import { breakingRecords } from "../../../src/2022/January/jan07-breakingRecords"

describe("breakingRecords", () => {
    it("should return [2, 4] for [10, 5, 20, 20, 4, 5, 2, 25, 1]", () => {
        expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toStrictEqual([2, 4])
    })
})