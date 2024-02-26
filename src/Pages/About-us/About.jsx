import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import About_us_Banner from './About-us_Banner/About_us_Banner'
import Banner_Upsclaing from './Banner_upscaling/Banner_Upscaling'
import Advertising from '../../Components/Advertising/Advertising'
import Supporter from '../../Components/Supporter/Supporter'
import Footer from '../../Components/Footer/Footer'
import Scaling_Mid_Sec from '../../Components/Sacaling_Mid_Sec/Scaling_Mid_Sec'
import Content_Strategizing from '../../Components/Content_Strategizing/Content_Strategizing'
import Image_Card from '../../Components/Image_Card/Image_Card'
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <>
<Helmet>
        <title>About AmzVistas - Your Amazon Services Partner</title>
        <meta name="description" content="Learn more about AmzVistas, your dedicated partner for Amazon services. Discover our mission, expertise in Amazon FBA setup & management, store setup assistance, storefront customization, optimized product listing, store management, Amazon analytics, dropshipping store designing, dropshipping marketing, niche selection, store management, supplier & sourcing, and visual ads." />
        <meta name="keywords" content="About AmzVistas, Amazon services, Amazon FBA, store setup, dropshipping, store management, visual ads" />
        <meta name="author" content="AmzVistas" />
      </Helmet>
      <Navbar />
      <About_us_Banner />
      <Image_Card />
      <Banner_Upsclaing />
      <Advertising />
      <Content_Strategizing />
      <Scaling_Mid_Sec />
      <Supporter />
      <Footer />
    </>
  )
}

export default About