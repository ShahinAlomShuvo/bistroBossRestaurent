import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import order01 from "../../assets/Images/home/slide1.jpg";
import order02 from "../../assets/Images/home/slide2.jpg";
import order03 from "../../assets/Images/home/slide3.jpg";
import order04 from "../../assets/Images/home/slide4.jpg";
import order05 from "../../assets/Images/home/slide5.jpg";

const OnlineOrder = () => {
  return (
    <div className='container mx-auto px-20'>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide className='relative'>
          <img src={order01} />
          <h3 className='uppercase text-white text-2xl font-bold absolute bottom-12 left-0 right-0 text-center'>
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={order02} />
          <h3 className='uppercase text-white text-2xl font-bold absolute bottom-12 left-0 right-0 text-center'>
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={order03} />
          <h3 className='uppercase text-white text-2xl font-bold absolute bottom-12 left-0 right-0 text-center'>
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={order04} />
          <h3 className='uppercase text-white text-2xl font-bold absolute bottom-12 left-0 right-0 text-center'>
            Dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={order05} />
          <h3 className='uppercase text-white text-2xl font-bold absolute bottom-12 left-0 right-0 text-center'>
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnlineOrder;
