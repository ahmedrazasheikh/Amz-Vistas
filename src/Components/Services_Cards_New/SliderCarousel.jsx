import React, { useEffect } from 'react';
import '../CardSlider/CardSlider.css';
import '../Animation.css';
import Slider from "react-slick";
const SliderCarousel = () => {
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
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <div style={{"overflow" : "hidden"}} className='mt-4'>
        <Slider {...settings}>
        <div className="Services-card-caro">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/online-shop-1.png' />
        <h1>Amazon Store Creation Services</h1>
        <p>Our team of experts is dedicated to craft tailored solutions that brings your vision to life, from a strategically designed storefront to seamless navigation.</p>
      </div>
      <div className="Services-card-caro">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/to-do-list-1.png' />
        <h1>Listing Optimization Services</h1>
        <p>Optimize your product listings effectively with our professional assistance, tailored to maximize conversions and ensure visibility to potential customers searching for your products on Amazon.</p>
      </div>
      <div className="Services-card-caro">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/ads.png' />
        <h1>Amazon DSP Ads</h1>
        <p>Expand your reach to a broader audience through Amazon Display ads. With our proven strategies and adherence to best practices, you can expect tangible results from your Amazon DSP ad campaigns.</p>
      </div>
      <div className="Services-card-caro">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/application.png' />
        <h1>Amazon FBA Account Management</h1>
        <p>Managing your Amazon store necessitates knowledge and attention to detail. Gain a competitive advantage in the marketplace by utilizing Amazon's virtual assistant.</p>
      </div>
      <div className="Services-card-caro">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/cost-per-click.png' />
        <h1>Amazon PPC </h1>
        <p>With our specialized Amazon PPC solutions, we harness the power of targeted advertising to ensure your products reach the right audience at the right time.</p>
      </div>
      <div className="Services-card-caro">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/copy-writing.png' />
        <h1>EBC/A+ content</h1>
        <p>Our professionals understand the power of enhanced brand, creating a seamless blend of creativity and strategy to showcase your products in the best light</p>
      </div>
      <div className="Services-card-caro">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/hunting.png' />
        <h1>Amazon product Hunting</h1>
        <p>we are specialized in the art and science of product hunting, leveraging market insights and cutting-edge strategies to uncover hidden gems </p>
      </div>
      <div className="Services-card-caro">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/seo-1-1.png' />
        <h1>Amazon SEO Services</h1>
        <p>We deliver unparalleled Amazon SEO Services, harnessing strategic optimization techniques to boost your product visibility & drive organic traffic</p>
      </div>
        </Slider>

    </div>
  )
}

export default SliderCarousel