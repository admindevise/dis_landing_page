import { Box } from '@mui/material'
import MarketPlaceHero from '../organisms/MarketPlaceSection/MarketPlaceHero'
import MarketPlaceInvest from '../organisms/MarketPlaceSection/MarketPlaceInvest'
import MarketPlaceCell from '../organisms/MarketPlaceSection/MarketPlaceCell'
import MarketPlaceAccount from '../organisms/MarketPlaceSection/MarketPlaceAccount'
import MarketPlaceCTA from '../organisms/MarketPlaceSection/MarketPlaceCTA'
import DISHUBConnectionMarketplace from '../organisms/MarketPlaceSection/DISHUBConnectionMarketplace'

const DeviseMarketplace = () => {
  return (
    <Box>
      <MarketPlaceHero />
      <MarketPlaceInvest />
      <MarketPlaceCell />
      <MarketPlaceAccount />
      <DISHUBConnectionMarketplace />
      <MarketPlaceCTA/>
    </Box>
  )
}

export default DeviseMarketplace