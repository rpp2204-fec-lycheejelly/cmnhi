import React from 'react';
import leftArrow from '../assets/arrow-left.png';
import rightArrow from '../assets/arrow-right.png';

let DefaultView = ({photos, index, onRightArrowClick, onLeftArrowClick}) => {
  return (
    <div className="image-default-view">
      {index !== 0 && <img src={leftArrow} alt="leftarrow" className="left-arrow" onClick={onLeftArrowClick}></img>}
      {!photos.length ? <></> : <img className="main-img" src={photos[index].url}></img>}
      {index !== photos.length - 1 && <img src={rightArrow} alt="rightarrow" className="right-arrow" onClick={onRightArrowClick}></img>}
    </div>
  )
};

export default DefaultView