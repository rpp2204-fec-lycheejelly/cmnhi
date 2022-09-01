import React from 'react';

let DefaultView = ({photos, index, onRightArrowClick, onLeftArrowClick}) => {
  return (
    <div className="image-default-view">
      {index !== 0 && <p className="left-arrow" onClick={onLeftArrowClick}> &lt; </p>}
      {!photos.length ? <></> : <img src={photos[index].url}></img>}
      {index !== photos.length - 1 && <p className="right-arrow" onClick={onRightArrowClick}> &gt;</p>}
    </div>
  )
};

export default DefaultView