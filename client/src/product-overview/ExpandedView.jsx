import React from 'react';
import leftArrow from '../assets/arrow-left.png';
import rightArrow from '../assets/arrow-right.png';
import fullScreen from '../assets/full-screen.png';

let ExpandedView = ({carousel, photos, index, matcher, x, y, scrollRight, scrollLeft, changeView, activateZoom, zoom, onMouseMove}) => {
  if (matcher > 0) {
    index += matcher
  }

  return <div className='image-expanded-view' onMouseMove={onMouseMove}>
            {!zoom && <img src={fullScreen} className="full-screen-btn" alt="full-screen-btn" onClick={changeView}></img>}

            {zoom
             ? <></>
             : index !== 0
             ? <img src={leftArrow} alt="leftarrow" className="left-arrow" onClick={scrollLeft}></img>
             : <></>}

            {!carousel.length
              ? <></>
              : <img className="main-img expanded"
                     src={photos[index].url}
                     onClick={activateZoom}
                     style={zoom ? {transform: `scale(2.5)`, transformOrigin: `${x}px ${y - 150}px`} : {}}>
                    </img>}

            {zoom
             ? <></>
             : index !== photos.length - 1
             ? <img src={rightArrow} alt="rightarrow" className="right-arrow" onClick={scrollRight}></img>
             : <></>}
         </div>
};

export default ExpandedView