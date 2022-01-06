import { kangaroo } from "../../../src/2022/January/jan06-kangaroo";

describe("kangoroo", () => {
    it("should return YES for 2, 1, 1, 2", () => {
        expect(kangaroo(2,1,1,2)).toBe("YES")
    })
    it("should return YES for 0, 3, 4, 2", () => {
        expect(kangaroo(0, 3, 4, 2)).toBe("YES")
    })
    it("should return NO for 0, 2, 5, 3", () => {
        expect(kangaroo(0, 2, 5, 3)).toBe("NO")
    })
    it("should return NO for 21, 6, 47, 3", () => {
        expect(kangaroo(21, 6, 47, 3)).toBe("NO")
    })
    it("should return NO for 63, 8, 94, 3", () => {
        expect(kangaroo(63, 8, 94, 3)).toBe("NO")
    })
})


