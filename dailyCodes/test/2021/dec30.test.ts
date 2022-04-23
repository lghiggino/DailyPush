import { gradingStudents } from "../src/Dec-30";

describe("gradingStudents", () => {
    it("should return [75,67,40,33] for [73,67,38,33]", () => {
        expect(gradingStudents([73, 67, 38, 33])).toStrictEqual([75, 67, 40, 33])
    })
    it("should return B for A", () => {
        expect(gradingStudents([25,36,6,98,25,97,24,25,70,50,71,30,14,28,100,3,26,61,98,50,41,5,3,28,34,0]))
            .toStrictEqual([25,36,6,100,25,97,24,25,70,50,71,30,14,28,100,3,26,61,100,50,41,5,3,28,34,0])
    })
})

