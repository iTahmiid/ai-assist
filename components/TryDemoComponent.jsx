'use client'
import React, { useEffect, useState, useRef } from 'react';
import '../app/globals.css';
import { FaRobot } from "react-icons/fa6";
import ReactMarkdown from 'react-markdown';
import { IoMdSend } from "react-icons/io";
import '../app/globals.css';

const TryDemoComponent = () => {
     const [chatHistory, setChatHistory] = useState([]);
     const [value, setValue] = useState("");
     const [error, setError] = useState("");
     const [loading, setLoading] = useState(false);
     const bottomRef = useRef(null);
     const chatboxBodyRef = useRef(null);

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
          } catch (error) {
               console.error(error);
               setError("Something went wrong");
          }
          setLoading(false);

          // Scroll to bottom after updating chat history
          chatboxBodyRef.current?.scrollTo({ top: chatboxBodyRef.current.scrollHeight, behavior: 'smooth' });
     }

     useEffect(() => {
          const handleKeyPress = (event) => {
               if (event.key === 'Enter') {
                    event.preventDefault(); // Prevent form submission if within a form
                    getResponse();
               }
          };

          document.addEventListener('keydown', handleKeyPress);

          return () => {
               document.removeEventListener('keydown', handleKeyPress);
          };
     }, [value, chatHistory]);

     useEffect(() => {
          // Ensure scrolling to the bottom when chatHistory updates
          chatboxBodyRef.current?.scrollTo({ top: chatboxBodyRef.current.scrollHeight, behavior: 'smooth' });
     }, [chatHistory]);

     return (
          <div className='max-w-7xl mx-auto'>
               <main className='flex-none gap-4 items-center lg:flex'>
                    <div className="text-left my-8 w-auto lg:w-1/2">
                         <h1 className="text-2xl lg:text-4xl font-bold text-[#121643]">Try AI-Assist Demo</h1>
                         <p className="mt-3">Stay updated with the latest news, tips, and insights on AI and customer support.</p>
                    </div>

                    <section className="demo-section mt-10 w-full lg:w-1/2">
                         <div className="chatbox">
                              <div className="chatbox-header">
                                   <div className='flex  gap-2 '>


                                        <div className="place-items-center">
                                             <img className='w-14 rounded-full' src="https://i.ibb.co/dMCywKL/a53907b134abfe7fdc26da8eeef1e268.jpg" alt="" />
                                        </div>

                                        <div>
                                             <h4 className='text-xl '>Need Help?</h4>
                                             <h3>Online</h3>
                                        </div>
                                   </div>
                              </div>
                              <div className="chatbox-body custom-scroll" id="chatbox-body" ref={chatboxBodyRef}>
                                   <p className='bot-message mb-3 mt-7 text-black p-4'>Hello! How can I help you?</p>
                                   {chatHistory.map((chatItem, index) => (
                                        <div key={index} className={`message ${chatItem.role === 'user' ? 'user-message' : 'bot-message'} text-black`}>
                                             {chatItem.parts[0] === "loading" ? (
                                                  <div className='space-y-2'>
                                                       <div class="h-2 w-80 md:w-96 max-w-md  bg-gray-600  rounded-full animate-pulse"></div>
                                                       <div class="h-2 w-80 md:w-96 max-w-md  bg-gray-600  rounded-full animate-pulse"></div>
                                                       <div class="h-2 w-80 md:w-96 max-w-md  bg-gray-600  rounded-full animate-pulse"></div>

                                                  </div>
                                             ) : (
                                                  <ReactMarkdown>{chatItem.parts.join('')}</ReactMarkdown>
                                             )}
                                        </div>
                                   ))}
                                   <div ref={bottomRef} />

                              </div>
                              <div className="p-3 my-3 flex items-center rounded-b-lg">
                                   <input
                                        type="text"
                                        className='flex-grow bg-[#f5f5f5] outline-none pl-4 py-3 rounded-full  text-gray-800'
                                        autoComplete='off'
                                        id="user-input"
                                        placeholder="Type a message"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                   />
                                   <button
                                        onClick={getResponse}
                                        onTouchStart={getResponse}
                                        className="ml-3  text-white rounded-full bg-[#797DFC]  p-3 flex items-center justify-center "
                                   >
                                        <IoMdSend className="text-xl" />
                                   </button>
                              </div>
                         </div>
                    </section>
               </main>
          </div>
     );
};

export default TryDemoComponent;
