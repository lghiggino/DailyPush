import { Polygon, Square } from "../Dec-24";

let triangle = new Polygon([3, 4, 5])
let square = new Square([2, 2])
let invalidSquare = new Square([3, 4, 5])

describe("testing the Polygon class", () => {
    it("should return the perimeter of the triangle", () => {
        expect(triangle.perimeter()).toBe(12)
    })
    it("should expect perimeter from different classes to match", () => {
        const squarePerimeter = square.perimeter()
        const fourSidePolygonPerimeter = new Polygon([2,2,2,2]).perimeter()
        expect(squarePerimeter).toEqual(fourSidePolygonPerimeter)
    })
})

describe("testing the Square class", () => {
    it("should return the area of the square", () => {
        expect(square.area()).toBe(4)
    })
    it("should return the perimeter of the square", () => {
        expect(square.perimeter()).toBe(8)
    })
    it("should throw for invalid input", () => {
        expect(() => {invalidSquare.area()}).toThrow("Invalid dimentions length for Square");
    })
    it("should throw for unmatched sides", () => {
        expect(() => {invalidSquare.area()}).toThrow();
    })
})


