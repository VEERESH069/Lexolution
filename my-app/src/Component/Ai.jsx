import { useState } from "react";
import "../Styles/ai.css"; 
import axios from "axios";

const GeminiAIChat = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const askComrade = async () => {
    if (!userInput.trim()) return;
    
   let ans= await axios.post("https://lexolaw-codeofduty-2-rkc6.onrender.com/ask",{
      prompt:userInput
    })
   console.log("ans",ans);
       setResponse("Thinking...");
    setTimeout(() => {
      setResponse(`Comrade AI: "${ans.data}"`);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <h2>Ask Comrade</h2>
      <div>
      <textarea
        id="userInput"
        placeholder="Type your question here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={askComrade}>Submit</button></div>
      <p id="response">{response}</p>
    </div>
  );
};

export default GeminiAIChat;
