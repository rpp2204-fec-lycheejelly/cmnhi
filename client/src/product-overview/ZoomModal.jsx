import React from 'react';

let ZoomModal = ({photos, index, matcher, xCord, yCord}) => {
  if (matcher > 0) {
    index += matcher
  }
  console.log(xCord)

  return <div className="zoom-modal" style={{top: yCord + 25, left: xCord + 25}}>
           {photos.length && <img src={photos[index].url} alt="zoomed-image" style={{transformOrigin: `${(xCord * 2.5) - 775}px ${yCord * 2.5}px`}}></img>}
         </div>
}

export default ZoomModal;