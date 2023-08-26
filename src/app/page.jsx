"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Home_page from "./Components/Home_page";
import About from "./Components/About";
import Me from "./Components/Me";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex w-full bg-[rgba(0,0,0,0.7)] h-screen justify-center items-center">
         <div className="preloader w-[50px] h-[50px] rounded-full border-t border-t-[green] border border-[white] border-solid"></div>
        </div>
      ) : (
        <section>
          <Navbar />
          <Home_page />
          <About/>
          <Services/>
          <Me/>
          <Contact/>
          <Footer/>
        </section>
      )}
    </>
  );
}
