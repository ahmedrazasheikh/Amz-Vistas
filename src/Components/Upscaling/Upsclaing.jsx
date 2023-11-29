import {React , useEffect } from 'react'
import { Upscaling_Card } from './Upscaling_Card/Upscaling_Card'
import '../../Components/Animation.css'
import { Link } from 'react-router-dom';
const Upsclaing = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.Animate-from-bottom');

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
  <div  className='flex flex-col items-center justify-center' >
  <h1 className='Animate-from-bottom main-center-text-rtf text-3xl sm:text-2xl md:text-4xl my-2 font-bold text-center sm:text-left'>
  AMZ VISTAS MAKING UPSCALING EASY
</h1>
<p className='Animate-from-bottom main-center-text-rtf text-sm sm:text-base md:text-md  lg:text-xl w-4/5 sm:w-2/3 text-center my-2'>
We have the experience required to accomplish explosive e-commerce growth throughout the world. We employ our best skills in the following strategies:
</p>

<Link to={'/Contact-us'} >

<button style={{ "background": "#FF9903" }} className="Animate-from-bottom main-center-text-rtf my-2 mr-2 w-full sm:w-auto md:w-auto lg:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full">
  Get In Touch!
</button>
</Link>



<div   className='flex  mb-8  flex-wrap' >

<Upscaling_Card
  imageSrc="https://www.amzinventor.com/images/icons/SEO_20_150x150.png"
  title="Data Push"
  description="Since we maintain that you should achieve your most prominent potential, all our essential decisions and conferences are upheld by exploration and proof."
  buttonText="Learn More"
/>
<Upscaling_Card
  imageSrc="https://www.amzinventor.com/images/icons/SEO_22_150x150-min.png"
  title="Growth Approach"
  description="Since our administration approach is fixated on a development hacking worldview, we center around executing our promoting administrations for amazon"
  buttonText="Learn More"
/>
<Upscaling_Card
  imageSrc="https://www.amzinventor.com/images/icons/SEO_33_150x150.png"
  title="Operational Excellence"
  description="We like exploring the complexities of the internet business environment and make progress toward greatness. "
  buttonText="Learn More"
/>



</div>




  </div>
    
    </>
  )
}

export default Upsclaing