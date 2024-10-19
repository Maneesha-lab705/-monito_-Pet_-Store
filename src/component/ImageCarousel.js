import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import image from '../img/customer04.png'

import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { useState } from 'react';

const ImageCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    image,
    image,
    image,
    image,
    image, 
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[Navigation, Pagination, Thumbs]}
        className="main-swiper"
      >
        {images && images.length > 0 && images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Dog ${index}`} className="w-full h-[500px] object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Images */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[Navigation, Pagination, Thumbs]}
        className="thumb-swiper mt-4"
      >
        {images && images.length > 0 && images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Thumbnail ${index}`} className="w-24 h-24 object-cover rounded-lg cursor-pointer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
