import "./Footer.css";
import Logo from "../../components/Logo";
import { footer } from "../../source";

const Footer = () => {
  return (
    <section id="footer">
      <div className="overlay">
        <div className="container">
          <div className="column">
            <Logo />
            <p>
              Nossa missão é construir espaços duradouros que inspirem e elevem, combinando
              artesanato de qualidade com soluções inovadoras para atender às necessidades em
              constante evolução de nossos clientes e comunidades.
            </p>
          </div>
          {footer.map((foot, index) => (
            <div className="column" key={index}>
              <h4 className="title">{foot.title}</h4>
              {foot.routes.map((route, index) => (
                <a href={route.url} className="route" key={index} target="_blank" rel="noreferrer">
                  {route.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>Copyright &copy; ConfixBuild - Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
