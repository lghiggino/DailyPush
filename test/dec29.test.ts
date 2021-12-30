import { plusMinus, plusMinusLoop } from "../src/Dec-29"

describe("plusMinus", () => {
    it("plusMinus for [-4, 3, -9, 0, 4, 1]", () => {
        expect(plusMinus([-4, 3, -9, 0, 4, 1])).toStrictEqual([0.500000, 0.333333, 0.166667])
    })
    it("plusMinus for [-4, -3, -9, -1, -4, -1]", () => {
        expect(plusMinus([-4, -3, -9, -1, -4, -1])).toStrictEqual([0, 1, 0])
    })
    it("plusMinus for [4, 3, 9, 1, 4, 1]", () => {
        expect(plusMinus([4, 3, 9, 1, 4, 1])).toStrictEqual([1, 0, 0])
    })
})

describe("plusMinusLoop", () => {
    it("plusMinusLoop for [-4, 3, -9, 0, 4, 1]", () => {
        expect(plusMinusLoop([-4, 3, -9, 0, 4, 1])).toStrictEqual([0.500000, 0.333333, 0.166667])
    })
    it("plusMinusLoop for [-4, -3, -9, -1, -4, -1]", () => {
        expect(plusMinusLoop([-4, -3, -9, -1, -4, -1])).toStrictEqual([0, 1, 0])
    })
    it("plusMinusLoop for [4, 3, 9, 1, 4, 1]", () => {
        expect(plusMinusLoop([4, 3, 9, 1, 4, 1])).toStrictEqual([1, 0, 0])
    })
})