describe('first test', () => {
  var sum = (a, b) => {
    return a + b;
  }
  it('should return two numbers added together', function() {
    expect(sum(1, 2)).toBe(3);
  })
})