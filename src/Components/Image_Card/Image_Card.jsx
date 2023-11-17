import React, { useEffect, useState } from 'react';

const Image_Card = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.animation-from-left');
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
    <div className='ImageCard py-10 w-full'>
      <div className="flex flex-wrap animation-from-left">
        <div className=" md:w-2/5	md:ml-20		 h-4/5 mb-4 md:mb-0">
          <img className='w-full md:w-11/12' src={'https://amzinventor.com/images/images-about-img-new-2.png'} alt="Testimonial Image" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold image-card-subheading">
          THRIVE AND GROW WITH AMZ INVENTOR
          </h1>
          <p className='py-4'>
          Our most successful campaigns always employ both smart decisions and intelligent implementation for brands to take on a journey that keeps giving. We present the strategies that we believe are viable investments for brands who look to dominate the Amazon marketplace. We strategize, manage, and dramatically lower all barriers to entry by keeping current.
          </p>
          <div className='flex flex-col md:flex-row'>
          <div className="animation-from-left w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
    <div className='text-center md:text-left'>
        <img className='w-1/5 h-1/5 mx-auto' src={'https://www.amzinventor.com/images/images-about-icon-new-1.png'} alt="Offer Image" />
        <h2 className='font-bold' style={{ "color": "#334066" }}>Expert consultation</h2>
    </div>
</div>
<div className="animation-from-left w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
    <div className='text-center md:text-left'>
        <img className='w-1/5 h-1/5 mx-auto' src={'https://www.amzinventor.com/images/images-about-icon-new-2.png'} alt="Offer Image" />
        <h2 className='font-bold' style={{ "color": "#334066" }}>Operational help</h2>
    </div>
</div>
  
<div className="animation-from-left w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
    <div className='text-center md:text-left'>
        <img className='w-1/5 h-1/5 mx-auto' src={'https://www.amzinventor.com/images/images-about-icon-new-3.png'} alt="Offer Image" />
        <h2 className='font-bold' style={{ "color": "#334066" }}>Tracking & reporting</h2>
    </div>
</div>
</div>


        </div>
      </div>
    </div>
  );
}

export default Image_Card;
