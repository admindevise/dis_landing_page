import { useLocation } from "react-router-dom";
import HeaderDevise from "../organisms/HeaderDevise";
import Header from "../organisms/Header";
import HeaderValuo from "../organisms/HeaderValuo";

const HeaderSwitcher = () => {
  const location = useLocation();

  const isDevise = location.pathname.startsWith("/devise");
  const isValuo = location.pathname.startsWith("/valuo");

  return isDevise ? (
    <HeaderDevise />
  ) : isValuo ? (
    <HeaderValuo />
  ) : (
    <Header />
  );
};

export default HeaderSwitcher;
