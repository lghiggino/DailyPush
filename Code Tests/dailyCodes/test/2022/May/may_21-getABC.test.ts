import { getA, getB, getC, getABC } from '../../../src/2022/may/may_21-getABC'


describe("getABC", () => {
    it("should return ['A', 'B', 'C']", async () => {
        const ABC = await getABC()
        expect(ABC).toEqual(['A', 'B', 'C'])
    })
})