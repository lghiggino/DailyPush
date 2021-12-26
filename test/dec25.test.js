import { sides } from "../Dec-25";

describe("Tests the sides function", () => {
    it("should return [10, 14] for [140, 48]", () => {
        expect(sides(140,48)).toBe([10,14])
    })
})