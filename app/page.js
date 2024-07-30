import { Button } from "@/components/ui/button";
import Image from "next/image";
import Features from "./home-sections/Features";
import Product from "./home-sections/Product";
import Bottom from "../components/bottom.jsx"
import Services from "./home-sections/Services";
import herobg from '../public/images/herobg.svg'

export default function Home() {
  return (
    <main >
      <header className="flex items-center text-center flex-col justify-center mt-11">
        <div>
          <h1 className="text-3xl title mb-4 leading-snug lg:leading-normal lg:text-5xl font-bold">
            Revolutionize Your Customer <br /> Interactions With <span className="custom-underline">AI-Assist</span>
          </h1>




          <p className="mt-2 text-sm lg:text-xl text-[#121643bf]">Experience the future of customer support with AI-powered solutions.

          </p>



          <div className="mt-6">
            <button className="bg-[#121643]  hover:bg-[#121643] btn text-white rounded-none text-sm">Get Started Today</button>
          </div>

          <div className="mt-10">
            <Image width="800" src={herobg}></Image>
          </div>
        </div>


      </header>

      <div className=" mx-auto">
        <Features></Features>
        <Product></Product>
        <Services></Services>


        <Bottom text="Start Your Free Trial Now" button="Get Your Free Trial Now"></Bottom>
      </div>

    </main >

  );
}
