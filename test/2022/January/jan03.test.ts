import {birthdayCakeCandles} from "../../../src/2022/January/jan03-birthdayCakeCandles"

describe("birthdayCakeCandles", () => {
    it("should return 2 for [1, 2, 3, 4, 5]", () => {
        expect(birthdayCakeCandles([1, 2, 3, 4, 5, 5])).toBe(2)
    })
    it("should return 5 for [1, 1, 1, 1, 1]", () => {
        expect(birthdayCakeCandles([1, 1, 1, 1, 1])).toBe(5)
    })
})