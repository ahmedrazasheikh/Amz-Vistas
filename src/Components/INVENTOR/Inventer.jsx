import {React , useEffect} from 'react';
import '../../Components/Animation.css'
import Service_Card from '../Service_Card/Service_Card';

const Inventer = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.ft-text-animate');
    const cards2 = document.querySelectorAll('.ft-text-animate-right');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ "background": "#FF9D1D" }} className='flex flex-col items-center justify-center my-12 py-8 md:py-16'>

        <h1 className='ft-text-animate-right text-3xl md:text-4xl text-white font-bold text-center'>WHY AMZ VISTAS?</h1>
        <h1 style={{ "color": "#333333" }} className='ft-text-animate-right text-xl md:text-2xl my-2 text-center font-bold'>AMZ Vistas Will Harness the Power of a Successful E-Commerce Growth <br />and Strategy!</h1>
        <p className='ft-text-animate-right text-sm md:text-base my-4 md:w-4/5 lg:w-3/5 xl:w-2/3 text-center'>Our Amazon Marketing Agency combines intelligent strategies with profit opportunities and new product solutions for brands in all niches. Our operational expertise has given us a creative, hands-on approach to assisting brands in reaching, expanding, and leading the e-commerce ecosystem.</p>

        <div  className='flex flex-col my-6 md:flex-row md:justify-between md:items-center sm:w-full md:w-auto'>
  <Service_Card img={'https://www.amzinventor.com/images/icons/color_web_browser.svg'} heading={'Amazon SEO'} description={'To upscale your Amazon stores by improving product perceivability'} />
  <Service_Card img={'https://www.amzinventor.com/images/icons/color_idea-19.svg'} heading={'Store Management'} description={'To effectively follow, source, make due, and handle stock'} />
  <Service_Card img={'https://www.amzinventor.com/images/icons/color_money.svg'} heading={'Optimized Content'} description={'To upgrade item posting and positioning on Amazon'} />
  <Service_Card img={'https://www.amzinventor.com/images/icons/color_business_report.svg'} heading={'Support'} description={'For responsive and client driven help for publicizing on Amazon'} />
</div>


        <div className='flex flex-col my-6 md:flex-row md:justify-between md:items-center'>
          <Service_Card img={'https://amzinventor.com/images/icons/color_seo_tag.svg'} heading={'Amazon Advertising'} description={'To improve deals with vital Amazon publicizing'} />
          <Service_Card img={'https://www.amzinventor.com/images/icons/color_research.svg'} heading={'Amazon Sales Boost'} description={'To streamline product posting and positioning on Amazon'} />
          <Service_Card img={'https://www.amzinventor.com/images/icons/color_communication.svg'} heading={'Price Comparison'} description={'To help your organization in finding the best product and cost'} />
          <Service_Card img={'https://www.amzinventor.com/images/icons/color_writing.svg'} heading={'EBC/A+ Content'} description={'For an eye-getting customer facing facade with brand mindfulness.'} />
        </div>

      </div>
    </>
  );
}

export default Inventer;
