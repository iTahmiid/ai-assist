import { NextResponse } from 'next/server';
require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

export async function POST(req, res) {
    const data = await req.json();
    console.log(data);

    try {
        const formattedHistory = data.history.map(item => ({
            role: item.role,
            parts: item.parts.map(part => ({ text: part }))
        }));

        const model = await genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = await model.startChat({
            history: formattedHistory,
        });
        const msg = data.message;

        const result = await chat.sendMessage(msg);
        const responseText = result.response.text();

        return new Response(responseText, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    } catch (error) {
        console.error("Error in /gemini:", error);
        return new Response("An error occurred", {
            status: 500,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
}
