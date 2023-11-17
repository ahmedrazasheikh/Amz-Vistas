import {React  , useEffect} from 'react';
import '../../Components/Animation.css'

const ContactDiv = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.animate-bottom-call');

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
    <>
      <div style={{ "background": "#1E2834" }} className='animate-bottom-call flex  m-auto my-16 p-8 md:w-9/12 sm:w-full'>
        <div>
          <h1 className='text-4xl font-bold'>
            <span style={{ "color": "#FF9901" }}>GOT QUESTIONS?</span> <span style={{ "color": "white" }}>OR</span>{' '}
            <span style={{ "color": "#FF9901" }}>NEED A</span> <br /> <span style={{ "color": "#FF9901" }}>QUOTE?</span>
          </h1>
          <p className='w-full sm:w-8/12 text-white mt-4'>We always appreciate your thoughts. So feel free to raise any concern with us, whether that be a query not addressed in the FAQs or curiosity to know more about us. We’re here for you, and we’ll answer in a jiffy!</p>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center mt-4'>
          <div className='mb-4   sm:mb-0 sm:mr-12 w-full sm:w-28'>
            <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <i class="fa-2x fa fa-phone text-white" aria-hidden="true"></i>
            </div>
            <span className='text-white text-white font-bold mt-2 sm:mt-0'>Call Now</span>
          </div>
          <div className='w-full sm:w-28'>
            <div class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
              <i class="fa-2x fa-solid text-white fa-message"></i>
            </div>
            <span className='text-white font-bold mt-2 sm:mt-0'>Get Quote</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDiv;
