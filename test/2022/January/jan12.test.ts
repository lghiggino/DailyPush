import { bonAppetit } from "../../../src/2022/January/jan12-bonAppetit";

describe("bonAppetit", () => {
    it("should return 5 for...", () => {
        expect(bonAppetit([3, 10, 2, 9], 1, 12)).toBe(5)
    })

    it("should return 'Bon Appetit for...", () => {
        expect(bonAppetit([3, 10, 2, 9], 1, 7)).toBe('Bon Appetit')
    })
})