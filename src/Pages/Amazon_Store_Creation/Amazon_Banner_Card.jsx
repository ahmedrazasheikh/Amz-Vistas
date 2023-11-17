import {React , useEffect} from 'react'
import { Link } from 'react-router-dom';

const Amazon_Store_Card = () => {



  useEffect(() => {
    const cards1 = document.querySelectorAll('.right-side');
    const cards2 = document.querySelectorAll('.left-side');
  
    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right'); // Apply animation for class1
        }
      });
  
      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('element-to-animate'); // Apply animation for class2
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
      <div>

<div className="w-full container mx-auto md:px-6">
  <div className="flex flex-col md:flex-row justify-between pt-10 animation-from-left">

  <div className='mt-20 md:mt-0 right-side w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
      <img
        src="https://www.amzinventor.com/images/holistic-img12.png"
        alt=""
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>

    <div className="left-side mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
      <h2 className="mb-6 text-3xl text-black font-bold">
        <span className='mb-6'>Amazon Listing & Optimization</span></h2>
      <p className="mb-6 text-black dark:text-neutral-300">
      AMZ Inventor taps into the ever-changing ecommerce space and offers brands relevant discoverability, utilizing up-to-date product listing and optimization strategies.
      </p>

      <div className='flex mt-2 flex-wrap text-black w-3/4	mb-4 justify-between' >
           <ul>

           



              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Warehousing</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i> Packing</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Dispatching</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Returns</li>

            </ul>
            
            


            <ul>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i> Reviews</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Refunds</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>and a lot more mr-2 </li>
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

   

  </div>
</div>

</div>
    </>
  )
}

export default Amazon_Store_Card