'use client'
import React, {useEffect} from "react";
import {
  Typography,
} from "@material-tailwind/react";
import Subtitle from "../UI/Subtitle";
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "postcss";
import { montserrat } from "@/app/layout";
const variants1 = {
    hidden: { opacity: 0, y:30 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 0.5
      },
    },
  };

  const variants2 = {
    hidden: { opacity: 0, y:30 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 1
      },
    },
  };

export default function Contact() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
    return (
        <section className="w-full p-8 py-[4rem] lg:px-20 mx-auto" id="contact">
            <div className="flex flex-col lg:w-[90%] text-center mx-auto justify-center items-center">
              <motion.div 
                  variants={variants1}
                  ref={ref}
                  initial="hidden"
                  animate={control}  
                  className="flex-wrap justify-start w-full mt-8 mb-6">
                  <Typography 
                      variant="h2"
                      color="white"
                      className={`${montserrat.variable} font-primary text-white my-4 leading-snug !text-2xl lg:!text-5xl`}>
                      Contact Us
                  </Typography>
                </motion.div>
                <motion.div 
                  variants={variants2}
                  ref={ref}
                  initial="hidden"
                  animate={control}
                  className="flex flex-col bg-[#292D33] backdrop-filter backdrop-blur-lg bg-opacity-85 lg:w-[50%] text-left rounded-xl p-8 text-white">
                    <form>
                        <div className="mb-4">
                            <label className="mb-2 text-left ">Name</label>
                            <input
                                type="text"
                                placeholder="Type your name" 
                                className="w-full rounded-lg bg-gray border-2 border-grey p-2" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 text-left">Email Address</label>
                            <input
                                type="email"
                                placeholder="Type your email address" 
                                className="w-full rounded-lg bg-gray border-2 border-grey p-2" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 text-left">Phone Number</label>
                            <input
                                type="number"
                                placeholder="Type your phone number" 
                                className="w-full rounded-lg bg-gray border-2 border-grey p-2" 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2 text-left">Message</label>
                            <textarea
                                placeholder="Type your message" 
                                className="w-full rounded-lg bg-gray border-2 border-grey p-2" 
                            />
                        </div>

                        <button className="w-full bg-[#3F3BF2] text-white p-2 rounded-md" >Send</button>
                    
                    </form>
                    
                </motion.div>
            </div>           
        </section>
    )
}