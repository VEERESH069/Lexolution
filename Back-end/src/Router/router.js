const { Router } = require('express');
const generateContent = require('../gemini/gemini'); 

const askrouter = Router();
askrouter.get('/',(res,req)=>{
    console.log("hello")
})

askrouter.post('/', async (req, res) => {
    
    const  agreementText  = req.body.prompt;
     console.log(agreementText)
   
    if (!agreementText ){
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
       
        const response = await generateContent(agreementText);
        res.send(response);

    } catch (error) {
        console.error("Error generating agreement:", error);
        res.status(500).json({ error: "An error occurred while generating the agreement." });
    }
});


module.exports = askrouter;

