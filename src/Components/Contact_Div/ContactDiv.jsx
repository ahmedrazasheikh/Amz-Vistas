import {React  , useEffect} from 'react';
import '../../Components/Animation.css'
import { Link } from 'react-router-dom';

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
            <span style={{ "color": "#FF9901" }}>Still Confused ?</span>    
            {/* <span style={{ "color": "#FF9901" }}>NEED A</span> <br /> <span style={{ "color": "#FF9901" }}>QUOTE?</span> */}
          </h1>
          <p className='w-full sm:w-8/12 text-white mt-4'>We are always grateful to receive inquiries. Tell us what's confusing you, and one of our consultants will look for an answer.</p>
        </div>
        <div className='w-64	  flex flex-col sm:flex-row justify-between items-center mt-4'>

          <Link   to={'/Contact-us'}>
          
        <button   style={{"background" : "#FF9D1D" , "color" : "#1E2834" , "fontFamily" : "sans-serif" }} className="w-full md:w-auto ml-6 md:mt-0 mt-12  text-white font-bold py-6 px-8 rounded-xl">
        Call Now
            </button>
          
          </Link>
          {/* <div className='mb-4   sm:mb-0 sm:mr-12 w-full sm:w-28'>
            <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <i class="fa-2x fa fa-phone text-white" aria-hidden="true"></i>
            </div>
            <span className='text-white text-white font-bold  mt-4 sm:mt-0   '>Call Now</span>
          </div> */}
      
        </div>
      </div>
    </>
  );
};

export default ContactDiv;
