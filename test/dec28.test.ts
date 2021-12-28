import diagonalDifference from "../src/Dec-28"

describe("diagonalDifference", () => {
    it("should return 2 for [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]", () => {
        expect(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toBe(2)
    })
})