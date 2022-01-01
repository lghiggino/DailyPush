import compareTriplets from "../src/Dec-27";

describe("compareTriplets", () => {
    it("For [5, 6, 7], [3, 6, 10] should return [1, 1]", () => {
        expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([ 1, 1 ])
    })
    it("For [5, 8, 7], [3, 6, 10] should return [1, 1]", () => {
        expect(compareTriplets([5, 8, 7], [3, 6, 10])).toEqual([ 2, 1 ])
    })
    it("For [5, 8, 7], [13, 16, 10] should return [1, 1]", () => {
        expect(compareTriplets([5, 8, 7], [13, 16, 10])).toEqual([ 0, 3 ])
    })
    it("For [5, 5, 5, 5, 5], [5, 5, 5, 5, 6] should return [1, 1]", () => {
        expect(compareTriplets([5, 5, 5], [5, 5, 6])).toEqual([ 0, 1 ])
    })
})