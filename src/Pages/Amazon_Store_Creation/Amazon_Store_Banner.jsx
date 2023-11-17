import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Amazon_Store_Banner = () => {
  return (
    <div style={{ background: '#232F3F' ,  paddingTop : "40px" }} className='main-banner h-auto'>

      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-24 animation-from-left">

          <div className="mt-20 md:mt-0 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>SEIZE THE E-COMMERCE BASE WITH</span> <br /> AN AMAZON STORE</h2>
            <p className="mb-6 text-white dark:text-neutral-300">
            AMZ Inventor is a leading Amazon agency helping brands approach the e-commerce industry with a strategic methodology – to make sense of the ecosystem. We are driven by a cut-throat formula to elevate brands and maximize their sales growth.
            </p>

            





<div className='flex flex-wrap text-white w-3/4	mb-4 justify-between' >
           <ul>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i>Amazon FBA setup & management</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i>Store setup assistance</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i>Storefront customization</li>
            </ul>
            

            <ul>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i> Optimized product listing</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i>Store management</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i>Amazon analytics</li>
            </ul>
           </div>
           <Link to={'/Contact-us'} >

<button   style={{"background" : "#FF9903"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  Live Chat
</button>
</Link>
            <button style={{ background: '#FF9903' }} className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (773) 3124788
            </button>
            
          </div>

          <div style={{ "border": "1px solid #ccc" , "background" : "#FF9903" }} className='fade-up-element w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
            <form className="px-4">
              <div className='flex flex-col justify-center'>
                <h2 style={{ "color": "#000000" }} className="mb-2 text-xl font-bold">GET A PROPOSAL</h2>
                <p className="w-full mb-6 text-black dark:text-neutral-300">
                  Increase your Amazon store sales with our proven marketing strategies.
                </p>
              </div>

              <div className="relative mb-6 " data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput90"
                  placeholder="Name"
                />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  htmlFor="exampleInput90">
                  First Name
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity:0"
                  id="exampleInput91"
                />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  htmlFor="exampleInput91">
                  Email
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-1 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                />
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                  Message
                </label>
              </div>

              <button
                style={{ "background": "#000000" }}
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

    </div>
  );
};

export default Amazon_Store_Banner;
