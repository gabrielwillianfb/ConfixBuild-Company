import "./Header.css";
import { FaArrowTurnDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import { hero } from "../../assets/index.js";
import SocialHandles from "../../components/SocialHandles";
import WhyChooseUs from "../../components/WhyChooseUs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Header = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({ delay: 0.5 })
        .fromTo(
          [".heading", ".description"],
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 },
        )
        .fromTo(
          [".social__handles", ".btn"],
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 },
        )
        .fromTo(".image__container", { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(
          [".why__choose__us", ".why__item"],
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 },
        );
    },
    { scope: container },
  );
  return (
    <section id="header" className="blur__effect" ref={container}>
      <div className="overlay">
        <div className="container">
          <div className="grid">
            <div className="content">
              <h1 className="heading">Construindo tudo o que você precisa</h1>
              <p className="description">
              Oferecemos soluções completas de construção, garantindo qualidade e confiabilidade do
              início ao fim.
              </p>
              <SocialHandles />
              <Link to="contact" smooth={true} className="btn primary">
              Solicitar um orçamento <FaArrowTurnDown />
              </Link>
            </div>
            <div className="image__contain">
              <img src={hero} alt="Trator para escavadeira" />
            </div>
          </div>
          <WhyChooseUs />
        </div>
      </div>
    </section>
  );
};

export default Header;
