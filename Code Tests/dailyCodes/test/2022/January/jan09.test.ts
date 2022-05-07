import { birthday } from "../../../src/2022/January/jan09-the-birthday-bar";

describe("birthday", () => {
    it("should return 2 for [2, 2, 1, 3, 2]; d = 4; m= 2", () => {
        expect(birthday([2, 2, 1, 3, 2], 4, 2)).toBe(2)
    })
    it("should return 1 for [4, 1]; d = 4; m = 1", () => {
        expect(birthday([4, 1], 4, 1)).toBe(1)
    })
    it("should return 2 for [1, 2, 1, 3, 2]; d = 3; m = 2", () => {
        expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2)
    })
})


