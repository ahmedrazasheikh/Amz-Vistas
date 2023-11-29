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
  <h1  className='text-black least-bottom-animate  text-xl capitalize font-bold sm:text-center  '>LOOKING  MORE ABOUT AMZ VISTAS?</h1>
  <p className='least-bottom-animate  mb-4 mt-2 w-3/4 text-center sm:w-2/4 mx-auto'>Learning from others’ experiences will help you make better decisions for your business online. Here are our value-driven customers’ feedbacks.</p>
</div>

<div   className='flex flex-wrap content-strategizing_Reviews  justify-center  	'  >
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1537107041341-713aaa2a234c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Ramon"
description="I was initially skeptical, but the results speak for themselves. The service provided by this team has had a direct and positive impact on my business. The attention to detail, strategic approach, and commitment to excellence are commendable. If you're serious about success on Amazon, look no further."
/>
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Perry"
description="I am thrilled to have discovered this company on the platform. Their attention to detail, clear communication, and expertise in their field make them a standout choice. I've seen a significant improvement in my Amazon business since I started working with them."
/>
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Alexis"
description="What sets this service apart is their exceptional customer support. Whenever I had a question or needed clarification, they were quick to respond and provided thorough explanations. It's clear that they value their customers and are dedicated to ensuring a positive experience."

/>
</div>
    </>
  )
}

export default Supporter