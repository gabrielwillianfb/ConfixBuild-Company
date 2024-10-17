import { useState, useRef } from "react";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./Achievement.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [experience, setExperience] = useState(0);
  const updateDate = () => {
    const timeout = setTimeout(() => {
      setProjects(700);
      setSatisfaction(98);
      setExperience(25);
    }, 2500);

    return () => clearTimeout(timeout);
  };

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
            onEnter: updateDate,
          },
        })
        .from(".achievement__card", { x: 100, opacity: 0, stagger: 0.5 });
    },
    { scope: container },
  );
  return (
    <div className="flex achievements" ref={container}>
      {/* card start */}
      <div className="achievement__card">
        <h3 className="title">Concluímos</h3>
        <div className="flex">
          <ReactOdometer value={projects} className="heading" />
          <h1 className="heading">+</h1>
        </div>
        <p>Projetos em diversos setores</p>
      </div>
      {/* card end */}

      {/* card start */}
      <div className="achievement__card">
        <h3 className="title">Alcançamos</h3>
        <div className="flex">
          <ReactOdometer value={satisfaction} className="heading" />
          <h1 className="heading">%</h1>
        </div>
        <p>Taxa de satisfação dos clientes</p>
      </div>
      {/* card end */}

      {/* card start */}
      <div className="achievement__card">
        <h3 className="title">Mais de</h3>
        <div className="flex">
          <ReactOdometer value={experience} className="heading" />
          <h1 className="heading">+</h1>
        </div>
        <p>Anos de operação</p>
      </div>
      {/* card end */}
    </div>
  );
};

export default Achievement;
