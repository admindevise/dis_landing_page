import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Button, Grid, Stack, Snackbar, Alert } from "@mui/material";
import { Gift, Home, Briefcase, Building } from "lucide-react";
import { useState } from "react";
const ValuoPricing = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleClick = () => {
        setOpenSnackbar(true);
    };
    const plans = [
        {
            icon: _jsx(Gift, { size: 28 }),
            name: "Gratuito",
            price: "$0",
            period: "COP/mes",
            description: "Para explorar la plataforma",
            features: [
                "1 avalúo básico al mes",
                "Valor comercial estimado",
                "Precio por m² de referencia",
                "Comparables de mercado",
                "Reporte PDF simple",
                { text: "Solo propiedades residenciales", disabled: true },
            ],
            buttonText: "Empezar gratis",
            buttonVariant: "outlined",
            iconColor: "#66C7FF",
            borderColor: "rgba(102,199,255,0.2)",
        },
        {
            icon: _jsx(Home, { size: 28 }),
            name: "Básico",
            price: "$49.900",
            period: "COP/mes",
            description: "Para propietarios y compradores",
            highlight: "Todo lo de Gratuito +",
            features: [
                "10 avalúos completos al mes",
                "Estimación de renta mensual",
                "Tendencias de valorización (6 meses)",
                "Dashboard de zona básico",
                "Reporte PDF profesional",
                "Soporte por email",
            ],
            buttonText: "Comenzar ahora",
            buttonVariant: "contained",
            iconColor: "#4C85C7",
            borderColor: "rgba(76,133,199,0.4)",
            popular: true,
        },
        {
            icon: _jsx(Briefcase, { size: 28 }),
            name: "Profesional",
            price: "$189.900",
            period: "COP/mes",
            description: "Para inversionistas y corredores",
            highlight: "Todo lo de Básico +",
            features: [
                "50 avalúos completos al mes",
                "Avalúos comerciales",
                "Análisis comparativo ilimitado",
                "Inteligencia de mercado completa",
                "Proyecciones 1, 3 y 5 años",
                "Certificado de avalúo",
                "Soporte prioritario",
            ],
            buttonText: "Contratar ahora",
            buttonVariant: "contained",
            iconColor: "#B084CC",
            borderColor: "rgba(176,132,204,0.4)",
        },
        {
            icon: _jsx(Building, { size: 28 }),
            name: "Empresarial",
            price: "Contactar",
            period: "",
            description: "Para empresas e instituciones",
            highlight: "Todo lo de Profesional +",
            features: [
                "Avalúos ilimitados",
                "Análisis de portafolios",
                "Modelamiento financiero (TIR, VPN)",
                "Reportes personalizados con branding",
                "Multi-usuarios (hasta 5 cuentas)",
                "Account manager dedicado",
                "Soporte 24/7",
            ],
            buttonText: "Contactar ventas",
            buttonVariant: "outlined",
            iconColor: "#F59E0B",
            borderColor: "rgba(245,158,11,0.3)",
        },
    ];
    return (_jsxs(Box, { sx: {
            background: `
          radial-gradient(circle at 30% 20%, hsla(212, 48%, 55%, 0.15), transparent 50%),
          radial-gradient(circle at 70% 80%, hsla(212, 48%, 55%, 0.12), transparent 50%),
          hsl(210, 27%, 12%)
        `,
            py: 12,
        }, children: [_jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { textAlign: "center", mb: 8 }, children: [_jsxs(Typography, { variant: "h3", fontWeight: 700, sx: {
                                    mb: 2,
                                    color: "hsl(216, 33%, 97%)",
                                    fontSize: { xs: "2rem", md: "2.6rem" },
                                }, children: [_jsx(Box, { component: "span", sx: { color: "hsl(212, 48%, 55%)" }, children: "Un plan" }), " ", "para cada necesidad"] }), _jsx(Typography, { variant: "body1", sx: {
                                    color: "rgba(255,255,255,0.7)",
                                    maxWidth: 600,
                                    mx: "auto",
                                }, children: "Desde exploradores hasta profesionales. Elige el plan que mejor se adapte a tus objetivos." })] }), _jsx(Grid, { container: true, spacing: 3, children: plans.map((plan, index) => (_jsx(Grid, { size: { xs: 12, md: 6, lg: 3 }, children: _jsxs(Box, { sx: {
                                    position: "relative",
                                    height: "100%",
                                    borderRadius: "24px",
                                    p: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    border: `1px solid ${plan.borderColor}`,
                                    transition: "all 0.3s ease",
                                    ...(plan.popular && {
                                        border: `2px solid ${plan.iconColor}`,
                                        boxShadow: `0 0 30px ${plan.borderColor}`,
                                    }),
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: `0 12px 40px ${plan.borderColor}`,
                                    },
                                }, children: [plan.popular && (_jsx(Box, { sx: {
                                            position: "absolute",
                                            top: -12,
                                            right: 20,
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: "12px",
                                            bgcolor: plan.iconColor,
                                            color: "#fff",
                                            fontSize: "0.75rem",
                                            fontWeight: 700,
                                        }, children: "Popular" })), _jsx(Box, { sx: {
                                            width: 56,
                                            height: 56,
                                            borderRadius: "16px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            bgcolor: `${plan.iconColor}20`,
                                            color: plan.iconColor,
                                            mb: 2,
                                        }, children: plan.icon }), _jsx(Typography, { variant: "h6", sx: { color: "hsl(216, 33%, 97%)", fontWeight: 700, mb: 0.5 }, children: plan.name }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { component: "span", sx: {
                                                    fontSize: "2.5rem",
                                                    fontWeight: 800,
                                                    color: "hsl(216, 33%, 97%)",
                                                }, children: plan.price }), plan.period && (_jsx(Typography, { component: "span", sx: {
                                                    fontSize: "0.9rem",
                                                    color: "rgba(255,255,255,0.6)",
                                                    ml: 1,
                                                }, children: plan.period }))] }), _jsx(Typography, { variant: "body2", sx: { color: "rgba(255,255,255,0.7)", mb: 3 }, children: plan.description }), plan.highlight && (_jsx(Typography, { variant: "body2", sx: {
                                            color: plan.iconColor,
                                            fontWeight: 600,
                                            mb: 2,
                                        }, children: plan.highlight })), _jsx(Stack, { spacing: 1.5, sx: { mb: 4, flex: 1 }, children: plan.features.map((feature, i) => (_jsxs(Box, { sx: { display: "flex", alignItems: "flex-start", gap: 1 }, children: [_jsx(Box, { sx: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        bgcolor: typeof feature === "object" && feature.disabled
                                                            ? "rgba(255,255,255,0.3)"
                                                            : plan.iconColor,
                                                        mt: 0.8,
                                                        flexShrink: 0,
                                                    } }), _jsx(Typography, { variant: "body2", sx: {
                                                        color: typeof feature === "object" && feature.disabled
                                                            ? "rgba(255,255,255,0.4)"
                                                            : "rgba(255,255,255,0.8)",
                                                        fontSize: "0.875rem",
                                                    }, children: typeof feature === "string" ? feature : feature.text })] }, i))) }), _jsx(Button, { fullWidth: true, variant: plan.buttonVariant, onClick: handleClick, sx: {
                                            py: 1.5,
                                            borderRadius: "12px",
                                            textTransform: "none",
                                            fontWeight: 600,
                                            fontSize: "0.95rem",
                                            ...(plan.buttonVariant === "contained"
                                                ? {
                                                    bgcolor: plan.iconColor,
                                                    color: "#fff",
                                                    "&:hover": {
                                                        bgcolor: plan.iconColor,
                                                        opacity: 0.9,
                                                    },
                                                }
                                                : {
                                                    borderColor: plan.iconColor,
                                                    color: plan.iconColor,
                                                    "&:hover": {
                                                        borderColor: plan.iconColor,
                                                        bgcolor: `${plan.iconColor}10`,
                                                    },
                                                }),
                                        }, children: plan.buttonText })] }) }, index))) }), _jsx(Typography, { variant: "body2", sx: {
                            textAlign: "center",
                            color: "rgba(255,255,255,0.5)",
                            mt: 6,
                        }, children: "Todos los planes incluyen acceso a la plataforma web. Precios en pesos colombianos (COP)." })] }), _jsx(Snackbar, { open: openSnackbar, autoHideDuration: 3000, onClose: () => setOpenSnackbar(false), anchorOrigin: { vertical: "bottom", horizontal: "center" }, children: _jsx(Alert, { onClose: () => setOpenSnackbar(false), severity: "info", sx: {
                        bgcolor: "#0B2A4A",
                        color: "#fff",
                        border: "1px solid rgba(102,199,255,0.3)",
                        "& .MuiAlert-icon": {
                            color: "#66C7FF",
                        },
                    }, children: "Pr\u00F3ximamente" }) })] }));
};
export default ValuoPricing;
