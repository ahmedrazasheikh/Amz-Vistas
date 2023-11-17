import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Amazon_Store_Banner from './Amazon_Store_Banner'
import Amazon_Store_Card from './Amazon_Banner_Card'
import Amazon_Store_CardSec from './Amazon_Store_CardSec'
import Advertising from '../../Components/Advertising/Advertising'
import Inventer from '../../Components/INVENTOR/Inventer'
import ContactDiv from '../../Components/Contact_Div/ContactDiv'
import Heading_Component from '../Shopify-Dropshipping/Heading_Component/Heading_Component'
import Shopify_Card from '../Shopify-Dropshipping/Shopify_Card/Shopify_Card'
import Shopify_Card_sec from '../Shopify-Dropshipping/Shopify_Card/Shopify_Card_Sec'
import Footer from '../../Components/Footer/Footer'
import Supporter from '../../Components/Supporter/Supporter'
import Upsclaing from '../../Components/Upscaling/Upsclaing'
import Content_Strategizing from '../../Components/Content_Strategizing/Content_Strategizing'
import Services_Card_New from '../../Components/Services_Cards_New/Services_Card_new'
import Services_Card_New2 from '../../Components/Services_Cards_New/Services_Card_new2'

const Amazon_store_creation = () => {
  return (
    <>
      <Navbar />
      <Amazon_Store_Banner />
      <Amazon_Store_Card />
      <Amazon_Store_CardSec />
      <Services_Card_New/>
      <Services_Card_New2/>
      <Advertising />
      <Inventer />
      <ContactDiv />
      <Heading_Component />
      <Shopify_Card />
      <Shopify_Card_sec />
      <Content_Strategizing />
      <Upsclaing />
      <ContactDiv />
      <Supporter />
      <Footer />
    </>
  )
}

export default Amazon_store_creation