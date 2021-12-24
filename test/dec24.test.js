import { Polygon, Square } from "../Dec-24";

let triangle = new Polygon([3, 4, 5])
let square = new Square([2, 2])
let invalidSquare = new Square([3, 4, 5])

describe("testing the Polygon class", () => {
    it("should return the perimeter of the triangle", () => {
        expect(triangle.perimeter()).toBe(12)
    })
    it("should return the perimeter of the square", () => {
        expect(square.perimeter()).toBe(8)
    })
})

describe("testing the Square class", () => {
    it("should return the area of the square", () => {
        expect(square.area()).toBe(4)
    })
    it("should throw for invalid input", () => {
        expect(invalidSquare.area()).toThrow("Invalid dimentions length for Square");
    })
})


function compileAndroidCode() {
    throw new Error('você está usando o JDK errado');
}

test('compilando para android segue conforme esperado', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // Você também pode usar a mensagem exata de erro ou uma regexp
    expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});