import React, { useEffect } from 'react';
import '../../../Components/CardSlider/CardSlider.css'

const Shopify_Card_sec = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.Offer-card');
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
    <div>

<div className='flex flex-wrap justify-center my-6 bg-white  '>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src='https://www.amzinventor.com/images/ecom-stre-mentor-icon4.png' />
        <h1>STRATEGY INSIGHTS</h1>
        <p>Our love for data is unending, and we strive to assess our strategy insights very critically to improve their performance and relevancy.</p>
      </div>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src='https://www.amzinventor.com/images/ecom-stre-mentor-icon6.png' />
        <h1>COST-EFFICIENCY</h1>
        <p>We are not only focused; we are also customer-centric. Our services are designed to liberate small and medium-size brands with cost-efficient plans.</p>
      </div>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src='https://www.amzinventor.com/images/ecom-stre-mentor-icon5.png' />
        <h1>DREAM-TEAM</h1>
        <p>We are a team of seasoned amazon marketing specialists and growth hackers, dedicated for one goal – to skyrocket online sales.</p>
      </div>
    </div>
    </div>
  )
}

export default Shopify_Card_sec