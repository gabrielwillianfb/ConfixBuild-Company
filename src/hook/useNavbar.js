import { useState, useEffect } from "react";

const useNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    if (window.scrollY > 150) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbar);
    return () => window.removeEventListener("scroll", toggleNavbar);
  }, []);

  return { showNavbar };
};

export default useNavbar;
