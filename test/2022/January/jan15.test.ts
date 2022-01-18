import { pageCount } from "../../../src/2022/January/jan15-drawing-book";

describe("pageCount", () => {
    it("from 6 and 2 return 1", () => {
        expect(pageCount(6, 2)).toBe(1)
    })
    it("from 6 and 5 return 1", () => {
        expect(pageCount(6, 5)).toBe(1)
    })
    it("from 5 and 4 return 0", () => {
        expect(pageCount(5, 4)).toBe(0)
    })
    it("from 7 and 3 return 1", () => {
        expect(pageCount(7, 3)).toBe(1)
    })
})
