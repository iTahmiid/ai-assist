import React from 'react';

const bottom = ({ text, button }) => {
    return (
        <section className="lg:flex  mt-44 text-center lg:text-left items-center justify-between bg-[#121643] py-12 px-0 lg:px-20">
            <h1 className="text-white text-2xl lg:text-4xl font-bold">{text}</h1>
            <button className="btn rounded-none mt-5  lg:w-auto lg:mt-0">{button}</button>
        </section>
    );
};

export default bottom;