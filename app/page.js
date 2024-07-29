import { Button } from "@/components/ui/button";
import Image from "next/image";
import Features from "./home-sections/Features";
import Product from "./home-sections/Product";
import Services from "./home-sections/Services";
import herobg from '../public/images/herobg.svg'

export default function Home() {
  return (
    <main >
      <header className="flex items-center text-center flex-col justify-center mt-11">
        <div>
          <h1 className=" text-3xl leading-snug lg:leading-normal lg:text-5xl font-bold" style={{
  
          }}>Revolutionize Your Customer <br /> Interactions With AI-Assist
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



        <section className="lg:flex mt-44 text-center lg:text-left items-center justify-between bg-[#121643] py-12 px-20">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">Start Your Free Trial Now              </h1>
          <button className="btn rounded-none mt-5 w-full lg:w-auto lg:mt-0">Get Started Today</button>
        </section>
      </div>

    </main>

  );
}
