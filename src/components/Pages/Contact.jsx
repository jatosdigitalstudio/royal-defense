'use client'
import React, {useState,useEffect} from "react";
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
    const [loading,setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setFormValues({ ...formValues, [name]: value});
    }

    async function handleSubmit(event) {
      event.preventDefault()
      setLoading(true);
      try {
        const response = await fetch("/api/sendMessage", {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
            "Content-Type": "application/json",
            },
        })
        
        if (response.ok) {
            setLoading(false);
            setFormValues({
              name: "",
              email: "",
              phone: "",
              message: "",
          });
        } else {
            setLoading(false);
      }
      } catch (error) {
          setLoading(false);
          console.error("Network Error:", error);
      }
  }

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
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="mb-2 text-left ">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type your name" 
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 text-left">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type your email address" 
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 text-left">Phone Number</label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Type your phone number" 
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2 text-left">Message</label>
                            <textarea
                                placeholder="Type your message" 
                                name="message"
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.message}
                                onChange={handleChange}
                            />
                        </div>

                        {loading ? (
                            <button
                            disabled
                            type="button"
                            className="w-full text-white bg-[#3F3BF2] justify-center font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center"
                            >
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 mr-3 text-white justify-center animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                                />
                                <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                                />
                            </svg>
                            Please Wait...
                            </button>
                        ) : (
                            <button
                            type="submit"
                            className="w-full text-white bg-[#3F3BF2] text-white rounded-md px-5 py-2.5 text-center"
                            >
                            Send
                            </button>
                        )}
                    </form>
                    
                </motion.div>
            </div>           
        </section>
    )
}