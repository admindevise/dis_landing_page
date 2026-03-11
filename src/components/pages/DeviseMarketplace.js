import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '@mui/material';
import MarketPlaceHero from '../organisms/MarketPlaceSection/MarketPlaceHero';
import MarketPlaceInvest from '../organisms/MarketPlaceSection/MarketPlaceInvest';
import MarketPlaceCell from '../organisms/MarketPlaceSection/MarketPlaceCell';
import MarketPlaceAccount from '../organisms/MarketPlaceSection/MarketPlaceAccount';
import MarketPlaceCTA from '../organisms/MarketPlaceSection/MarketPlaceCTA';
import DISHUBConnectionMarketplace from '../organisms/MarketPlaceSection/DISHUBConnectionMarketplace';
const DeviseMarketplace = () => {
    return (_jsxs(Box, { children: [_jsx(MarketPlaceHero, {}), _jsx(MarketPlaceInvest, {}), _jsx(MarketPlaceCell, {}), _jsx(MarketPlaceAccount, {}), _jsx(DISHUBConnectionMarketplace, {}), _jsx(MarketPlaceCTA, {})] }));
};
export default DeviseMarketplace;
