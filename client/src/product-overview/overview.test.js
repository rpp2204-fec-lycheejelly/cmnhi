describe("Simple test suite", function() {
  let sum = (a, b) => {
    return a + b;
  }

  it("Should add 1 + 1", function() {
    expect(sum(1, 1)).toBe(2);
  })
})