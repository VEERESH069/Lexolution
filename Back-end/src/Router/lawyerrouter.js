const { Router } = require ( 'express');
const { default: run } = require('../gemini/geminlaw');



const lawyerrouter = Router();
// lawyerrouter.get('/',(req, res)=>{
//     console.log("Hello Lawyer")
// })

lawyerrouter.post('/', async (req, res) => {
    
   
    const { agreementText } = req.body;
    if (!agreementText ){
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
       
        const response = await run();
        res.send(response);

    } catch (error) {
        console.error("Error generating agreement:", error);
        res.status(500).json({ error: "An error occurred while generating the agreement." });
    }
});


module.exports = lawyerrouter;

