'use client'
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { montserrat } from "@/app/layout";

const variants = {
    hidden: { 
        opacity: 0,
        y: 30
    },
    show: {
      opacity: 1,
      y:0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

export default function HeroPage() {
    return (
        <section className="w-full p-6 lg:p-16" id="hero" >
            <div className="flex flex-col h-[75vh] mx-auto lg:w-[80%] lg:px-12 justify-center items-center">
                <motion.div 
                    className="text-center mt-[-4em] md:mt-[-8em]"
                    variants={variants}
                    initial="hidden"
                    animate="show"
                >    
                    <Typography
                    variant="h1"
                    color="white"
                    className={`${montserrat.variable} font-primary !leading-tight mx-auto font-extrabold w-full text-[30px] lg:max-w-4xl lg:text-[68px]`}
                    >
                        INNOVATING <br />  TECHNOLOGIES
                    </Typography>
                    <h1 className={`${montserrat.variable} font-primary mx-auto font-semibold leading-relaxed text-[#476CFF] text-lg lg:text-[28px] lg:max-w-3xl uppercase mt-2`}>
                        Pushing the boundaries <br /> of what possible.
                    </h1>
                </motion.div>
            </div>           
        </section>
    )
}