import React from 'react';
import ReactDOM from 'react-dom';

// initial test
describe("Example test", function(){

  let plusOne = (a) => {
    return a + 1;
  }

  it("Should add 1 to the number", function(){
    expect(plusOne(6)).toBe(7);
  });
});




