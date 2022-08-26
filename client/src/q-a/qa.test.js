// import React from 'react';
// import ReactDOM from 'react-dom';
// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';//wrong
// import QandA from './QandA.jsx';
// import QandAList from './QandAList.jsx';



import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QandAElement from './QandAElement.jsx';
import {data} from './mockData.js';

// Component test
// ref link: https://www.youtube.com/watch?v=ML5egqL3YFE
describe("Component test", () => {
  it("should render QandAList component", () => {
    render(<QandAElement qa={data[0]}/>);
    const qaElement = screen.getByTestId('631447');
    expect(qaElement).toBeInTheDocument();
    expect(qaElement).toHaveTextContent('At ducimus blanditiis mollitia dignissimos placeat.');
  })
})


// initial test
describe("Example test", function(){

  let plusOne = (a) => {
    return a + 1;
  }

  it("Should add 1 to the number", function(){
    expect(plusOne(6)).toBe(7);
  });
});

// test the test
// test('test', () => {
//   expect(true).toBe(true);
// })

// ensure the component renders to the DOM:
// test('renders QandAList component', () => {
//   const {container} = render(<QandAList qaList={data}/>);
//   const element = container.getElementByClassName('QandAList');
//   expect(element).toBeInTheDocument();
// })


// describe('Parent Component', () => {
//   it('renders Child component', () => {
//     const wrapper = shallow(<Parent store={store} />);
//     expect(wrapper.containsMatchingElement(<Child />)).toEqual(true);
//   });
// });

//enzyme doesn't work:
// describe('Parent Component-QandA', () => {
//   it('renders Child component-QandAList', () => {
//     const wrapper = shallow(<QandA />);
//     expect(wrapper.containsMatchingElement(<QandAList qaList={data}/>)).toEqual(true);
//   });
// });




