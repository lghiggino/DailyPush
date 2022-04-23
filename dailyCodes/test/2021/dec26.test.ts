import { getDayName } from "../src/Dec-26";

describe("getDayName", () => {
    it("should return 'Sunday' for 12/26/2021", () => {
        expect(getDayName("12/26/2021")).toBe("Sunday")
    })
})