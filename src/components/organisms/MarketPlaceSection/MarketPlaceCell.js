import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
const MarketPlaceCell = () => {
    return (_jsx(Box, { sx: {
            background: "#261E60",
            backgroundImage: "url('/images/backgrounds/CubosFondo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 3, md: 10 },
            py: { xs: 6, md: 0 },
        }, children: _jsxs(Box, { sx: {
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                maxWidth: "1400px",
            }, children: [_jsxs(Box, { sx: { maxWidth: "550px", color: "white" }, children: [_jsxs(Typography, { sx: {
                                fontSize: { xs: "32px", md: "48px" },
                                fontWeight: 700,
                                lineHeight: 1.1,
                            }, children: ["Experiencia m\u00F3vil ", _jsx("br", {}), "para ", _jsx("span", { style: { color: "#B9DE2C" }, children: "tus inversionistas" })] }), _jsx(Typography, { sx: {
                                mt: 3,
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                opacity: 0.9,
                            }, children: "Ofrece a tus inversionistas una app m\u00F3vil completa donde pueden consultar rendimientos, recibir notificaciones, revisar documentos y realizar operaciones desde su tel\u00E9fono. Una experiencia digital intuitiva y segura que aumenta la satisfacci\u00F3n y retenci\u00F3n de tus clientes." })] }), _jsx(Box, { component: "img", src: "/images/backgrounds/MarketPlaceCell.png", alt: "mockup", sx: {
                        width: { xs: "260px", md: "360px" },
                        mt: { xs: 5, md: 0 },
                        filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.4))",
                    } })] }) }));
};
export default MarketPlaceCell;
