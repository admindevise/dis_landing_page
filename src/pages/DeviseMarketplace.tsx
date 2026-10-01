import { Box } from '@mui/material'
import MarketPlaceHero from '../sections/devise-marketplace/MarketPlaceHero'
import MarketPlaceInvest from '../sections/devise-marketplace/MarketPlaceInvest'
import MarketPlaceCell from '../sections/devise-marketplace/MarketPlaceCell'
import MarketPlaceAccount from '../sections/devise-marketplace/MarketPlaceAccount'
import MarketPlaceCTA from '../sections/devise-marketplace/MarketPlaceCTA'
import DISHUBConnectionMarketplace from '../sections/devise-marketplace/DISHUBConnectionMarketplace'

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