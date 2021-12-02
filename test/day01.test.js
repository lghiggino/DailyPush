const { calcIncreasingMeasures, calcIncreasingMeasuresWindows } = require("../day01")

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

test('calcIncreasingMeasures ', () => {
    expect(calcIncreasingMeasures(measures)).toBe(13);
});

test('calcIncreasingMeasuresWindows ', () => {
    expect(calcIncreasingMeasuresWindows(measures)).toBe(3);
});