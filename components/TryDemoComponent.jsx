'use client';
import { useEffect, useState } from 'react';
import React from 'react';
import { IoMdSend } from "react-icons/io";

const TryDemoComponent = () => {

    const [chatHistory, setChatHistory] = useState([]);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const getResponse = async () => {
        if (!value) {
            setError("Error! Please Ask A Question");
            return;
        }
        setError("");
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    history: chatHistory,
                    message: value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = await fetch('http://localhost:8000/gemini', options);
            const data = await response.text();
            console.log(data);
            setChatHistory(oldChatHistory => [
                ...oldChatHistory,
                {
                    role: "user",
                    parts: [value]
                },
                {
                    role: "model",
                    parts: [data]
                }
            ]);
            setValue("");
        } catch (error) {
            console.error(error);
            setError("Something went wrong");
        }
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                getResponse();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [value, chatHistory]); // Added value and chatHistory to the dependency array


    return (
        <div>
            <main className='flex-none gap-4 items-center lg:flex'>
                <div className="text-left my-8 w-auto lg:w-1/2">
                    <h1 className="text-2xl lg:text-4xl font-bold text-[#121643]">Try AI-Assist Demo</h1>
                    <p className="mt-3">Stay updated with the latest news, tips, and insights on AI and customer support.</p>
                </div>

                <section className="demo-section mt-10 w-full lg:w-1/2">
                    <div className="">
                        <div className="chatbox">
                            <div className="chatbox-header">
                                <h3 className='font-bold'>AI-Assist Demo Chatbot</h3>
                            </div>
                            <div className="chatbox-body" id="chatbox-body">
                                {chatHistory.map((chatItem, _index) => (
                                    <div key={_index} className="message bot-message font-bold p-4 px-5">
                                        <p> <span>{chatItem.parts.join('')}</span></p>
                                    </div>
                                ))}
                            </div>
                            <div className="chatbox-footer">
                                <input
                                    type="text"
                                    className='outline-none pl-6'
                                    id="user-input"
                                    placeholder="Type Something"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                                <button onClick={getResponse} className="btn text-2xl rounded-none border-none m-0 bg-white hover:bg-transparent">
                                    <IoMdSend />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TryDemoComponent;
