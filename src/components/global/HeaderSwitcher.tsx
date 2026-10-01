import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import HeaderDevise from "./HeaderDevise";
import Header from "./Header";
import HeaderValuo from "./HeaderValuo";

const HeaderSwitcher = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const wide = useMediaQuery("(min-width: 1080px)");

  const isDevise = location.pathname.startsWith("/devise");
  const isValuo = location.pathname.startsWith("/valuo");

  return isDevise ? (
    <HeaderDevise />
  ) : isValuo ? (
    <HeaderValuo />
  ) : (
    <Header
      headerPad="16px"
      wide={wide}
      menuOpen={menuOpen}
      activeSection="inicio"
      setMenuOpen={setMenuOpen}
    />
  );
};

export default HeaderSwitcher;
