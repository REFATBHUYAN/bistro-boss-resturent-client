import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../src/assets/home/slide1.jpg'
import slide2 from '../../../src/assets/home/slide2.jpg'
import slide3 from '../../../src/assets/home/slide3.jpg'
import slide4 from '../../../src/assets/home/slide4.jpg'
import slide5 from '../../../src/assets/home/slide5.jpg'

import { Pagination } from "swiper";
import SectionTitle from "../../Components/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle heading={'Order Online'} subHeading={'From 11.00am to 10.00pm'} ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-7"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <h1 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h1 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h1 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <h1 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
