import { isPositive } from '../Dec-15'

describe('hackerrank isPositive', () => {
    it("Checks if a number is positive and returns YES", () => {
        expect(isPositive(2)).toBe("YES");
    });
    it("Checks if a number is zero and returns Zero Error", () => {
        expect(() => {isPositive(0)}).toThrow("Zero Error")
    });
    it("Checks if a number is nagative and returns Negative Error", () => {
        expect(() => {isPositive(-3)}).toThrow("Negative Error")
    });
})

test("Test description", () => {
    const t = () => {
      throw new TypeError();
    };
    expect(t).toThrow(TypeError);
  });