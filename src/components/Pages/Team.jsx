'use client'
import React, {useEffect} from "react";
import {
  Typography,
} from "@material-tailwind/react";
import Subtitle from "../UI/Subtitle";
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

export default function Team() {
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
        <section className="bg-white p-8 py-[6rem] lg:px-20 lg:py-[10rem] mx-auto" id="team" >
            <div className="md:w-[80%] mx-auto">
              <motion.div 
                variants={variants2}
                ref={ref}
                initial="hidden"
                animate={control}  
                className="flex flex-col lg:flex-row w-full p-2 justify-center items-center text-left rounded-lg shadow-xl py-6 px-6 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-4 py-6">
                    <div className="flex justify-center items-center">
                      <Image src="/images/team-1.png" width={300} height={300} className="rounded-xl" alt="Team Royal Defense"/>
                    </div>
                    <div className="flex flex-col mx-auto justify-center items-center">
                      <Typography 
                        variant="h2"
                        color="white"
                        className={`${montserrat.variable} font-primary text-[#000b37] my-4 leading-snug !text-[24px] lg:!text-3xl`}>
                        We focus on {" "} 
                        <span className="leading-snug text-[#3F3BF2]">synergy</span>, {" "}
                        <span className="leading-snug text-[#3F3BF2]">expertise</span>, and {" "}
                        <span className="leading-snug text-[#3F3BF2]">solidity</span>.
                      </Typography>
                      <Typography
                        variant="lead"
                        className="font-text !text-gray-700 lg:text-md text-base my-4"
                        >
                        Our team is the cornerstone of our success. We are dedicated professionals, 
                        striving for excellence in every solutions. 
                      </Typography>
                      <Typography
                        variant="lead"
                        className="font-text !text-gray-700 lg:text-md text-base"
                        >
                        Our strong management and exceptional leadership guide us in delivering 
                        customer-focused and techno-based solutions. We leverage frontier technology 
                        to meet the evolving needs of our end-users, ensuring they benefit from the 
                        latest advancements. 
                      </Typography>
                    </div>
                  </div>
              </motion.div>
            </div>
        </section>
    )
}