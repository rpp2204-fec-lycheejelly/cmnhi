
describe("Example test", function(){

  let plusOne = (a) => {
    return a + 1;
  }

  // Individual tests can be run using the "it" or "test" methods, they are aliased and are equivalent
  it("Should add 1 to the number", function(){
    expect(plusOne(6)).toBe(7);
  });
});

// test whether my component is rendering on the screen
