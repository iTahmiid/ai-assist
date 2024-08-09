import React from 'react';
import ButtonAll from './ButtonAll';

import img from '../public/images/bottom.png';
import Image from 'next/image';
const Bottom = ({ text, button }) => {
     return (
          <section className="lg:flex mt-44 text-center lg:text-left items-center justify-between bg-[#12132D] py-12 rounded-[32px] px-0 lg:px-20">
               <div>
                    <div className='mb-9'>
                         <h1 className="text-white text-2xl mb-4 lg:text-4xl font-bold">{text}</h1>
                         <p className='text-white text-sm lg:text-base mx-7 lg:mx-0'>
                              Share your favorite opinion and win and wp forum coffee mug! Yes
                              <br className="hidden sm:block" /> {/* Hide on small screens */}
                              you can run unit tests and view the results directly within the app.
                         </p>
                    </div>
                    <ButtonAll content={button} /> {/* Use button prop here */}
               </div>
               <div className='mt-14 lg:mt-0'>
                    <Image src={img}></Image>
               </div>
          </section>
     );
};

export default Bottom;
