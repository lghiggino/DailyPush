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
    it("should get the second largest item in the array", () => {
        expect(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).toBe(12);
    });
    it("should get the second largest item in the array", () => {
        expect(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1])).toBe(10);
    });
    
   
})