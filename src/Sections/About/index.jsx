import "./About.css";
import { about } from "../../assets/index.js";
import { keypoints } from "../../source.js";
import { FaCheck } from "react-icons/fa";
import Achievement from "../../components/Achievement";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
        .fromTo(".about__image", { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(
          [".title", ".section__header .description", ".sub__heading", ".keypoint"],
          { opacity: 0 },
          { opacity: 1, stagger: 0.5 },
        );
    },
    { scope: container },
  );
  return (
    <section id="about" ref={container}>
      <div className="container">
        <div className="grid">
          <div className="about__image">
            <img src={about} alt="About image" />
          </div>
          <div className="section__header">
            <h3 className="title primary">Sobre nós</h3>
            <h2 className="sub__title">Criando Espaços. Construindo Futuros.</h2>
            <p className="description">
              Na ConfixBuild, transformamos visões em realidade com precisão e inovação.
              Especializados em construção residencial, comercial e industrial, trazemos anos de
              expertise e um compromisso com a excelência em cada projeto. Nossa equipe é dedicada a
              entregar resultados que inspiram, funcionam e perduram.
            </p>
            <h3 className="sub__title">O que defendemos</h3>
            {keypoints.map((keypoint, index) => (
              <div className="flex keypoint" key={index}>
                <div className="flex__center primary icon__container">
                  <FaCheck />
                </div>
                <div>
                  <h4>{keypoint.title}</h4>
                  <p className="muted">{keypoint.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="achieve">
          <div className="overlay grid">
            <div className="section__header">
              <h3 className="title primary">Nossas Conquistas</h3>
              <h2 className="sub__heading">Transformando visões em realidade</h2>
            </div>
            <div>
              <Achievement />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
