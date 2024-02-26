import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import CardSlider from '../../Components/CardSlider/CardSlider'
import Inventer from '../../Components/INVENTOR/Inventer'
import Upsclaing from '../../Components/Upscaling/Upsclaing'
import Advertising from '../../Components/Advertising/Advertising'
import Support_Slider from '../../Components/Support_Card_Slider/Support_Slider'
import Faq from '../../Components/FAQS/FAQ'
import ContactDiv from '../../Components/Contact_Div/ContactDiv'
import Supporter from '../../Components/Supporter/Supporter'
import Footer from '../../Components/Footer/Footer'
import Services_Card_New from '../../Components/Services_Cards_New/Services_Card_new'
import SliderCarousel from '../../Components/Services_Cards_New/SliderCarousel'
import Services_Card_New2 from '../../Components/Services_Cards_New/Services_Card_new2'
import video from '../../Images/website banner.mp4'
import './Home.css'
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [hidden,setHidden] = useState(false)
  const [hidden2,setHidden2] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(false);
  
    useEffect(() => {
      if (showPopup) {
        const timeout = setTimeout(() => {
          setShowPopup(false);
        }, 5000);
  
        return () => clearTimeout(timeout);
      }
    }, [showPopup]);
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Adjust the scroll threshold as needed
        const scrollThreshold = 200; // Adjust this value as needed
    
        if (scrollPosition > scrollThreshold) {
          setShowOnScroll(true);
        } else {
          setShowOnScroll(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      textarea: '',
      number : ''
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate form inputs
      if (!formData.name || !formData.email ||!formData.number ||  !formData.textarea) {
        alert('Please fill out all fields before submitting.');
        return;
      }
  
  
      // Process the form submission logic here
      console.log('Form submitted:', formData);
  
      try {
        // Make API call using Axios
        const response = await axios.post('https://agreeable-apron-bass.cyclic.app/api/messages', formData);
        console.log('API response:', response.data);
        // Handle success (optional)
        alert('Your Message has been successfully sent!');
        setHidden2(false)
  
        setFormData({
          name: '',
          email: '',
          textarea: '',
          number: '',
        });  
  
      } catch (error) {
        console.error('Error sending message:', error);
        alert('There was an error sending your message. Please try again later.');
      }
    };
  useEffect(() => {
    const videoElement = document.getElementById('background-video');
    if (videoElement) {
      videoElement.play().catch((error) => {
        // Autoplay was prevented. Handle the error, e.g., show a play button.
        console.error('Autoplay prevented:', error);
      });
    }
  }, []);

  const handleHover = () => {
      setHidden(true);
    };

    const handleHoverOut = () => {
      setHidden(false);
    };

    const handleHover2 = () => {
      setHidden2(true);
    };

    const handleHoverOut2 = () => {
      setHidden2(false);
    };
  return (
    <>
<Helmet>
    <title>AmzVistas - Your Amazon Services Partner</title>
    <meta name="description" content="Explore AmzVistas' comprehensive services, including Amazon store creation, storefront customization, optimized product listing, store management, Amazon analytics, and expert guidance in establishing a successful online presence." />
        <meta name="keywords" content="Amazon store creation, storefront customization, product listing optimization, store management, Amazon analytics, e-commerce services" />
        <meta name="author" content="AmzVistas" />
    </Helmet>
      <Navbar />

      <video id="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
    
      </video>
<Banner />
<div  className='bg-white'  >

    <div   className='py-12' >
    <SliderCarousel/>
    </div>
    <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        onClick={() => setHidden(!hidden)}
        className={`text-14xl p-4 text-white flex items-center ${!showOnScroll && 'hidden'}`}
        style={{
          border : "2px solid black",
          borderRight : "none",
          position: "fixed",
          right: "0px",
          bottom: "300px",
          zIndex: "1",
          backgroundColor: "#FA9800",
          borderRadius: "10px 0px 0px 10px"
        }}
      >
        <i className="fa-solid fa-phone mr-2"></i>
        {hidden ? (
          <>
            <hr style={{ width: "1px", height: "20px", margin: "0 10px", border: "none", backgroundColor: "black" }} />
            <a className="font-bold" href="tel:+17373591874">+1 (737) 359-1874</a>
          </>
        ) : ''}
      </div>
      <div
        onMouseEnter={handleHover2}
        onMouseLeave={handleHoverOut2}
        className={`flex ${!showOnScroll && 'hidden'}`}
        style={{
          position: "fixed",
          right: "0px",
          bottom: "90px",
          zIndex: "1",
          borderRadius: "10px 0px 0px 10px",  
        }}
      >
        <div style={{ 
          borderRadius: "10px 0px 0px 10px",
          maxHeight: "200px", // You can adjust the maximum height here
          overflowX :"hidden", 
          border : "2px solid black",
          borderRight : "none",
          backgroundColor: "#FA9800",
      }} className="text-white py-4 h-min" onClick={() => setHidden2(!hidden2)}>
          <p className="get-a-quote font-black">Get A Quote</p>
        </div>
        <div>
          {hidden2 ? (
            <form style={{ "background": "#F0F0F0", "border": "1px solid black" }} className="px-4 slide-in-right" onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center'>
              <h2 style={{ color: 'black' }} className="mb-2 text-2xl font-bold m-auto text-center">Get Our Experts</h2>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                id="name"
                autoComplete="given-name"
                placeholder="Full Name"
                className="  md:w-96	    mb-2 rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="Email Address"
                className=" md:w-96	 mb-2 rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="Phone Number"
                id="Phone Number"
                autoComplete="Phone Number"
                placeholder="Phone Number"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                id="textarea"
                name="textarea"
                rows="3"
                placeholder="Write your message..."
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0"
                value={formData.textarea}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              style={{ background: 'black' }}
              className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Contact With Us
            </button>
          </form>
          ) : ""}
        </div>
      </div>
      <Inventer />
      <Upsclaing />
      <Advertising />
      <Faq />
      <ContactDiv />
      <Supporter />
      <Footer />
</div>
    </>
  )
}

export default Home