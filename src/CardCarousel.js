// src/CardCarousel.js
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';

import 'swiper/swiper-bundle.css';

import './CardCarousel.css';

import image1 from './images/Card1.jpg';
import image2 from './images/Card2.jpg';
import image3 from './images/Card3.jpg';
import image4 from './images/Card4.jpg';
import image5 from './images/Card5.jpg';
import image6 from './images/Card6.jpg';
import image7 from './images/Card7.jpg';
import image8 from './images/Card8.jpg';
import image9 from './images/Card9.jpg';
import image10 from './images/Card10.jpg';
import image11 from './images/Card11.jpg';
import image12 from './images/Card12.jpg';
import image13 from './images/Card13.jpg';
import image14 from './images/Card14.jpg';
import image15 from './images/Card15.jpg';
import image16 from './images/Card16.jpg';
import image17 from './images/Card17.jpg';
import image18 from './images/Card18.jpg';
import image19 from './images/Card19.jpg';



const images = [image1, image2,image3, image4, image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17, image18, image19 ];

const slideData = [
  {
    mainText: 'Adhish Singla',
    subText: 'B.Tech. Hons. + MS',
  },
  {
    mainText: 'Main Text 2',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 3',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 4',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 5',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 6',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 7',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 8',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 9',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 10',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 11',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 12',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 13',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 14',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 15',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 16',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 17',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 18',
    subText: 'Subtext 2',
  },
  {
    mainText: 'Main Text 19',
    subText: 'Subtext 2',
  },
  
];

const CardCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 150,
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slideActiveClass: 'active',
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      pagination: {
        el: '.pagination',
        clickable: true,
      },
      parallax: true,
      autoplay: {
        enabled: true,
        delay: 4000,
      },
    });
  }, []);

  const totalSlides = 19;

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <img src={image} alt={`Image ${index + 1}`} />
            <div className="text">
              <div className="main-text">{slideData[index].mainText}</div>
              <div className="sub-text">{slideData[index].subText}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination"></div>
      <div className="prev" onClick={handlePrev}>
        <svg width="10" height="15" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.2625 13.2375L3.5375 7.5L9.2625 1.7625L7.5 0L0 7.5L7.5 15L9.2625 13.2375Z" fill="#A99260" />
        </svg>
      </div>
      <div className="next" onClick={handleNext}>
        <svg width="10" height="15" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.737305 13.2375L6.4623 7.5L0.737305 1.7625L2.4998 0L9.9998 7.5L2.4998 15L0.737305 13.2375Z" fill="#A99260" />
        </svg>
      </div>
    </div>
  );
};

export default CardCarousel;


