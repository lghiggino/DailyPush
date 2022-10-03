import { filterByTypeOf, TypeOfTypes } from "../../../src/2022/August/aug13";

const baseArray = ['a', 'b', 1, 2, {idx1: 'a', idx2: 'b'}, 'c', 3, {idx3: 1, idx4: 'fff', idx5: 2}, 'd', 4, 5]

describe("filterByTypeOf", () => {
    it("should return ['a', 'b', 'c', 'd']", () => {
        expect(filterByTypeOf(baseArray, 'string')).toEqual(['a', 'b', 'c', 'd'])
    })
    it("should return [1, 2, 3, 4, 5]", () => {
        expect(filterByTypeOf(baseArray, 'number')).toEqual([1, 2, 3, 4, 5])
    })
    it("should return [{idx1: 'a', idx2: 'b'}, {idx3: 1, idx4: 'fff', idx5: 2}]", () => {
        expect(filterByTypeOf(baseArray, 'object')).toEqual([{idx1: 'a', idx2: 'b'}, {idx3: 1, idx4: 'fff', idx5: 2}])
    })
})