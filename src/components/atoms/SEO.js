import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
const SEO = ({ title, description, keywords, url, image, noIndex }) => {
    return (_jsxs(Helmet, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), keywords && _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { property: "og:site_name", content: "Dishub" }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:url", content: url }), _jsx("meta", { property: "og:image", content: image }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: title }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: image })] }));
};
export default SEO;
