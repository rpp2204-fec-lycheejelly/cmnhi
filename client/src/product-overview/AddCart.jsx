import React from 'react';

let AddCart = (props) => {
    return <div>
      <select>
        <option>Select Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button>Add To Cart</button>
    </div>
}

export default AddCart