import { sockMerchant } from "../../../src/2022/January/jan13-sock-merchant";

describe('sockMerchant', () => {
    it('should return 2 for [1,2,1,2,1,3,2]', () => { 
        expect(sockMerchant([1,2,1,2,1,3,2])).toBe(2)
    })
    it('should return 3 for [10, 20, 20, 10, 10, 30, 50, 10, 20]', () => { 
        expect(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3)
    })
})