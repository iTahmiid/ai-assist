'use client'
import React, { useEffect, useState, useRef } from 'react';
import { FaRobot } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import '../app/globals.css';
import Demo from './Demo';

const TryDemoComponent = () => {
    return (
        <div>
            <main className='flex-none gap-4 items-center lg:flex'>
                <div className="text-left my-8 w-auto lg:w-1/2">
                    <h1 className="text-2xl lg:text-4xl font-bold text-[#121643]">Try AI-Assist Demo</h1>
                    <p className="mt-3">Stay updated with the latest news, tips, and insights on AI and customer support.</p>
                </div>

                <section className="demo-section mt-10 w-full lg:w-1/2">
                    <Demo></Demo>
                </section>
            </main>
        </div>
    );
};

export default TryDemoComponent;
