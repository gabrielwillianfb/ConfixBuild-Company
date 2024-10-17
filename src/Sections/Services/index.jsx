import "./Services.css";
import { Link } from "react-scroll";
import { sketch } from "../../assets/index.js";
import { services } from "../../source.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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
          [".section__header sub__heading", ".section__header .description"],
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 },
        )
        .fromTo(".sction__header .btn", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".image__contain", { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(".service", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 });
    },
    { scope: container },
  );
  return (
    <section id="services" ref={container}>
      <div className="overlay">
        <div className="container">
          <div className="grid">
            <div className="section__header">
              <h2 className="sub__heading">Construindo Sonhos, Criando Realidade</h2>
              <p className="description">
                Na ConfixBuild, somos movidos pela paixão de criar projetos de construção
                excepcionais que resistem ao teste do tempo. Seja uma casa residencial de luxo, um
                espaço comercial de ponta ou uma instalação industrial, trazemos expertise, inovação
                e atenção aos detalhes para cada projeto.
              </p>
              <Link to="contact" smooth={true} className="btn primary">
                Fale Conosco
              </Link>
            </div>
            <div className="image__contain">
              <img
                src={sketch}
                alt="Casa em três dimensões com 1 rolo de desenho arquitetônico em cada lado."
              />
            </div>
          </div>
          <div className="grid services">
            {services.map((service, index) => (
              <div className="service" key={index}>
                <div className="flex top">
                  <div className="flex__center icon__container">
                    <service.icon />
                  </div>
                  <h4 className="title">{service.title}</h4>
                </div>
                <div className="middle">
                  <p className="description">{service.description}</p>
                </div>
                <div className="flex bottom">
                  <Link to="contact" smooth={true} offset={-50} className="btn">
                    Entre em Contato
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
