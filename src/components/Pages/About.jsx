'use client'
import React, {useEffect} from "react";
import { Typography} from "@material-tailwind/react"
import Subtitle from "../UI/Subtitle"
import { ABOUT_IMAGES } from "@/lib/data"
import TabsCustom from "../UI/Tabs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { montserrat } from "@/app/layout";

const variants1 = {
    hidden: { opacity: 0, y:10 },
    visible: {
      opacity: 1,
      y:30,
      transition: {
        duration: 0.5
      },
    },
  };

  const variants2 = {
    hidden: { opacity: 0, y:10 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 1
      },
    },
  };

export default function About() {
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
        <section className="bg-white p-6 lg:min-h-[50rem] lg:p-16" id="about" >
            <div className="flex flex-col mb-10 justify-center items-center lg:w-[80%] mx-auto">
              <motion.div 
                variants={variants1}
                ref={ref}
                initial="hidden"
                animate={control}
                className="mx-auto text-center pt-6 mb-6 md:mt-0 rounded-lg shadow-xl p-6"
              >
                <Typography 
                  variant="h2"
                  color="white"
                  className={`${montserrat.variable} font-primary text-[#000b37] my-4 leading-snug !text-4xl`}>
                  About {" "}
                  <span className="text-[#3F3BF2]">Us</span>
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto font-text text-justify lg:w-[80%] px-2 my-4 !text-gray-700 lg:text-md text-base"
                  >
                  Throughout the years, Royal Defense has excelled as an official representative and exclusive 
                  distributor of leading manufacturers and brands in their respective industries, ensuring that 
                  our solutions always deliver the best technologies.
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto font-text text-justify lg:w-[80%] px-2 my-4 !text-gray-700 lg:text-md text-base"
                  >
                  Our goal is to provide comprehensive, service-oriented solutions in high-risk and complex 
                  environments across the Indonesian archipelago and beyond, extending into other Southeast 
                  Asian nations.
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto font-text text-justify lg:w-[80%] px-2 my-4 !text-gray-700 lg:text-md text-base"
                  >
                  Partnering with leading technology pioneers, we are comitted to meeting our 
                  customers needs with responsiveness, effectiveness, unquestionable integrity, 
                  and a fully committed after-sales team.
                </Typography>
              </motion.div>

              <motion.div 
                  variants={variants2}
                  ref={ref}
                  initial="hidden"
                  animate={control}  
                  className="flex flex-col lg:flex-row w-full p-2 justify-center items-center text-left rounded-lg shadow-xl pt-12 pb-6 px-8 lg:px-12">
                    <div className="lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="flex flex-col mx-auto justify-center ">
                        <Typography 
                          variant="h2"
                          color="white"
                          className={`${montserrat.variable} font-primary text-[#000b37] my-4 !leading-relaxed !text-4xl`}>
                          Commitment to {" "}
                          <span className="text-[#3F3BF2]">Service</span>
                        </Typography>
                        <Typography
                          variant="lead"
                          className="font-text !text-gray-500 lg:text-md text-base"
                          >
                            As we understands the importance of customer’s trust, Royal Defense never 
                            compromise on quality of all the solutions we deliver. 
                        </Typography>
                      </div>
                      <div className="flex justify-center">
                        <Image src="/images/about.png" width={250} height={200} alt="About Royal Defense" />
                      </div>
                    </div>
                    
                </motion.div>


              {/* <motion.div  
                variants={variants2}
                ref={ref}
                initial="hidden"
                animate={control} 
                className="flex flex-wrap gap-4 mb-8 mx-auto justify-center items-center">
                <TabsCustom data={ABOUT_IMAGES} />
              </motion.div>     */}
            </div>         
        </section>
    )
}



// <section className="bg-white p-6 lg:min-h-[50rem] lg:p-16" id="about" >
//             <div className="flex flex-col mb-6 justify-center items-center lg:w-[80%] mx-auto">
//               <motion.div 
//                 variants={variants1}
//                 ref={ref}
//                 initial="hidden"
//                 animate={control}
//                 className="mx-auto text-center mt-6 mb-8 md:mt-0 md:mb-16"
//               >
//                 <Subtitle text={"About"} />
//                 <Typography 
//                     variant="h1"
//                     color="purple"
//                     className="mx-auto my-4 w-full leading-snug !text-3xl lg:max-w-3xl lg:!text-6xl">
//                     Synergy of long-time Business Partners
//                 </Typography>
//                 <Typography
//                     variant="lead"
//                     className="mx-auto font-sans lg:w-[80%] px-2 !text-gray-500 lg:text-md text-base"
//                     >
//                     RCT is a good team company for operating as official representative/distributor of manufacturers 
//                     and brands that are key players in their industries, ensuring RCT solutions is always provide its 
//                     customers the best solution.
//                 </Typography>
//               </motion.div>

//               <motion.div  
//                 variants={variants2}
//                 ref={ref}
//                 initial="hidden"
//                 animate={control} 
//                 className="flex flex-wrap gap-4 mb-8 mx-auto justify-center items-center">
//                 <TabsCustom data={ABOUT_IMAGES} />
//               </motion.div>    
//             </div>         
//         </section>