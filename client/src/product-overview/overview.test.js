import calculateAverage from './lib/calculateAvg.js';

describe("Simple test suite", function() {
  let sum = (a, b) => {
    return a + b;
  }

  it("Should add 1 + 1", function() {
    expect(sum(1, 1)).toBe(2);
  })
})

describe("calculate Average", function() {
  let reviewData1 = {
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 25
  }
  let reviewData2 = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 50,
  }

  it("Should calculate average reviews", function() {
    expect(calculateAverage(reviewData1)).toBe(3.7);
    expect(calculateAverage(reviewData2)).toBe(5.0);
  })
})