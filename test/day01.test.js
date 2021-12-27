const { calcIncreasingMeasures, calcIncreasingMeasuresWindows } = require("../src/day01")

const measures = [
    170,
    176,
    179,
    180,
    195,
    197,
    203,
    211,
    212,
    200,
    225,
    227,
    235,
    250,
    263,
    262
]

const decreasingMeasures = [
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    0
]

describe("Testing individual measures", () => {
    it('calcIncreasingMeasures with regular values', () => {
        expect(calcIncreasingMeasures(measures)).toBe(13);
    });
    it('calcIncreasingMeasures with decreasing values', () => {
        expect(calcIncreasingMeasures(decreasingMeasures)).toBe(0);
    });
})

describe("Testing Measure Windows", () => {
    it('calcIncreasingMeasures with regular values ', () => {
        expect(calcIncreasingMeasuresWindows(measures)).toBe(12);
    });
    it('calcIncreasingMeasures with decreasing values ', () => {
        expect(calcIncreasingMeasuresWindows(measures)).toBe(0);
    });
})
