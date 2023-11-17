import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About_us_Banner = () => {
  

  return (
    <div style={{ background: '#232F3F' , paddingTop : "40px" }} className='main-banner h-auto'>

      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-24 ">

          <div className="mt-20 md:mt-0 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>MAKING SALES EASY</span> <br /> FOR BRANDS! <br /> SERVICES.
            </h2>
            <p className="mb-6 text-white dark:text-neutral-300">
              We are an Amazon marketing service agency that combines cutting-edge e-commerce technologies with innovative marketing methods. We detect loopholes and strategically place brands in the congested and competitive e-commerce industry to provide the best Amazon marketing services.
            </p>

            <Link to={'/Contact-us'} >

            <button   style={{"background" : "#FF9903"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
              Live Chat
            </button>
</Link>
            <button style={{ background: '#FF9903' }} className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (773) 3124788
            </button>
          </div>

          <div className='fade-up-element w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
            <img
              src="https://www.amzinventor.com/images/images-about-people.png"
              alt=""
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default About_us_Banner;
