import { staircase } from "../../../src/2022/January/jan01-staircase";

describe("staircase", () => {
    it("should return '\n #\n##' for 2", () => {
        expect(staircase(2)).toBe("\n #\n##")
    })
    it("should return '      #\n    ##\n   ###\n  ####\n #####\n######' for 6", () => {
        expect(staircase(6)).toBe('\n     #\n    ##\n   ###\n  ####\n #####\n######')
    })
})