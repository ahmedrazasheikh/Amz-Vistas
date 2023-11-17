import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Shopify_Banner from './Shopinfy_Banner/Shopify_Banner'
import Dropshipping_Upsclaing from './Shopify_Scaling/Shopify_Scaling'
import Advertising from '../../Components/Advertising/Advertising'
import Inventer from '../../Components/INVENTOR/Inventer'
import Content_Strategizing from '../../Components/Content_Strategizing/Content_Strategizing'
import Supporter from '../../Components/Supporter/Supporter'
import Footer from '../../Components/Footer/Footer'
import ContactDiv from '../../Components/Contact_Div/ContactDiv'
import Pricing_Plan from '../../Components/Pricing_Plan/Pricing_Plan'
import Shopify_Card from './Shopify_Card/Shopify_Card'
import Shopify_Card_sec from './Shopify_Card/Shopify_Card_Sec'
import Heading_Component from './Heading_Component/Heading_Component'

const Shopify_dropshipping = () => {
  return (
    <>
     <Navbar />
     <Shopify_Banner/>
<Dropshipping_Upsclaing/>
<Pricing_Plan/>
<Inventer/>
<ContactDiv/>
<Heading_Component/>
<Shopify_Card/>
<Shopify_Card_sec/>
<Content_Strategizing/>
<Supporter/>
<Footer/>
    </>
  )
}

export default Shopify_dropshipping