import {React , useEffect} from 'react';
import './Content_Strategizing.css';
import '../../Components/Animation.css'
const Content_Strategizing = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.faded-top-animate');
    const cards1 = document.querySelectorAll('.faded-top-right');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
      cards1.forEach((card) => {
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
    <div className='content-strategizing my-12'>
      <div className='flex flex-col items-center'>
        <div className='text-center mb-6'>
          <h1 className='faded-top-right font-extrabold text-black text-2xl sm:text-xl'>
            “Content Strategizing is an excellent chance for sellers to market their product benefits.“
          </h1>
          <h1 className='faded-top-right font-extrabold text-black text-xl mt-2'>Andrew Hill</h1>
          <h1 className='faded-top-right font-bold'>VP OF MARKETING</h1>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <img src="https://www.amzinventor.com/images/images-custom-cta-img1.png" alt="" className='mb-4 sm:mb-0 sm:mr-4 faded-top-animate' />
          <img src="https://www.amzinventor.com/images/images-custom-cta-img2.png" alt="" className='mb-4 sm:mb-0 sm:mr-4 faded-top-animate' />
          <img src="https://www.amzinventor.com/images/images-custom-cta-img3.png" alt="" className='mb-4 sm:mb-0 faded-top-animate' />
        </div>
        <div className='flex mt-4'>
          <img src="https://www.amzinventor.com/images/images-custom-cta-img4.png" alt="" className='mr-4 faded-top-animate' />
          <img src="https://www.amzinventor.com/images/images-custom-cta-img5.png" alt="" className='mr-4 faded-top-animate' />
          <img src="https://www.amzinventor.com/images/images-custom-cta-img6.png" alt="" className='mr-4 faded-top-animate' />
        </div>
      </div>
    </div>
  );
}

export default Content_Strategizing;
