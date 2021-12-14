import { decryptPassword } from '../Dec-14'

describe('hackerrank decrypt password', () => {
    it("should decrypt the frekin password", () => {
        expect(decryptPassword("h4ck3rr4nk")).toBe("43Ah*ck0rr0nk");
    });
})