// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require("dotenv").config();

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// async function generateResponse(prompt) {
//   try {
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     console.log(response.text())
//     return response.text(); // Return the generated text
//   } catch (error) {
//     console.error("Error generating response:", error);
//     return "Sorry, an error occurred while processing your request.";
//   }
// }

// module.exports = generateResponse;

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { config } = require("dotenv");
require("dotenv").config({path:'./src/Config/.env'}); 


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



const generateContent = async (prompt) => {

const result = await model.generateContent(prompt);

return (result.response.text())
}



module.exports=generateContent