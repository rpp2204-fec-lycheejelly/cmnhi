import React from 'react';

let StyleSelect = ({styles, currentStyle, changeStyle}) => {
  return <div className='style-select'>
    <p> <b>Style ></b> {currentStyle.name}</p>
    <div className="style-container">
      {styles.map((style, i) => {
        return <div className="thumbnail-container">
                <img  className="style-thumbnail"
                      onClick={() => {changeStyle(style)}}
                      src={style.photos[0].thumbnail_url}
                      key={i}>
                </img>
                {style.style_id === currentStyle.style_id &&
                <span className="selected-check">&#10003;</span>}
               </div>

      })}
    </div>
  </div>
}

export default StyleSelect