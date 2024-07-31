'use client'
import React, { useEffect, useState } from 'react';
import { FaRobot } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import '../app/globals.css'

const TryDemoComponent = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getResponse = async () => {
        if (!value) {
            setError("Error! Please Ask A Question");
            return;
        }
        setError("");
        setLoading(true);
        setChatHistory(oldChatHistory => [
            ...oldChatHistory,
            {
                role: "user",
                parts: [value]
            },
            {
                role: "model",
                parts: ["loading"]
            }
        ]);
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
            const response = await fetch('http://localhost:3000/api/gemini', options);
            const data = await response.text();
            setChatHistory(oldChatHistory => oldChatHistory.map((chatItem, index) => {
                if (chatItem.parts[0] === "loading" && chatItem.role === "model") {
                    return {
                        ...chatItem,
                        parts: [data]
                    };
                }
                return chatItem;
            }));
            setValue("");
        } catch (error) {
            console.error(error);
            setError("Something went wrong");
        }
        setLoading(false);
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                getResponse();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [value, chatHistory]);

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
                            <div className="">
                                <div className='flex items-center gap-5 border-b p-3'>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-success"></span>
                                        <div className="bg-base-300 grid h-14 w-14 place-items-center"><FaRobot className='text-2xl' /></div>
                                    </div>
                                    <h4 className='text-xl font-bold'>Online</h4>
                                </div>
                            </div>
                            <div className="chatbox-body" id="chatbox-body">
                                <p className='bot-message mb-3 text-black p-4 font-bold'>Hello! how can I help you?</p>
                                {chatHistory.map((chatItem, _index) => (
                                    <div key={_index} className={`message ${chatItem.role === 'user' ? 'user-message' : 'bot-message'} font-bold  text-black`}>
                                        {chatItem.parts[0] === "loading" ? (
                                            <div className="loader ">
                                                <hr />
                                                <hr />
                                                <hr />
                                            </div>
                                        ) : (
                                            <p className='text-black'>{chatItem.parts.join('')}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="chatbox-footer">
                                <input
                                    type="text"
                                    className='outline-none pl-6'
                                    autoComplete='off'
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
        </div >
    );
};

export default TryDemoComponent;
