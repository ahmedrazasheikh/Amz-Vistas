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
<head>
        <title>Amazon FBA Services by AmzVistas - Fulfillment by Amazon</title>
        <meta name="description" content="Discover AmzVistas' comprehensive Amazon FBA services. We excel in Amazon FBA setup & management, store setup assistance, storefront customization, optimized product listing, store management, Amazon analytics, and provide expert guidance in successful FBA strategies." />
        <meta name="keywords" content="Amazon FBA, FBA setup, store setup, storefront customization, product listing, store management, Amazon analytics, e-commerce, fulfillment by Amazon" />
        <meta name="author" content="AmzVistas" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="content-language" content="en-us" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Amazon FBA Services by AmzVistas - Fulfillment by Amazon" />
        <meta property="og:description" content="Explore our expert Amazon FBA services, including setup, management, and strategic guidance for successful fulfillment by Amazon." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="URL_TO_YOUR_AMAZON_FBA_PAGE" />
        <meta property="og:type" content="website" />
      </head>



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