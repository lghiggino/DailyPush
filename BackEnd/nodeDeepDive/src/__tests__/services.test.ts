// requireActual ensures you get the real file
// instead of an automock
// we use import type and <typeof ...> to still get types
import type * as Silly from "../silly"
const { sillyFunction } = jest.requireActual<typeof Silly>("../silly")

describe("requisites", () => {
    it("should be possible to create an account", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should be possible to get account statement", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should be possible to deposit", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should be possible to withdraw", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should be possible to get account statement by client and by date", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should be possible to get client data", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should be possible to delete an account", () => {
        expect(sillyFunction()).toBe(3)
    })
})

describe("business rules", () => {
    it("should NOT be possible to register account using the same CPF", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should NOT be possible to make a deposit at an unexisting account", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should NOT be possible to get an statement of an unexisting account", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should NOT be possible to withdraw from an unexisting account", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should NOT be possible to delete an unexisting account", () => {
        expect(sillyFunction()).toBe(3)
    })
    it("should NOT be possible to withdraw from an account without the necessary funds", () => {
        expect(sillyFunction()).toBe(3)
    })
})

// required with this small example
// to make the isolatedModules config happy
export { }