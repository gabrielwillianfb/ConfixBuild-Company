import "./Testimonial.css";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../source";
import { FaStar } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "20%% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          [".title", ".sub__heading", ".section__header .description", ".btn"],
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 },
        )
        .fromTo(".testimonial__card", { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 });
    },
    { scope: container },
  );
  return (
    <section id="testimonials" ref={container}>
      <div className="container">
        <div className="section__header">
          <h3 className="title">Depoimentos de Clientes</h3>
          <h3 className="sub__heading">Construindo com Excelência</h3>
          <p className="description">
          Conheça os especialistas que trazem excelência e inovação para cada projeto. 
          Apresente-se à nossa equipe dedicada que torna sua visão uma realidade.
          </p>
          <Link to="contact" smooth={true} className="btn primary">
            Fale conosco <FaArrowRight />
          </Link>
        </div>
        <div>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            autoplay={true}
            speed={3000}
            spaceBetween={15}
            modules={[Autoplay]}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
            }}
            className="testimonials"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide className="testimonial__card" key={index}>
                <div className="flex top">
                  <div className="profile">
                    <img src={item.image} alt="profile image" />
                  </div>
                  <div className="details">
                    <h4>{item.name}</h4>
                    <div className="flex star__container">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <p className="muted">{item.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
