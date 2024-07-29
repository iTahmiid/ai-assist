import Image from 'next/image';
import React from 'react';
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
        <main className='max-w-7xl mx-auto'>

            <Pagetit
                title="AI-Assist Blog" desc="Stay updated with the latest news, tips, and insights on AI and customer support."></Pagetit>



            <section className='mt-24'>
                <h1 className='text-center text-2xl lg:text-3xl mb-[15px] font-bold'>Recent Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogData.map((blog, index) => (
                        <div className="card border-opacity-20 border-gray-300 bg-base-100 border rounded-none w-full" key={index}>

                            <div className="card-body">
                                <h2 className="text-xl lg:text-2xl font-bold mt-2 text-[#121643]] ">{blog.title}</h2>
                                <p className="mt-3 text-[#121643bf]">{blog.description}</p>
                                <a href="#" className="font-bold text-sm text-[#121643]">Read More &#8594;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Bottom text="Start Your Free Trial Now" button="Get Started"></Bottom>
        </main>
    );
}

export default blog