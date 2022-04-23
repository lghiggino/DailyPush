import {timeConversion} from "../../../src/2022/January/jan04-timeConversion"

describe("timeConversion", () => {
    it("should return '12:01:00' for '12:01:00PM'", () => {
        expect(timeConversion("12:01:00PM")).toBe('12:01:00')
    })
    it("should return '12:01:00' for '12:01:00AM'", () => {
        expect(timeConversion("12:01:00AM")).toBe('00:01:00')
    })
    it("should return '15:01:00' for '03:01:00PM'", () => {
        expect(timeConversion("03:01:00PM")).toBe('15:01:00')
    })
})