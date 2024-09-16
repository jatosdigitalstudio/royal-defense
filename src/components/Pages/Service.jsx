'use client'
import React, {useEffect} from "react";
import {
  Typography,
} from "@material-tailwind/react";
import Subtitle from "../UI/Subtitle";
// import { Spotlight } from "../UI/Spotlight";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

export default function Service() {
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
        <section className="w-full p-6 lg:p-16 mx-auto">
            <div className="flex flex-col lg:h-[42rem]">
                <motion.div 
                    variants={variants1}
                    ref={ref}
                    initial="hidden"
                    animate={control}
                    className="mt-6 mb-16 px-6 text-center">    
                    <Subtitle text={"Service"} />
                    <Typography 
                        variant="h1"
                        color="white"
                        className="mx-auto my-4 w-full leading-snug !text-3xl lg:max-w-3xl lg:!text-6xl">
                    Commitment to {" "}
                    <span className="leading-snug text-[#3F3BF2]">
                        Service
                    </span>
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto lg:w-[70%] !text-gray-500 lg:text-md text-base"
                        >
                        RCT solutions are reliable-customer-driven and tailor - <br></br> made in accordance with local laws.
                    </Typography>
                </motion.div>

                <div className="w-full lg:w-[80%] mx-auto px-4 mb-8">
                    <motion.div 
                        variants={variants2}
                        ref={ref}
                        initial="hidden"
                        animate={control}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 min-h-[9rem] text-white text-center">
                        <div className="lg:row-start-1 lg:row-end-3 items-center">
                            <div className="bg-[url('/images/service-1.png')] bg-cover h-[9rem] lg:h-[19rem]">
                                <div className="flex flex-col w-full h-full bg-[#420BB5]/75 backdrop-brightness-25 lg:rounded-l-lg justify-between">
                                    <span className="items-start text-center pt-8">Trust</span>
                                    <span className="items-end text-center pb-8">Confident</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[url('/images/service-2.png')] bg-cover h-[9rem]">
                            <div className="flex flex-col w-full h-full bg-[#420BB5]/75 backdrop-brightness-25 justify-center">
                                <span className="text-center">Performance</span>
                            </div>
                        </div>
                        <div className="bg-[url('/images/service-3.png')] bg-cover h-[9rem]">
                            <div className="flex flex-col w-full h-full bg-[#420BB5]/75 backdrop-brightness-25 justify-center items-center">
                                <span className="text-center">Equipment</span>
                            </div>
                        </div>
                        <div className="bg-[url('/images/service-4.png')] bg-cover h-[9rem]">
                            <div className="flex flex-col w-full h-full bg-[#420BB5]/75 backdrop-brightness-25 lg:rounded-tr-lg justify-center">
                                <span className="text-center">Best Quality</span>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="bg-[url('/images/service-5.png')] bg-cover h-[9rem]">
                                <div className="flex flex-col w-full h-full bg-[#420BB5]/75 backdrop-brightness-25 justify-center">
                                    <span className=" text-center">Strategic Consulting</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[url('/images/service-6.png')] bg-cover h-[9rem]">
                            <div className="flex flex-col w-full h-full bg-[#420BB5]/75 backdrop-brightness-25 rounded-br-lg justify-center">
                                <span className="text-center">After Sales Support</span>
                            </div>
                        </div>

                    </motion.div>

                </div>

                
            </div>           
        </section>
    )
}