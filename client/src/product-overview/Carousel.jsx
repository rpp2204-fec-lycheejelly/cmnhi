import React from 'react';
import upArrow from '../assets/arrow-up.png';
import downArrow from '../assets/arrow-down.png';
import carouselQueue from './lib/carouselQueue.js';

let Carousel = ({index, photos, changeImage, scrollLeft, scrollRight}) => {
    return <div>
            {index !== 0 && <img src={upArrow} alt="up-arrow" className="up-arrow" onClick={scrollLeft}></img>}
            <div className='style-carousel'>
                      {photos.map((photo, i) => {
                        return <img className={index === i ? "carousel-selected" : ""}
                                    onClick={() => {changeImage(i)}}
                                    src={photo.thumbnail_url}
                                    alt="style-photo"
                                    key={i}></img>
                      })}
                  </div>
            {index !== photos.length - 1 && <img src={downArrow} alt="down-arrow" className="down-arrow" onClick={scrollRight}></img>}
          </div>
}

export default Carousel;