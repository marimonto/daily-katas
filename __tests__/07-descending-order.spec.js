function descendingOrder(n) {
  arrayNumbers = String(n).split("").sort((a, b) => b - a);
  return parseInt(arrayNumbers.join(""));
}
//console.log(descendingOrder(0));

/* function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
} */

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(descendingOrder(0)).toBe(0)
    expect(descendingOrder(1)).toBe(1)
    expect(descendingOrder(111)).toBe(111)
    expect(descendingOrder(15)).toBe(51)
    expect(descendingOrder(1021)).toBe(2110)
    expect(descendingOrder(123456789)).toBe(987654321)
  })
})