'use client';
import { motion } from 'framer-motion';
import Features from './home-sections/Features';
import Product from './home-sections/Product';
import Bottom from '../components/bottom.jsx';
import Services from './home-sections/Services';
import herobg from '../public/images/herobgg.png';
import ButtonAll from '@/components/ButtonAll';

// Define animation variants for the button
const buttonVariants = {
     hidden: { opacity: 1, y: 0 },
     visible: { opacity: 1, y: [0, -10, 0, -5, 0] },
};

export default function Home() {
     // Animation variants for the header
     const headerVariants = {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
     };

     const textVariants = {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
     };

     return (
          <main className="">
               <header className="header p-10 lg:p-[120px] flex items-center justify-center  relative">
                    <div className="mb-6 mt-8 lg:mt-0 text-center lg:text-left">
                         <div
                              className="relative"

                         >
                              <h1 className="text-3xl z-10 title text-white mb-4 leading-snug lg:leading-normal lg:text-6xl font-extrabold">
                                   Revolutionize Your Customer Interactions With <span className="gradient-text">Ai Assist</span>
                              </h1>
                         </div>
                         <p
                              className="mt-2 text-sm lg:text-[20px] text-white"
                              initial="hidden"
                              animate="visible"
                              variants={textVariants}
                              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                         >
                              Experience the future of customer support with AI-powered solutions.
                         </p>
                         <motion.div
                              className="mt-10 relative gr-bg"
                              initial="hidden"
                              animate="visible"
                              variants={buttonVariants}
                              transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }} // Delay for visibility
                         >
                              <ButtonAll content="Get Started Today" />
                         </motion.div>
                    </div>
               </header>

               <div className=" space-y-60">
                    <Features />
                    <Product />
                    <Services />
                    <Bottom text="Start Your Free Trial Now" button="Get Your Free Trial Now" />
               </div>
          </main>
     );
}
