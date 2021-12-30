import diagonalDifference from "../src/Dec-28"

describe("diagonalDifference", () => {
    it("should return 2 for [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]", () => {
        expect(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toBe(15)
    })
    it("should return X for [[-10, 3, 0, 5, -4], [2, -1, 0, 2, -8], [9, -2, -5, 6, 0], [9, -7, 4, 8, -2], [3, 7, 8, -5, 0]]", () => {
        expect(diagonalDifference([[-10, 3, 0, 5, -4], [2, -1, 0, 2, -8], [9, -2, -5, 6, 0], [9, -7, 4, 8, -2], [3, 7, 8, -5, 0]])).toBe(3)
    })
    it("should return 13 for [ [6, 8], [-6, 9] ]", () => {
        expect(diagonalDifference([[6, 8], [-6, 9]])).toBe(13)
    })
    it("should return 0 for [ [1,1], [1,1] ]", () => {
        expect(diagonalDifference([[1,1], [1,1]])).toBe(0)
    })

})

