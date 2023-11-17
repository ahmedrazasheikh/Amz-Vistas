import React, { useEffect } from 'react';
import '../../../Components/CardSlider/CardSlider.css';
import '../../../Components/Animation.css';
const Shopify_Card = () => {
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



      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src='https://www.amzinventor.com/images/ecom-stre-mentor-icon1.png' />
        <h1>Destination weddings</h1>
        <p>Create the wedding of your dreams in a breathtaking destination with our specialized destination wedding services.</p>
      </div>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src='https://www.amzinventor.com/images/ecom-stre-mentor-icon2.png' />
        <h1>Honeymoons</h1>
        <p>Celebrate your love story with an enchanting honeymoon in the world's most romantic destinations Our tailor-made honeymoon </p>
      </div>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src='https://www.amzinventor.com/images/ecom-stre-mentor-icon3.png' />
        <h1>Group getaways</h1>
        <p>Gather your friends or family for an unforgettable group getaway to create lasting memories. Our customized group travel packages</p>
      </div>
    </div>
    </div>
  )
}

export default Shopify_Card