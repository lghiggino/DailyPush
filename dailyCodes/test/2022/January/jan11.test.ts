import { migratoryBirds } from "../../../src/2022/January/jan11-migratory-birds";

describe("migratoryBirds", () => {
    it("should return 4 for [1, 4, 4, 4, 5, 3]", () =>{
        expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4)
    })
    it("should return 3 for [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]", () =>{
        expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3)
    })
})