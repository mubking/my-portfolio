"use client"
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {TiSocialFacebookCircular} from 'react-icons/ti';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BiLogoGithub } from 'react-icons/bi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
   
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const sendEmail = async (e) => {
    e.preventDefault();
  
    // Display the loading message
    setLoading(true);
    setError(false);
    setSuccess(false);
  
    try {
      await emailjs.sendForm('service_pwnwj0s', 'template_jx433e6', form.current, 'mA39ZHLRSQjMzHdRr');
      
      // Simulate a successful email sending
      console.log('Email sent successfully');
      setSuccess(true);
    } catch (error) {
      // Simulate an error
      console.log('Email sending error:', error);
      setError(true);
    } finally {
      // Hide the loading message
      setLoading(false);
    }
  };
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 200,
      easing: "ease-in"
    })
}, []);
  
  return (
    <>
   
      <section id="contact" class="contact h-full p-5">
      <div data-Aos='fade-right' class="container">

        <div class="section-title">
          <span>Contact Me</span>
          <h2>Contact Me</h2>
        </div>

        <div class="flex twenty gap-10 w-[100%]">

          <div class="w-[100%]">

            <div class="flex flex-col">
              <div class="col-md-12">
                <div class="info-box">
                    <div className="you">
                    <IoShareSocialOutline className="custom-icon" />

                    </div>

                  {/* <i class="bx bx-share-alt"> </i> */}
                  <h3>Social Profiles</h3>
                  <div class="social-links">
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
              </div>
              <div className="flex twenty">
                <div class="w-[100%]">
                    <div class="info-box mt-4">
                    <div className="you">
                    <AiOutlineMail className="custom-icon" />
                    </div>
                    <h3>Email Me</h3>
                    <p>Adeshinamubarak6@gmail.com</p>
                    </div>
                </div>

                <div class="w-[100%]">
                <div class="info-box mt-4">
                <div className="you">
                <FiPhoneCall className="custom-icon" />
                </div>
                
                  <i class="bx bx-phone-call"></i>
                  <h3>Call Me</h3>
                  <p>+234 905 611 6119</p>
                </div>
              </div>
              </div>
              
             
            </div>

          </div>

          <div class="w-[100%]">
            <form ref={form} onSubmit={sendEmail} action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="flex twenty w-[100%] gap-5">
                <div class="w-[100%] form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class=" w-[100%] form-group mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div> 
              <div class="form-group mt-3">
                <input type="number" class="form-control" name="number" id="subject" placeholder="enter your number" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
  <div className={`loading ${loading ? '' : 'hidden'}`}>Loading</div>
  <div className={`error-message ${error ? '' : 'hidden'}`}>Your message couldn't be sent. Please try again later.</div>
  <div className={`sent-message ${success ? '' : 'hidden'}`}>Your message has been sent. Thank you!</div>
</div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Contact;