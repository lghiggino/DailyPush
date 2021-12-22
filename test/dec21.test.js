import { checkPalindrome } from '../Dec-21-Stack'

describe("checks if a word is a perfect palindrome", () => {
    it("checks racecar expecting the result to be true", () => {
        expect(checkPalindrome("racecar")).toBe(true)
    })
    it("checks bob expecting the result to be true", () => {
        expect(checkPalindrome("bob")).toBe(true)
    })
    it("checks '' expecting the result to be true", () => {
        expect(checkPalindrome("")).toBe(true)
    })
    it("checks 'Racecar' expecting the result to be false", () => {
        expect(checkPalindrome("Racecar")).toBe(false)
    })
    it("checks 'rats live on no evil star' expecting the result to be true", () => {
        expect(checkPalindrome("rats live on no evil star")).toBe(true)
    })
})