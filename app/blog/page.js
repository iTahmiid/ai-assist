'use client'
import Image from 'next/image';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import aboutImg from "../../public/images/startup.svg"
import Bottom from "../../components/bottom.jsx"
import Pagetit from '@/components/pagetit';
function blog() {
     const blogData = [
          {
               "title": "The Future of Customer Support with AI",
               "description": "Explore how AI is transforming the customer support industry and what it means for businesses."
          },
          {
               "title": "Best Practices for Implementing Chatbots",
               "description": "Learn the key strategies for successfully integrating chatbots into your customer service."
          },
          {
               "title": "Enhancing Customer Experience with AI",
               "description": "Discover how AI can improve customer satisfaction and drive business growth."
          }
     ]


     return (
          <main className=''>

               <Pagetit
                    title="AI-Assist Blog" desc="Stay updated with the latest news, tips, and insights on AI and customer support."></Pagetit>



               <section className='mt-24'>
                    <h1 className='text-center text-2xl lg:text-3xl mb-[15px] font-bold'>Recent Posts</h1>
                    <div className="mt-20">
                         <div
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

                         >
                              {blogData.map((blog, index) => (
                                   <div
                                        className="border-opacity-20 border-[#797DFC] transition-all duration-300 hover:bg-[#797DFC1A] hover:scale-105 relative pb-20 p-10 px-10 space-y-7  border-2 rounded-2xl w-full"
                                        key={index}

                                   >


                                             <h2 className="text-xl lg:text-2xl font-medium mt-2 text-[#121643]">{blog.title}</h2>
                                             <div className="u-underline__trigger">
                                                  <span className="mt-3 u-underline text-[#121643bf]">{blog.description}</span>
                                             </div>
                                             <button
                                                  href="#"
                                                  className="font-bold absolute bottom-7 inline-block bg-[#797DFC] hover:bg-[#797DFc] btn-sm rounded-full mt-4 text-sm text-white px-8"
                                             >
                                                  Learn More &#8594;
                                             </button>

                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               <Bottom text="Start Your Free Trial Now" button="Get Started"></Bottom>
          </main>
     );
}

export default blog
