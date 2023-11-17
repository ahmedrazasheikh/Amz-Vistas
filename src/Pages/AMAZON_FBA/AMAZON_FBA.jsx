import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Amazon_Banner from './Amazon_Banner/Amazon_Banner'
import Amazon_Card from './Amazon_Card/Amazon_Card'
import Supporter from '../../Components/Supporter/Supporter'
import Advertising from '../../Components/Advertising/Advertising'
import Inventer from '../../Components/INVENTOR/Inventer'
import ContactDiv from '../../Components/Contact_Div/ContactDiv'
import Heading_Component from '../Shopify-Dropshipping/Heading_Component/Heading_Component'
import Shopify_Card from '../Shopify-Dropshipping/Shopify_Card/Shopify_Card'
import Shopify_Card_sec from '../Shopify-Dropshipping/Shopify_Card/Shopify_Card_Sec'
import Dropshipping_Upsclaing from '../Shopify-Dropshipping/Shopify_Scaling/Shopify_Scaling'
import Footer from '../../Components/Footer/Footer'

const AMAZON_FBA = () => {
    return (
        <>
            <Navbar />
            <Amazon_Banner />
            <Amazon_Card />
            <div style={{ "background": "#FF9D1D" }} >
                <Advertising />
                <Inventer />
            </div>
            <ContactDiv />
            <Heading_Component />
            <Shopify_Card />
            <Shopify_Card_sec />
            <div className='mt-8' >
                <Dropshipping_Upsclaing />
            </div>
            <ContactDiv />
            <Supporter />
            <Footer />
        </>
    )
}

export default AMAZON_FBA