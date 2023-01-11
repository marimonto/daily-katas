var isSquare = function (n) {
    const sqrt = Math.sqrt(n)
    return (sqrt - Math.floor(sqrt)) === 0 ? true : false
}
/* function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n)); */

describe("isSquare", function () {
    it("should work for some examples", function () {
        expect(isSquare(-1)).toBe(false);
        expect(isSquare(0)).toBe(true);
        expect(isSquare(3)).toBe(false)
        expect(isSquare(4)).toBe(true);
        expect(isSquare(25)).toBe(true);
        expect(isSquare(26)).toBe(false);
    });
});