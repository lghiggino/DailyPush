import { getSecondLargest } from '../Dec-16'

describe('get the second largest item in an array', () => {
    it("should get the second largest", () => {
        expect(getSecondLargest([2, 3, 6, 6, 5])).toBe(5);
    });
    it("should return undefined for length === 2", () => {
        expect(getSecondLargest([1, 2])).toBe(undefined);
    });
    it("should get the second largest using floats", () => {
        expect(getSecondLargest([2.2, 3.1, 6.9, 6.4, 5.2])).toBe(6.4);
    });
   
})