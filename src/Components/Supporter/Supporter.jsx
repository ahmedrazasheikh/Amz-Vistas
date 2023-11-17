import {React , useEffect} from 'react'
import { Support_Card } from './Support_Card'
import '../../Components/Animation.css'
import '../Content_Strategizing/Content_Strategizing.css'
const Supporter = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.least-bottom-animate');

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
  <div className='least-bottom-animate  flex flex-col items-center py-8'>
  <h1 style={{ "color": "#333333" }} className='least-bottom-animate  text-xl capitalize font-bold sm:text-center  '>LOOKING  MORE ABOUT AMZ INVENTORS?</h1>
  <p className='least-bottom-animate  mb-4 mt-2 w-3/4 text-center sm:w-2/4 mx-auto'>Learning from others’ experiences will help you make better decisions for your business online. Here are our value-driven customers’ feedbacks.</p>
</div>

<div   className='flex flex-wrap content-strategizing_Reviews  justify-center  	'  >
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1619380061814-58f03707f082?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Chang"
description="Would need more specific details about the nature of the service, the features it offers, and any unique aspects that set it apart. However, I can create a generic review template for you that you"
/>
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Mamadou"
description="Would need more specific details about the nature of the service, the features it offers, and any unique aspects that set it apart. However, I can create a generic review template for you that you."
/>
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Alexander"
description="Would need more specific details about the nature of the service, the features it offers, and any unique aspects that set it apart. However, I can create a generic review template for you that you.  "

/>
</div>
    </>
  )
}

export default Supporter