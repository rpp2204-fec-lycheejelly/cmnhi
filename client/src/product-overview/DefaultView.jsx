import React from 'react';
import leftArrow from '../assets/arrow-left.png';
import rightArrow from '../assets/arrow-right.png';

let DefaultView = ({carousel, photos, index, scrollRight, scrollLeft}) => {
  return (
    <div className="image-default-view">
      {index !== 0 && <img src={leftArrow} alt="leftarrow" className="left-arrow" onClick={scrollLeft}></img>}
      {!carousel.length ? <></> : <img className="main-img" src={carousel[index].url}></img>}
      {index !== 6 && <img src={rightArrow} alt="rightarrow" className="right-arrow" onClick={scrollRight}></img>}
    </div>
  )
};

export default DefaultView