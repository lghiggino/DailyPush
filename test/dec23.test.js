import { getCount } from '../Dec-23'


const testArray0 = [
    { x: 0, y: 1 },
    { x: 2, y: 3 },
    { x: 0, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 }
]
const testArray2 = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 }
]



describe("Tests getCount in multiple objects", () => {
    it("should return 2", () => {
        expect(getCount(testArray2)).toBe(2)
    })
})