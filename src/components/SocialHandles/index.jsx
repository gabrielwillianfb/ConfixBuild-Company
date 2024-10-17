import "./SocialHandles.css";
import { socialHandles } from "../../source";

const SocialHandles = () => {
  return (
    <div className="flex social__handles">
      {socialHandles.map((handle, index) => (
        <a
          href={handle.link}
          target="_blank"
          className="flex__center icon__container"
          rel="noopener noreferrer"
          key={index}
        >
          <handle.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
