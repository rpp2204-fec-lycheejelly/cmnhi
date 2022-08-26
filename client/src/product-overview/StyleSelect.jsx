import React from 'react';

let StyleSelect = ({styles, currentStyle}) => {
  return <div className='style-select'>
    <p> <b>Style ></b> {currentStyle.name}</p>
    <div className="style-container">
      {styles.map((style, i) => {
        return <img className="style-thumbnail" src={style.photos[0].thumbnail_url}></img>
      })}
    </div>
  </div>
}

export default StyleSelect