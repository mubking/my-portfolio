import React from 'react'
// import Link from 'next/link';
import { Link } from 'react-scroll';
import {TiSocialFacebookCircular} from 'react-icons/ti';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BiLogoGithub } from 'react-icons/bi';
// import { SlSocialInstagram } from 'react-icons/Sl';

function Navbar() {
  return (
   <div className='bg-[black] h-[15vh] z-[1000] sticky top-0 flex flex-row  justify-between  items-center text-white p-5'>
    <div className="logo h-20   text-3xl mt-10 ">
     <h2>Mubaraq<span className='text-[magenta]'>Codes</span></h2>
    </div>
    <div className="nav-list">
      <ul className=' flex flexrow  gap-8 items-center  '>
        <Link activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <li>Home</li>

       </Link>
        <Link activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <li>About</li>

       </Link>
      <Link activeClass="active"
        to="service"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <li>Services</li>

      </Link>
      <Link activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <li>Contact</li>

      </Link>
        <Link activeClass="active"
        to="cv"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            cv
        </button>
        </Link>
       
      </ul>
    </div>
    <div className="social gap-3">
      <a href="https://www.facebook.com/hardeshina.harlmubarak?mibextid=ZbWKwL">
        <TiSocialFacebookCircular style={{width:"100%", fontSize:"2.5vmax"}}/>
        </a>
      <a href="">
        <TiSocialTwitterCircular style={{width:"100%", fontSize:"2.5vmax"}}/>
        </a>
      <a href="https://instagram.com/adeshina_mubaraq?igshid=MzNlNGNkZWQ4Mg==">
        <TiSocialInstagram style={{width:"100%", fontSize:"2.5vmax"}}/> 
        </a>
      <a href="https://www.linkedin.com/in/mubking">
        <TiSocialLinkedinCircular style={{width:"100%", fontSize:"2.5vmax"}}/> 
        
        </a>
      <a href="https://github.com/mubking" className="me">
        <BiLogoGithub style={{ width: "100%", fontSize: "2.5vmax" }} />
        <h3>Github</h3>
      </a>
    </div>
   </div>
  )
}

export default Navbar;