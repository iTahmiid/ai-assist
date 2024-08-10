'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaRobot, FaClock, FaLink } from 'react-icons/fa';

export default function Features() {
     const featureData = [
          {
               icon: <FaRobot />,
               title: "Intelligent Chatbots",
               description: "Automate customer interactions with advanced AI."
          },
          {
               icon: <FaClock />,
               title: "24/7 Availability",
               description: "Always there for your customers, any time of day."
          },
          {
               icon: <FaLink />,
               title: "Seamless Integrations",
               description: "Effortlessly connect with your existing systems."
          }
     ];

     const controls = useAnimation();

     // Animation variants
     const cardVariants = {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
     };

     useEffect(() => {
          const handleScroll = () => {
               const section = document.querySelector('section');
               const rect = section.getBoundingClientRect();
               const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

               if (isVisible) {
                    controls.start('visible');
               }
          };

          window.addEventListener('scroll', handleScroll);
          handleScroll(); // Check on initial load

          return () => window.removeEventListener('scroll', handleScroll);
     }, [controls]);

     return (
          <section className="mt-44">
               <div className="my-20">
                    <h1 className="lg:mb-0 text-3xl lg:text-4xl text-center mb-10 text-[#121643] font-extrabold">Features</h1>
                    <div className="mt-20">
                         <div
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                              initial="hidden"
                              animate={controls}
                              variants={cardVariants}
                              transition={{ staggerChildren: 0.3, delayChildren: 0.5 }} // Adjust delay here
                         >
                              {featureData.map((feature, index) => (
                                   <div
                                        className="feature-card-two border-opacity-20 border-[#797DFC] transition-all duration-300 hover:bg-[#797DFC1A] hover:scale-105  border-2 rounded-2xl w-full"
                                        key={index}

                                   >
                                        <div className="p-10 space-y-7">
                                             <div>
                                                  <h1 className="text-3xl mb-2">
                                                       <span className="bg-[#797DFC] text-white inline-block  p-5 rounded-xl">{feature.icon}</span>
                                                  </h1>
                                             </div>
                                             <h2 className="text-xl lg:text-2xl font-medium mt-2 text-[#121643]">{feature.title}</h2>
                                             <div className="u-underline__trigger">
                                                  <span className="mt-3 u-underline text-[#121643bf]">{feature.description}</span>
                                             </div>
                                             <button
                                                  href="#"
                                                  className="font-bold inline-block bg-[#797DFC] hover:bg-[#797DFc] btn-sm rounded-full mt-4 text-sm text-white px-8"
                                             >
                                                  Learn More &#8594;
                                             </button>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
}
