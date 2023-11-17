import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import CardSlider from '../../Components/CardSlider/CardSlider'
import Inventer from '../../Components/INVENTOR/Inventer'
import Upsclaing from '../../Components/Upscaling/Upsclaing'
import Advertising from '../../Components/Advertising/Advertising'
import Support_Slider from '../../Components/Support_Card_Slider/Support_Slider'
import Faq from '../../Components/FAQS/FAQ'
import ContactDiv from '../../Components/Contact_Div/ContactDiv'
import Supporter from '../../Components/Supporter/Supporter'
import Footer from '../../Components/Footer/Footer'
import Services_Card_New from '../../Components/Services_Cards_New/Services_Card_new'
import Services_Card_New2 from '../../Components/Services_Cards_New/Services_Card_new2'
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services_Card_New/>
      <Services_Card_New2/>
      {/* <CardSlider /> */}
      <Inventer />
      <Upsclaing />
      <Advertising />
      <Faq />
      <ContactDiv />
      <Supporter />
      <Footer />
    </>
  )
}

export default Home