import {FaLaptopCode} from  'react-icons/Fa';
import {FaLayerGroup} from  'react-icons/Fa';
import {FaCcApplePay} from  'react-icons/Fa';
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";

function Services() {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          delay: 200,
          easing: "ease-in"
        })
  }, []);

  return (
  <>

    <div id='service'   className=" flex flex-row w-[100%] h-[100vh] bg-[#E8F1F9] gap-5 p-5">
				{/* <!-- Services Single --> */}
        <div class="mt-10 bg-[white] five  justify-center items-center text-center  h-[60vh] w-[100%] p-5">
            <div class="services-box">
                <div class="count">
                    <span>01</span>
                </div>
                <div class="icon mt-5">
                    <FaLaptopCode style={{width:"100%", fontSize:"3.5vmax"}}/>
                    <i class="fas fa-laptop-code"></i>
                </div>
                <h2 className='mt-7'>Web Design</h2>
                <p className='mt-5 text-[gray]'>I Develop full-blown web apps using HTML,Javascript, React and Tailwind CSS.</p>
                <button class="inline-flex mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    View Details
                </button>
                
            </div>
            
        </div>
        {/* <!-- Services Single --> */}
        <div class="mt-10 bg-[white] justify-center five items-center text-center  h-[60vh] w-[100%] p-5">
            <div class="services-box">
                <div class="count">
                    <span>02</span>
                </div>
                <div class="icon mt-5">
                    <FaLayerGroup style={{width:"100%", fontSize:"3.5vmax"}}/>
                    <i class="fas fa-laptop-code"></i>
                </div>
                <h2 className='mt-7'>Web Development</h2>
                <p className='mt-5 text-[gray]'>In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.</p>
                {/* <a class="read_details" href="services-details.html"> </a> */}
                {/* <button>View Details</button> */}
                <button class="inline-flex mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    View Details
                </button>
                
            </div>
            
        </div>
        {/* <!-- Services Single --> */}
        <div class="mt-10 bg-[white] justify-center items-center text-center five h-[60vh] w-[100%] p-5">
            <div class="services-box">
                <div class="count">
                    <span>03</span>
                </div>
                <div class="icon mt-5">
                    <FaCcApplePay style={{width:"100%", fontSize:"3.5vmax"}}/>
                    <i class="fas fa-laptop-code"></i>
                </div>
                <h2 className='mt-7'>App Development</h2>
                <p className='mt-5 text-[gray]'>In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.</p>
                {/* <a class="read_details" href="services-details.html"> </a> */}
                {/* <button>View Details</button> */}
                <button class="inline-flex mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    View Details
                </button>
                
            </div>
            
				</div>
</div>
  </>
  )
}

export default Services;