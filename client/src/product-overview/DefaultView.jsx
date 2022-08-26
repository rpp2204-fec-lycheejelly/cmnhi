import React from 'react';

let DefaultView = ({style}) => {
  return (
    <div className="image-default-view">
      {!style.photos ? <></> : <img src={style.photos[0].thumbnail_url}></img> }
    </div>
  )
};

export default DefaultView