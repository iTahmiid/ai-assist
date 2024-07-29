import React from 'react';

const Title = ({ title }) => {
    return (
        <div>
            <h1 className="text-3xl mb-5 lg:mb-0 lg:text-4xl text-[#121643] font-bold">{title}</h1>
        </div>
    );
};

export default Title;