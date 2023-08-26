import React from 'react'
import {TiSocialFacebookCircular} from 'react-icons/ti';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BiLogoGithub } from 'react-icons/bi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
function Footer() {
  return (
    <footer id="footer">
    <div class="container p-5 h-full">
        
    <h2 className='text-3xl'>Mubaraq<span className='text-[magenta] '>Codes</span></h2>
    <div className='mt-10'>
    <p className=' '>Welcome to my portfolio! I'm a passionate web developer specializing in front-end and back-end development. I create exceptional digital experiences with a focus on responsive design. Connect with me on social media and let's collaborate!.</p>

    </div>
      <div class="social-links flex items-center justify-center">
      <a href="https://www.facebook.com/hardeshina.harlmubarak?mibextid=ZbWKwL" style={{justifyContent:"center", alignItems
      :"center", display:"flex" }}>
                <TiSocialFacebookCircular style={{width:"100%", fontSize:"2.5vmax"}}/>
     </a>       
     <a href=""  style={{justifyContent:"center", alignItems
      :"center", display:"flex" }}>
                <TiSocialTwitterCircular style={{width:"100%", fontSize:"2.5vmax"}}/>
                </a>
            <a href="https://instagram.com/adeshina_mubaraq?igshid=MzNlNGNkZWQ4Mg=="  style={{justifyContent:"center", alignItems
      :"center", display:"flex" }}>
                <TiSocialInstagram style={{width:"100%", fontSize:"2.5vmax"}}/> 
                </a>
            <a href="https://www.linkedin.com/in/mubking"  style={{justifyContent:"center", alignItems
      :"center", display:"flex" }}>
                <TiSocialLinkedinCircular style={{width:"100%", fontSize:"2.5vmax"}}/> 
                
                </a>
            <a href="https://github.com/mubking" className="me"  style={{justifyContent:"center", alignItems
      :"center", display:"flex" }}>
                <BiLogoGithub style={{ width: "100%", fontSize: "2.5vmax" }} />
                <h3>Github</h3>
            </a>      </div>
      <div class="copyright">
        &copy; Copyright <strong><span>Mubaraq<span className='text-[magenta] '>Codes</span></span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/ --> */}
        Designed by <a href="https://bootstrapmade.com/"><strong><span>Mubaraq<span className='text-[magenta] '>Codes</span></span></strong></a>
      </div>
    </div>
  </footer>
  )
}

export default Footer