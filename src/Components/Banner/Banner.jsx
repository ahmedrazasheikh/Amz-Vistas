import React, { useState, useEffect } from 'react';
import './Banner.css';
import '../../Components/Animation.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  const handleSubmit = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name) || !emailRegex.test(email) || !message.trim()) {
      alert('Please fill in all fields with valid data.');
      return;
    }

    // Log the input values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setShowPopup(true);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ background: '#232F3F' , paddingTop : "40px" }} className="main-banner h-auto">
      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-24 animation-from-left">

          <div className="mt-20 md:mt-0 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <span style={{ color: '#FF9903' }} className="text-2xl font-bold">Optimize Functionality.</span>
            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>Enhance User Experience</span> <br />Captivate Traffic With  <br />Amazon Marketing Services.
            </h2>
            <h2 style={{ color: '#FF9903' }} className="mb-6 text-xl font-bold">Elevate Your Business With Professional Amazon Store Setup And Management Solutions.</h2>
            <p className="mb-6 text-white dark:text-neutral-300">
            We Bring Innovation And Expertise To Amplify Your Online Presence And Drive Unparalleled Growth. Our Devoted Team Of Experts Are Committed To Guide You Through Each Step Of The Amazon Journey, From Strategic Store Setup To Comprehensive Management Services Focusing Optimization.
            </p>
            <Link to={'/Contact-us'}>
              <button style={{ background: '#FF9903' }} className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
                Live Chat
              </button>
            </Link>
            <button style={{ background: '#FF9903' }} className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (773) 3124788
            </button>
          </div>

          <div style={{ border: '1px solid #ccc', background: '#FF9903' }} className='fade-up-element w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
          <form className="px-4">
              <div className='flex flex-col justify-center'>
                <h2 style={{ color: '#000000' }} className="mb-2 text-xl font-bold">GET A PROPOSAL</h2>
                <p className="w-full mb-6 text-black dark:text-neutral-300">
                  Increase your Amazon store sales with our proven marketing strategies.
                </p>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
              <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="block w-full rounded bg-white py-2 px-3 outline-none focus:placeholder-opacity-100 dark:text-neutral-200 dark:placeholder-text-neutral-200"
  id="exampleInput90"
  placeholder="Name"
/>

              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer block min-h-[auto] w-full rounded bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity:0"
                  id="exampleInput91"
                  placeholder="Email"
                />
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="block w-full rounded border-1 bg-white py-2 px-3 outline-none focus:placeholder-opacity-100 dark:text-neutral-200 dark:placeholder-text-neutral-200"
  id="exampleFormControlTextarea1"
  rows="3"
  placeholder="Your message"
/>

              </div>

              <button
                onClick={handleSubmit}
                style={{ background: '#000000' }}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                GET FREE CONSULTATION
              </button>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <p>Form submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Banner;
