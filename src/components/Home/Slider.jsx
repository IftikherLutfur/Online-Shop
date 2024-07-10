
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow,Pagination } from 'swiper/modules';


const Slider = () => {
    return (
        <div>
            <Swiper
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={'auto'}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination]}
       className="mySwiper"
      >
        <SwiperSlide><img className='h-[550px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws_SDTZe5kzk2L7bDFXCHdOuyD7e4ZJDDZg&s" alt="" /></SwiperSlide>

        <SwiperSlide><img className='h-[550px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8scVN5OZYdI3SONKCjOe4YtltantevnYD6g&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[550px] w-full' src="https://static.vecteezy.com/system/resources/thumbnails/006/992/929/small_2x/cart-with-shopping-bag-and-gift-box-for-online-shopping-free-vector.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[550px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws_SDTZe5kzk2L7bDFXCHdOuyD7e4ZJDDZg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[550px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws_SDTZe5kzk2L7bDFXCHdOuyD7e4ZJDDZg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[550px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws_SDTZe5kzk2L7bDFXCHdOuyD7e4ZJDDZg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[550px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws_SDTZe5kzk2L7bDFXCHdOuyD7e4ZJDDZg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[550px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws_SDTZe5kzk2L7bDFXCHdOuyD7e4ZJDDZg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[550px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws_SDTZe5kzk2L7bDFXCHdOuyD7e4ZJDDZg&s" alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;