import { miniMaxSum } from "../../../src/2022/January/jan02";

describe("miniMaxSum", () => {
    it("should return [10, 14] for [1, 2, 3, 4, 5]", () => {
        expect(miniMaxSum([1, 2, 3, 4, 5])).toStrictEqual([10, 14])
    })
    it("should return [4,4] for [1, 1, 1, 1, 1]", () => {
        expect(miniMaxSum([1, 1, 1, 1, 1])).toStrictEqual([4, 4])
    })
})