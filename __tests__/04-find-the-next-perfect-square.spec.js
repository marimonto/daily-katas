//Find the next perfect square!
function findNextSquare(sq) {
    const prev_integral = Math.sqrt(sq)
    const isPerfectSquare = prev_integral - Math.floor(prev_integral) === 0
    if (isPerfectSquare) {
        return Math.pow(prev_integral + 1, 2)
    }
    return -1

}

//console.log(findNextSquare(121));

describe("findNextSquare", function () {
    it("should return the next square for perfect squares", function () {
        expect(findNextSquare(121)).toBe(144)
        expect(findNextSquare(625)).toBe(676)
        expect(findNextSquare(319225)).toBe(320356)
        expect(findNextSquare(15241383936)).toBe(15241630849)
    });

    it("should return -1 for numbers which aren't perfect squares", function () {
        expect(findNextSquare(155)).toBe(-1)
        expect(findNextSquare(342786627)).toBe(-1)
    });
});