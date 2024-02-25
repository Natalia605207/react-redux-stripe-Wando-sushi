import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
import { Pagination, Autoplay } from 'swiper/modules';
import dataCarousel from '../../data/dataCarousel';

export const Carousel = () => {
    return (
        <div className='carousel-container'>
    <Swiper
        style={{
            "--swiper-pagination-bullet-vertical-gap": "10px"
          }}
        direction={'vertical'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Autoplay, Pagination]}
    >
        {dataCarousel.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{
                backgroundImage: `url(${slide.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
                <div className='slide-cover'>
            <h5 className='slide-text'>{ slide.text }</h5>
            <p className='slideText-smaller'>{ slide.textSmaller }</p>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
    );
}
