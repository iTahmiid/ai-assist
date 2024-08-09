import Image from "next/image";
import Features from "./home-sections/Features";
import Product from "./home-sections/Product";
import Bottom from "../components/bottom.jsx";
import Services from "./home-sections/Services";
import herobg from '../public/images/herobgg.png'
import ButtonAll from "@/components/ButtonAll";

export default function Home() {
     return (
          <main className="container  lg:max-w-7xl mx-auto">


               <header className=" header  p-10 lg:p-[120px] h-[70vh]">
                    <div className="mb-6">
                         <div className="relative ">
                              <h1 className="text-3xl z-10 title text-white mb-4 leading-snug lg:leading-normal lg:text-6xl font-extrabold">
                                   Revolutionize Your Customer Interactions With <span className="gradient-text">Ai Assist</span>
                              </h1>


                         </div>



                         <p className="mt-2  text-sm lg:text-[20px] text-white">Experience the future of customer support with AI-powered solutions.

                         </p>



                         <div className=" mt-10 relative gr-bg">
                              <ButtonAll content="Get Started Today"></ButtonAll>

                         </div>



                    </div>


               </header>

               <div className="">
                    <Features></Features>
                    <Product></Product>
                    <Services></Services>


                    <Bottom text="Start Your Free Trial Now" button="Get Your Free Trial Now"></Bottom>
               </div>

          </main >

     );
}
