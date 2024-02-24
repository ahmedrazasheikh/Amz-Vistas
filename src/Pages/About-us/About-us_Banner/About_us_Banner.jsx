import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About_us_Banner = () => {
  

  return (
    <div style={{ background: '#232F3F' , paddingTop : "40px" }} className='main-banner h-auto'>

      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-24 ">

          <div  className="md:mt-0 mt-11 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>Generating Ascending Graphs </span> <br /> Of Sales <br /> SERVICES.
            </h2>
            <p className="mb-6 text-white dark:text-neutral-300">
              We are an  end-end E-commerce service agency that combines cutting-edge  technologies with innovative marketing tactics. We identify  loop holes and strategically place brands in the Saturated and competitive E-commerce industry to provide the best online shopping experince.
            </p>

            <Link to={'/Contact-us'} >

            <button   style={{"background" : "#FF9903"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
              Live Chat
            </button>
</Link>
            <button style={{ background: '#FF9903' }} className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (737) 359-1874
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
