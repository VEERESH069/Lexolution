// src/utils/execution.jsx
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

export const getPrimeSum = async () => {
    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-pro',
        tools: [
            {
                codeExecution: {},
            },
        ],
    });

    const result = await model.generateContent(
        'What is the sum of the first 50 prime numbers? ' +
        'Generate and run code for the calculation, and make sure you get all 50.'
    );

    return result.response.text();
};