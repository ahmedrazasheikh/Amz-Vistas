import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Support_Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Go to the first slide
    }
  }, []);

  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full container m-auto mt-4">
      <Slider ref={sliderRef} {...sliderSettings} className="customer-logos w-full">
        <div className="slide"><img src="https://www.amzinventor.com/images/images-brand-logo-mm-img6.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.amzinventor.com/images/images-brand-logo-mm-img7.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.amzinventor.com/images/images-brand-logo-mm-img8.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.amzinventor.com/images/images-brand-logo-mm-img1.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://amzinventor.com/images/images-brand-logo-mm-img2.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.amzinventor.com/images/images-brand-logo-mm-img3.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.amzinventor.com/images/images-brand-logo-mm-img5.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.amzinventor.com/images/images-brand-logo-mm-img6.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.amzinventor.com/images/images-brand-logo-mm-img5.jpg" alt="partner-logo" /></div>
      </Slider>
    </div>
  );
}

export default Support_Slider;
