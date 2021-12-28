import { decryptPassword } from '../src/Dec-14'

describe('hackerrank decrypt password', () => {
    it("should decrypt the freaakin password", () => {
        expect(decryptPassword("hAck3rr4nk")).toBe("43Ah*ck0rr0nk");
    });
    xit("should decrypt the freakin password [1]", () => {
        expect(decryptPassword("aP1pl5e")).toBe("51Pa*0Lp*0e");
    });
    xit("should decrypt the freakin password [2]", () => {
        expect(decryptPassword("poTaTO")).toBe("pTo*Ta*O");
    });
})