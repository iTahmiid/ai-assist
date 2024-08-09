'use client';
import "./underline.css";
import productImg from "../../public/images/project2.svg";
import Image from "next/image";
import Title from "@/components/Title";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Product() {
     const productsData = [
          {
               title: "AI-powered Chatbots",
               description: "Answer FAQs, troubleshoot basic issues, and route complex inquiries to human agents."
          },
          {
               title: "Conversational Commerce",
               description: "Enable customers to make purchases and manage orders through chat interfaces."
          },
          {
               title: "Shopping Assistant",
               description: "Provide personalized product recommendations and support for online shoppers."
          }
     ];

     const controls = useAnimation();

     // Animation variants
     const cardVariants = {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
     };

     const imageVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
     };

     useEffect(() => {
          const handleScroll = () => {
               const section = document.querySelector('section');
               if (!section) return;

               const rect = section.getBoundingClientRect();
               const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

               if (isVisible) {
                    controls.start('visible');
               }
          };

          // Add scroll event listener
          window.addEventListener('scroll', handleScroll);

          // Check visibility on initial render
          handleScroll();

          // Cleanup event listener on component unmount
          return () => window.removeEventListener('scroll', handleScroll);
     }, [controls]);

     return (
          <section className="mt-40">
               <div className="mb-10">
                    <Title title={<span>Product</span>} />
               </div>
               <div className="flex-none lg:flex gap-5">
                    <div className="grid lg:w-1/2 grid-cols-1 md:grid-cols-2 relative">
                         {productsData.map((product, index) => (
                              <div
                                   className={`card transition-all hover:bg-[#797DFC] hover:text-white w-full rounded-none relative ${index === 2 ? 'md:col-span-2' : ''}`}
                                   key={index}
                                   initial="hidden"
                                   animate={controls}
                                   variants={imageVariants}
                                   transition={{ duration: 0.2, delay: productsData.length * 0.2 }}
                              >
                                   <div className="card-body">
                                        <h2 className="text-xl font-bold mb-4">{product.title}</h2>
                                        <p>{product.description}</p>
                                   </div>
                                   {index === 0 && (
                                        <div className="absolute hidden lg:block inset-y-0 right-0 border-custom-right"></div>
                                   )}
                                   {index === 2 && (
                                        <div className="absolute hidden lg:block bottom-0 left-0 border-custom-top"></div>
                                   )}
                              </div>
                         ))}
                    </div>
                    <div
                         className="lg:w-1/2 mt-28 lg:mt-0"
                         initial="hidden"
                         animate={controls}
                         variants={imageVariants}
                         transition={{ duration: 0.2, delay: productsData.length * 0.2 }}
                    >
                         <Image src={productImg} alt="" className="w-full" />
                    </div>
               </div>
          </section>
     );
}
