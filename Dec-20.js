function Rectangle(a, b) {
    const length = a
    const width = b
    const perimeter = 2 * (a + b)
    const area = a * b
    
    return {
        length,
        width,
        perimeter,
        area
    }
}