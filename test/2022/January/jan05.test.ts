import { countApplesAndOranges } from "../../../src/2022/January/jan05";

describe("countApplesAndOranges", () => {
    it("should return [1,2] for [2,3,-4] and [3, -2, -4]", () => {
        expect(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])).toStrictEqual([1, 2])
    })
})