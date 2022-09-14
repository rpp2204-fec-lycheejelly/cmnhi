import React from 'react';
import leftArrow from '../assets/arrow-left.png';
import rightArrow from '../assets/arrow-right.png';
import fullScreen from '../assets/full-screen.png';

let ExpandedView = ({carousel, photos, index, matcher, scrollRight, scrollLeft, changeView, activateZoom, zoom, onEnter, onLeave, onMouseMove}) => {
  if (matcher > 0) {
    index += matcher
  }

  const onImgLoad = ({target: img}) => {
    const {offsetHeight, offsetWidth} = img;
    console.log('height', offsetHeight, 'width', offsetWidth);
  }

  return <div className='image-expanded-view'>
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
                     onLoad={onImgLoad}
                     onMouseEnter={zoom ? onEnter : () => {}}
                     onMouseLeave={zoom ? onLeave : () => {}}
                     onMouseMove={zoom ? onMouseMove : () => {}}></img>}

            {zoom
             ? <></>
             : index !== photos.length - 1
             ? <img src={rightArrow} alt="rightarrow" className="right-arrow" onClick={scrollRight}></img>
             : <></>}
         </div>
};

export default ExpandedView