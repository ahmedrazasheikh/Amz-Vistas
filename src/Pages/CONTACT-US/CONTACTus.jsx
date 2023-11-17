import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Banner_Contact from './Banner-Contact/Banner_Contact'
import Footer from '../../Components/Footer/Footer'
import Supporter from '../../Components/Supporter/Supporter'
import Contact_Form from './Contact_Form/Contact_Form'

const CONTACTus = () => {
  return (
    <>
   <Navbar /> 
   <Banner_Contact />
   <Contact_Form/>
   <Supporter />
      <Footer />
    
    </>
  )
}

export default CONTACTus