function breakChocolate(n, m) {
  const total = n * m - 1
  return total > 0 ? total : 0;
}

describe("Tests", () => {
  it("test", () => {
    expect(breakChocolate(5, 5)).toBe(24)
    expect(breakChocolate(1, 1)).toBe(0)
  });
});