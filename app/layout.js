import { Raleway } from 'next/font/google'
import "./globals.css";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";


import { FaFacebook, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const raleway = Raleway({
  weight: '300',
  subsets: ['latin'],
})


export const metadata = {
  title: "Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  const navOptions = <>

    <li className="text-md font-bold m-4 hover:text-[#28A745] transition-all cursor-pointer"><Link href="/">Home</Link></li>
    <li className="text-md font-bold m-4 hover:text-[#28A745] transition-all cursor-pointer"><Link href="/about">About</Link></li>
    <li className="text-md font-bold m-4 hover:text-[#28A745] transition-all cursor-pointer"><Link href="/pricing">Pricing</Link></li>
    <li className="text-md font-bold m-4 hover:text-[#28A745] transition-all cursor-pointer"><Link href="/blog">Blog</Link></li>
    <li className="text-md font-bold m-4 hover:text-[#28A745] transition-all cursor-pointer">Try Demo</li>
    <li className="text-md font-bold m-4 hover:text-[#28A745] transition-all cursor-pointer">Contact</li>


  </>

  return (
    <html lang="en" >
      <body className={raleway.className}>


        <div className="navbar container mx-auto pt-3 py-6">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navOptions}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">LOGO</a>
          </div>
          <div className="navbar-center rounded-none  hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end">
            <button className='btn mt-4 font-bold bg-[#121643] rounded-none hover:bg-[#121643] outline-none border-none text-white '>SIGN UP</button>
          </div>
        </div>





        <main className="mx-auto container max-w-6xl">
          {children}
        </main>


        <footer className="footer px-10 lg:px-48 mt-40 bg-[#121643] text-neutral-content p-10">
          <aside>

            <p className='text-xl flex gap-3 items-center'>
              <IoMdMail />  info@ai-assist.com
            </p>
            <p>

            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a className='text-2xl' href=""><FaFacebook /></a>
              <a className='text-2xl' href=""><RiTwitterXLine /></a>
              <a className='text-2xl' href=""><FaLinkedin></FaLinkedin></a>
            </div>
          </nav>
        </footer>
        <footer className="footer footer-center border-top  bg-[#0c0f2c] text-base-content p-4">
          <aside className='border-white border-top'>
            <p className='text-white'>© {new Date().getFullYear()}  AI-Assist. All rights reserved. | Privacy Policy | Terms of Service</p>
          </aside>
        </footer>

      </body>
    </html >
  );
}



{/* <div className="flex -mx-2 space-x-5">

</div> */}