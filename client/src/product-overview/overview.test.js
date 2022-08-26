import React from 'react';
import renderer from 'react-test-renderer';
import calculateAverage from './lib/calculateAvg.js';
import Product from './Product.jsx';

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
    2: 8,
    3: 9,
    4: 13,
    5: 26
  }
  let reviewData2 = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 50,
  }

  it("Should return reviews in specific format", function() {
    expect(calculateAverage(reviewData1).scores).toStrictEqual([1, 1, 1, 0.75, 0]);
    expect(calculateAverage(reviewData2).scores).toStrictEqual([1, 1, 1, 1, 1]);
  })

  it("Should calculate total reviews", function() {
    expect(calculateAverage(reviewData1).totalResponses).toBe(61);
    expect(calculateAverage(reviewData2).totalResponses).toBe(50);
  })
})

describe("Component Testing", function() {
  it("Should correctly render productInfo", function() {
    const tree = renderer.create(
      <Product />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})