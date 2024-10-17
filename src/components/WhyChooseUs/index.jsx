import "./WhyChooseUs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { whyChooseUs } from "../../source";

const WhyChooseUs = () => {
  return (
    <div className="why__choose__us">
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        spaceBetween={15}
        speed={2500}
        modules={[Autoplay]}
        breakpoints={{
          350: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
      >
        {whyChooseUs.map((why, index) => (
          <SwiperSlide className="flex why__item" key={index}>
            <div className="flex__center primary icon__container">
              <why.icon />
            </div>
            <div className="details">
              <h4 className="title">{why.title}</h4>
              <p className="muted">{why.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyChooseUs;
