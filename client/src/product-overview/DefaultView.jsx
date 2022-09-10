import React from 'react';
import leftArrow from '../assets/arrow-left.png';
import rightArrow from '../assets/arrow-right.png';

let DefaultView = ({carousel, photos, index, matcher, scrollRight, scrollLeft, changeView}) => {
  if (matcher > 0) {
    index += matcher
  }

  // console.log(matcher > 0)
  // console.log('MATCHER', matcher)
  // console.log('INDEX', index)

  return (
    <div className="image-default-view">
      {index !== 0 && <img src={leftArrow} alt="leftarrow" className="left-arrow" onClick={scrollLeft}></img>}
      {!carousel.length ? <></> : <img className="main-img" src={photos[index].url} onClick={changeView}></img>}
      {index !== photos.length - 1 && <img src={rightArrow} alt="rightarrow" className="right-arrow" onClick={scrollRight}></img>}
    </div>
  )
};

export default DefaultView