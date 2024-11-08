'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { LampContainer } from './ui/lamp';
import { motion } from "framer-motion";
import Contact from './Contact';


const Hero = () => {
  return (
    <div className="lg:mt-0 mt-12 flex flex-col lg:flex-row bg-slate-950 h-screen lg:h-[95vh]">
      {/* Left Section */}
      <div className="   lg:mt-10 mt-40 flex flex-col justify-center items-center w-full lg:w-1/2 p-6 sm:p-8 space-y-6 lg:space-y-8 lg:h-full "> 
        <LampContainer className="  flex flex-col items-center text-center space-y-4 sm:space-y-6">
        <motion.p
 initial={{ x: 100, opacity: 0 }}
             whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay:0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="  hidden lg:block mt-5 text-base sm:text-lg md:text-xl lg:text-3xl font-medium bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-white   leading-loose text-center max-w-xl px-4 "
          >
          Hi! 
          <br />
          <span className='lg:text-5xl  text-white font-bonheur'>
            It's SUYOG
            </span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="   bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-transparent "
          >
            Full Stack Developer <br /> the right way
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay:0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="  mt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-md opacity-80 leading-loose text-center max-w-xl px-4"
          >
            {/* Transforming ideas into impactful digital experiences with elegant and efficient code.
             */}
             I know how to make GPT work for me:D
          </motion.p>
          <div className="  flex justify-center mt-8"> {/* This ensures the button is centered */}
         
           <Contact/>
          </div>
        </LampContainer>
      </div>

      {/* Right Section with Background Image */}
      <div className="  relative w-full lg:w-1/2 h-full ">
        <div className="absolute inset-0 bg-slate-950 opacity-30"></div>
        <img src="img/webreadyne.png" alt="" className=" lg:w-full object-cover lg:h-full"/>
      </div>
    </div>
  );
};

export default Hero;
