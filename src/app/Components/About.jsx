import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
const About = () => {
  
    useEffect(() => {
        Aos.init({
          duration: 1000,
          delay: 200,
          easing: "ease-in"
        })
  }, []);
  return (
    <div id='about' className='bg-[whitesmoke] h-full p-5'>
        <div className="flex flex-row twenty">
           <div data-Aos='fade-left' className='w-[100%] me'>
             <img src  ="/About.jpeg" style={{height:"90vh", width:"%" }} alt="" />
           </div>
           <div data-Aos='fade-down' className='w-[100%]'>
            <h2 className='text-[#FF00FF] text-3xl mt-5 '>Adeshina Mubarak</h2>
            <h1 className='text-4xl mt-10'>I'm a Profesional Web Designer & App  Developer </h1>
            <h2  className='mt-5 text-lg'>Fascinated by the Web's connectivity, mastered HTML,CSS, React ,Nest.Js, React Native and Javascript  at 17, Crafting engaging  websites.</h2>
            <h2 className='mt-5 text-lg'>in the Crypto World, i'm a multi-role expert: Tutor,Analyst,Researcher,Community Manager,Trader, and NFT Collector,With 2 year's of experience and i have in-depth knowledge on it.</h2>
            <h2 className='mt-5 text-lg'>Skilled in time management and marketing, i bring order and activity to communities, offering Defi,NFT, and Metaverse tutoring. Let's connect for a seamless blend of Web and Crypto expertise  </h2>
           </div>
        </div>
    </div>
  )
}

export default About