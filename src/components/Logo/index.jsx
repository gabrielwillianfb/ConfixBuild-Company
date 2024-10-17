import "./Logo.css";
import { logo } from "../../assets"

function Logo() {
  return (
    <div className="flex__center logo__container">
      <div className="flex__center icon__container">
        <img src={logo} alt="" />
      </div>
      <h2 className="title">
        Confix<span className="primary">Build</span>
      </h2>
    </div>
  );
}

export default Logo;