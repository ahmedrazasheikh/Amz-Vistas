import React, { useEffect } from 'react';
import '../CardSlider/CardSlider.css';
import '../Animation.css';
const Services_Card_New = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.Shopify-card');
    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div     >

<div className='flex flex-wrap justify-center my-6 bg-white  '>



      <div className="Services-card">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/online-shop-1.png' />
        <h1>Amazon Store Creation Services</h1>
        <p>Our team of experts is dedicated to crafting tailored solutions that bring your vision to life, from a strategically designed storefront to seamless navigation.</p>
      </div>
      <div className="Services-card">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/to-do-list-1.png' />
        <h1>Listing Optimization Services</h1>
        <p>Optimize your product listings effectively with our professional assistance, tailored to maximize conversions and ensure visibility to potential customers searching for your products on Amazon.</p>
      </div>
      <div className="Services-card">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/ads.png' />
        <h1>Amazon DSP Ads</h1>
        <p>Expand your reach to a broader audience through Amazon Display ads. With our proven strategies and adherence to best practices, you can expect tangible results from your Amazon DSP ad campaigns.</p>
      </div>
      <div className="Services-card">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/application.png' />
        <h1>Amazon FBA Account Management</h1>
        <p>Managing your Amazon store necessitates knowledge and attention to detail. Gain a competitive advantage in the marketplace by utilizing VAamazon's virtual assistant service.</p>
      </div>
    </div>
    </div>
  )
}

export default Services_Card_New