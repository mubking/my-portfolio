
"use client"
import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
function Home_page() {
  const texts = [
    'Hello !',
    'My name is ',
    'Adeshina Mubaraq'
  ];
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 200,
      easing: "ease-in"
    })
}, []);

  const [displayedTexts, setDisplayedTexts] = useState([]);
  
  useEffect(() => {
    const typeText = (text, index) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayedTexts(prevTexts => {
            const newTexts = [...prevTexts];
            newTexts[index] = text.substring(0, i);
            return newTexts;
          });
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Typing speed: 100ms per character
    };

    texts.forEach((text, index) => {
      typeText(text, index);
    });
  }, []);

  return (
    <div  id='hero' className='p-5 red bg-black overflow-hidden w-[100%] text-white h-full'>

      <div  className="flex flex-row gap-10 twenty overflow-hidden" style={{width:"100%"}}>
        <div data-Aos='fade-down'  className="one overflow-hidden" style={{width:"100%"}}>
          <h1 className='text-3xl mt-10'>{displayedTexts[0]}</h1>
          
            <span className='text-2xl mt-3 ' style={{marginTop:""}}>{displayedTexts[1]}</span>
            <span className='text-3xl mt-10 text-[#FF00FF]'>{displayedTexts[2]}</span>

            <h1 className='text-2xl mt-3' >
              I am Passionate and innovative Software Developer Who Specializes in Creating Fast,Responsive,and User-Friendly Websites. i have over 3 years of experience in Web Development, Working with clients from various industries and sectors. Whether you need a landing page, an e-commerce site, or a blog, i can help you create a website that meets your needs and exceed your expectations.
            </h1>

            <div className="bn flex gap-5 mt-10">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Hire Me
              </button>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  About Me
              </button>
            </div>
          </div>
          <div data-Aos='fade-left'  className="two overflow-hidden me " style={{width:"100%"}}>
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure maiores odio explicabo, perspiciatis magni suscipit dicta, voluptatibus veniam facere ducimus reprehenderit fugiat nihil totam esse eos doloremque aperiam amet sunt. */}
            <img src="/image.jpeg" alt="" style={{height:"90vh", width:""}} />
          </div>
         </div>
      
    </div>
  );
}

export default Home_page;
