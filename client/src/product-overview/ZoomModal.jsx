import React from 'react';

let ZoomModal = ({photos, index, matcher, xCord, yCord}) => {
  if (matcher > 0) {
    index += matcher
  }

  return <div className="zoom-modal" style={{top: yCord - 125, left: xCord + 5}}>
           {photos.length && <img src={photos[index].url} alt="zoomed-image" style={{transformOrigin: `${xCord * 2.5}px ${yCord * 2.5}px`}}></img>}
         </div>
}

export default ZoomModal;