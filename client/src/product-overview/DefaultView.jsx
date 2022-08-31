import React from 'react';

let DefaultView = ({style, index}) => {
  return (
    <div className="image-default-view">
      {!style.photos ? <></> : <img src={style.photos[index].url}></img> }
    </div>
  )
};

export default DefaultView