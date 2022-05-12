import matrixElementsSum from "../../../src/2022/may/may_11-matrixElementsSum";

describe("matrixElementsSum", () => {
    it("should return 2", () => {
        const matrix =
            [[1, 0],
             [1, 5,]]
        const result = matrixElementsSum(matrix)
        expect(result).toBe(2)
    })

    it("should return 9", () => {
        const matrix =
            [[1, 1, 1, 0],
             [0, 5, 0, 1],
             [2, 1, 3, 10]]
        const result = matrixElementsSum(matrix)
        expect(result).toBe(9)
    })
})