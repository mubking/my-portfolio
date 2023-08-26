import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
function Me() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in"
    })
}, []);
  return (

  <div data-Aos='fade-up' className=' flex  flex-col justify-center items-center h-[50vh] bg-black text-white text-center'>
    <h2 className='text-4xl'>Let's Work Together!</h2>
    <p className='mt-5 text-2xl'>I am available for freelance projects. Hire me and get your project done.</p>
   <button class="inline-flex text-white bg-indigo-500  mt-10 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
       Hire Me
   </button>
  </div>


    )
}

export default Me;


