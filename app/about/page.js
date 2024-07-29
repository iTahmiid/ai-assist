import Image from 'next/image';
import React from 'react';
import aboutImg from "../../public/images/startup.svg"
import missonImg from "../../public/images/stats.svg"
function About() {

    const teamData = [
        {
            "img": "/images/man.jpeg",
            "name": "John Smith",
            "sub": "Web Developer"
        },
        {
            "img": "/images/man.jpeg",
            "name": "John Smith",
            "sub": "Web Developer"
        },
        {
            "img": "/images/man.jpeg",
            "name": "John Smith",
            "sub": "Web Developer"
        },

    ]

    return (
        <main className='max-w-7xl mx-auto'>

            <div className="text-center mb-8">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#121643]">About AI-Assist</h1>
                <p className="mt-3">Learn more about our mission and the team behind AI-Assist.</p>
            </div>
            <section className='mt-12  mx-auto'>

                <div className='flex-none lg:flex mt-36  text-center lg:text-left'>
                    <div className=' w-full lg:w-1/2'>
                        <h1 className='text-2xl lg:text-4xl font-bold mb-4 '>Our Mission</h1>
                        <p>At AI-Assist, our mission is to revolutionize customer interactions through advanced AI technology. We strive to create solutions that enhance customer satisfaction, improve efficiency, and drive business growth.</p>
                    </div>
                    <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
                        <Image src={missonImg}></Image>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="text-2xl lg:text-4xl mb-4 font-bold  mt-44  relative">
                            Our Team
                        </h1>
                        <p className='mb-10'>Our team consists of industry experts, AI enthusiasts, and dedicated professionals who are passionate about innovation and customer success. We work collaboratively to bring you the best in AI-driven customer support.</p>
                    </div>

                    <div className='grid grid-cols-1 p-6 lg:p-0 gap-36  lg:grid-cols-3'>

                        {teamData.map((team, index) => (
                            <div className="card  bg-base-100 rounded-none  border-none" key={index}>

                                <Image src={team.img} width="500" alt='' height="200"></Image>
                                <div className="pt-3">
                                    <h2 className="card-title">{team.name}</h2>
                                    <p>{team.sub}</p>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>
            </section>

            <section className="lg:flex mt-44 text-center lg:text-left items-center justify-between bg-[#121643] py-12 px-20">
                <h1 className="text-white text-2xl lg:text-4xl font-bold">Join Us on Our Journey
                </h1>
                <button className="btn rounded-none mt-5 w-full lg:w-auto lg:mt-0">Get Started Today</button>
            </section>
        </main>
    );
}

export default About;