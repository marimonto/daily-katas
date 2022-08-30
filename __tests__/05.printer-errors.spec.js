function printerError(s) {
    letters = s.split("");
    let error = 0;
    letters.forEach(letter => letter > 'm' ? error++ : error)
    return `${error}/${letters.length}`
}
/* const s = "aaabbbbhaijjjm"
console.log(printerError(s));

const e = "aaaxbbbbyyhwawiwjjjwwm"
console.log(printerError(e));
 */
describe("printerError", function () {
    it("Basic tests", function () {
        var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        expect(printerError(s)).toBe("3/56")
    })
})