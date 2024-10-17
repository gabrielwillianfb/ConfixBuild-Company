import { MdOutlineAlternateEmail } from "react-icons/md";
import "./Contact.css";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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
        .fromTo(".form", { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(".contact__infos", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
    },
    { scope: container },
  );
  return (
    <section id="contact" ref={container}>
      <div className="container">
        <form className="form">
          <div className="form__top">
            <h3 className="sub__heading">Entre em Contato</h3>
            <p className="muted">
              Tem um projeto em mente ou precisa de conselhos de especialistas? Estamos aqui para
              ajudar! Entre em contato com nossa equipe para consultas personalizadas, perguntas ou
              para iniciar seu próximo grande projeto hoje mesmo.
            </p>
          </div>
          <div className="form__middle">
            <input type="text" placeholder="Nome completo" name="fullName" className="control" />
            <input type="email" placeholder="Email" name="email" className="control" />
            <input
              type="tel"
              placeholder="Número de celular"
              name="phoneNumber"
              className="control"
            />
            <textarea name="message" placeholder="Sua mensagem" className="control"></textarea>
          </div>
          <div className="form__bottom">
            <button className="btn primary">Enviar mensagem</button>
          </div>
        </form>
        <div className="contact__infos">
          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <MdOutlineAlternateEmail />
            </div>
            <div className="details">
              <h4>Envie um Email</h4>
              <p className="muted">Suporte rápido e confiável</p>
              <p>
                <a href="mailto:teste@gmail.com">confixbuild@testmail.com</a>
              </p>
            </div>
          </div>

          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <FaLocationCrosshairs />
            </div>
            <div className="details">
              <h4>Nosso Endereço</h4>
              <p className="muted">Venha visitar nosso escritório</p>
              <p>
                Avenida Paulista, 123<sup>°</sup> Andar, Bela Vista, São Paulo, SP, Brasil
              </p>
            </div>
          </div>

          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <FiPhoneCall />
            </div>
            <div className="details">
              <h4>Número de Celular</h4>
              <p className="muted">Ligue para nós</p>
              <p>+55 (12) 55555-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
