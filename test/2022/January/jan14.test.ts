import { countingValleys } from "../../../src/2022/January/jan14-counting-valleys";

describe("countingValleys", () => {
    it("Should return 1 for UDDDUDUU", () => {
        expect(countingValleys("UDDDUDUU")).toBe(1)
    })
})