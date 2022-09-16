import React from 'react';

let ZoomModal = ({photos, index, matcher, xCord, yCord}) => {
  if (matcher > 0) {
    index += matcher
  }

  return <div className="test-modal">


         <h1>{xCord} {yCord}</h1>


        <div className="zoom-modal" style={{top: yCord + 25, left: xCord + 25}}>
           {photos.length && <img src={photos[index].url}
                                  className="zoom-modal-img"
                                  alt="zoomed-image"
                                  style={{transformOrigin: `${(xCord * 2.5)}px ${yCord * 2.5}px`}}></img>}
         </div>


  </div>

}

export default ZoomModal;