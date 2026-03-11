import { jsx as _jsx } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import HeaderDevise from "../organisms/HeaderDevise";
import Header from "../organisms/Header";
import HeaderValuo from "../organisms/HeaderValuo";
const HeaderSwitcher = () => {
    const location = useLocation();
    const isDevise = location.pathname.startsWith("/devise");
    const isValuo = location.pathname.startsWith("/valuo");
    return isDevise ? (_jsx(HeaderDevise, {})) : isValuo ? (_jsx(HeaderValuo, {})) : (_jsx(Header, {}));
};
export default HeaderSwitcher;
