
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
        <SwiperSlide><img className='h-[500px] w-full' src="https://media.gettyimages.com/id/2159274388/photo/east-rutherford-new-jersey-lionel-messi-of-argentina-gestures-during-the-conmebol-copa.jpg?s=612x612&w=0&k=20&c=rBQbQs4cHXDBy_pFBwC5JB598FjvEg-7laK5jJmc6jc=" alt="" /></SwiperSlide>

        <SwiperSlide><img className='h-[500px] w-full' src="https://blackbud.com.bd/wp-content/uploads/2022/08/argentina-3-star-jersey-player-edition-scaled.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://justwomenssports.com/wp-content/uploads/2024/03/GettyImages-1471131186-scaled-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://www.jerseybdclub.com/wp-content/uploads/2022/07/mancity-home-jersey-1-1200x900.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://www.fcbarcelona.com/photo-resources/2023/06/14/57549726-903f-46d1-b326-73188c0791e4/mini__GP21415-Mejorado-NR.jpg?width=3200&height=2000" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2Fdesktop-3.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://media.vov.vn/sites/default/files/styles/large/public/2023-05/ronaldo_al_nassr.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://static.euronews.com/articles/stories/07/83/39/24/900x506_cmsv2_782c8ce1-3b53-5664-94ed-52269dbc2dd4-7833924.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://static.sport.optus.com.au/resources/static/1fc13c88-bd28-48ae-bed6-09daac6fdf32_espscoalvaromoratagettyimages-1720720724.jpeg" alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;