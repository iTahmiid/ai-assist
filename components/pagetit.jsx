import React from 'react';

const Pagetit = ({ title, desc }) => {
    return (
        <div className="text-center my-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-[#121643]">{title}</h1>
            <p className="mt-3">{desc}</p>
        </div>
    );
};

export default Pagetit;