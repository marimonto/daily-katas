function getSum(a, b) {
    if (a === b) {
        return a
    }
    const start = a < b ? a : b
    const stop = a < b ? b : a
    let newArray = []
    if (start < 0 && stop < 0) {
        newArray = range((start - stop) * -1, start)
    }
    if (start < 0 && stop >= 0) {
        const length = (start * -1) + stop
        newArray = range(length, start)
    }
    if (start >= 0 && stop >= 0) {
        newArray = range((stop - start), start)
    }
    return newArray.length > 0 ? newArray.reduce((total, actual) => total + actual) : 0
}

const range = (length, start) => Array.from({ length: length + 1 }, (_, i) => start + i);

// with math
/* const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  } */

/* console.log(getSum(0, -1));
console.log(getSum(3, 1));
console.log(getSum(-1, 1));
console.log(getSum(-81, -542));
console.log(getSum(-1, -3));
 */



describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        expect(getSum(0, -1)).toBe(-1)
        expect(getSum(0, 1)).toBe(1)
        expect(getSum(-81, -542)).toBe(-143913)
    })
});