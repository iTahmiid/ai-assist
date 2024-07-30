const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

app.post('/gemini', async (req, res) => {
    try {
        console.log(req.body.history);
        console.log(req.body.message);


        const formattedHistory = req.body.history.map(item => ({
            role: item.role,
            parts: item.parts.map(part => ({ text: part }))
        }));

        const model = await genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = await model.startChat({
            history: formattedHistory,
        });
        const msg = req.body.message;

        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = await response.text();
        res.send(text);
    } catch (error) {
        console.error("Error in /gemini:", error);
        res.status(500).send("Something went wrong");
    }
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
