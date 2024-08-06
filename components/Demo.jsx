'use client'

import React, { useEffect, useState, useRef } from 'react';
import { FaRobot } from "react-icons/fa6";
import ReactMarkdown from 'react-markdown';
import { IoMdSend } from "react-icons/io";
import '../app/globals.css';

const Demo = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

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
            const response = await fetch('https://ai-assist-a.vercel.app/api/gemini', options);
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
            console.log(data)
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

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    return (
        <div className="chatbox">
            <div className="chatbox-header">
                <div className='flex items-center gap-2'>
                    <div className="indicator">
                        <span className="indicator-item"></span>
                        <div className="grid h-10 w-10 place-items-center">
                            <FaRobot className='text-xl' />
                        </div>
                    </div>
                    <h4 className='text-sm font-bold'>Online</h4>
                </div>
            </div>
            <div className="chatbox-body custom-scroll" id="chatbox-body">
                <p className='bot-message mb-3 mt-7 text-black p-4 font-bold'>Hello! How can I help you?</p>
                {chatHistory.map((chatItem, index) => (
                    <div key={index} className={`message ${chatItem.role === 'user' ? 'user-message' : 'bot-message'} font-bold text-black`}>
                        {chatItem.parts[0] === "loading" ? (
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        ) : (
                         <ReactMarkdown>{chatItem.parts.join('')}</ReactMarkdown>
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
                <button
                    onClick={getResponse}
                    onTouchStart={getResponse}
                    className="btn text-2xl rounded-none border-none m-0 bg-white hover:bg-transparent"
                >
                    <IoMdSend />
                </button>
            </div>
        </div>
    );
};

export default Demo;
