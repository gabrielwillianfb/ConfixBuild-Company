import { useState } from "react";
import { Link } from "react-scroll";
import { navigations } from "../../source.js";
import "./Navbar.css";
import Logo from "../../components/Logo";
import ThemeToggle from "../../components/ThemeToggle";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import SocialHandles from "../../components/SocialHandles";
import useNavbar from "../../hook/useNavbar";

function Navbar() {
  const { showNavbar } = useNavbar();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className={`flex navbar ${showNavbar && "drop"}`}>
      <Logo />
      <SocialHandles />
      <div className={`flex navbar__links ${openSidebar && "visible"}`}>
        <button
          className="flex__center icon__container cancel__btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FaTimes />
        </button>
        {navigations.map((item, index) => (
          <Link
            to={item.to}
            className="nav__item"
            activeClass="active"
            smooth={true}
            offset={-300}
            spy={true}
            key={index}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex__center">
        <ThemeToggle />
        <button
          className="flex__center icon__container menu__btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FiMenu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
