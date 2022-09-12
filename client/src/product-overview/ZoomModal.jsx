import React from 'react';

let ZoomModal = ({photos, index, xCord, yCord}) => {
  return <div className="zoom-modal" style={{top: yCord - 125, left: xCord + 5}} >
           {/* <h1>Coords: left: {xCord} top: {yCord} </h1> */}
           {photos.length && <img src={photos[index].url} alt="zoomed-image"></img>}
         </div>
}

export default ZoomModal;