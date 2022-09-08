import React from 'react';
import upArrow from '../assets/arrow-up.png';
import downArrow from '../assets/arrow-down.png';
import carouselQueue from './lib/carouselQueue.js';

let Carousel = ({frontIdx, backIdx, index, length, carousel, changeImage, scrollUp, scrollDown}) => {
  console.log('carousel', carousel)
  return <div>
              {frontIdx !== 0 && <img src={upArrow} alt="up-arrow" className="up-arrow" onClick={scrollUp}></img>}
              <div className='style-carousel'>
                        {carousel.map((photo, i) => {
                          return <img className={index === i ? "carousel-selected" : ""}
                                      onClick={() => {changeImage(i)}}
                                      src={photo.thumbnail_url}
                                      alt="style-photo"
                                      key={i}></img>
                        })}
                    </div>
              {length <= 6
                ? <></>
                : backIdx !== length - 1
                ? <img src={downArrow} alt="down-arrow" className="down-arrow" onClick={scrollDown}></img>
                : <></>}
            </div>
}

export default Carousel;