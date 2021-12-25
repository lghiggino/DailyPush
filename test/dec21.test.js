import { checkPalindrome, Stack } from '../Dec-21-Stack'

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

describe("checks if the Stack methods produce the expected results", () => {
    const animalStack = new Stack()
    animalStack.push("abelha")
    animalStack.push("borboleta")
    animalStack.push("coelho")

    it("peek() should to return the last element in the stack", () => {
        expect(animalStack.peek()).toBe("coelho")
    })
    it("push() should add element in the stack", () => {
        animalStack.push("dromedário")
        expect(animalStack.peek()).toBe("dromedário")
    })
    it("length() should return the length of the stack", () => {
        let initialLength = animalStack.length()
        animalStack.push("elefante")
        let modifiedLength = animalStack.length()
        console.log(animalStack.length())
        expect(modifiedLength).toBe(initialLength + 1)
    })
    it("pop() should return the last item of the stack", () => {
        expect(animalStack.pop()).toBe("elefante")
        expect(animalStack.length()).toBe(4)
    })
})