import OpenAI from "openai";
import { useState } from "react";
import { sendTextOpenai } from "../../apis/openai/openaiApi";

function OpenaiApiModal() {
    const [ inputValue, setInputValue ] = useState("");

    const handleSend = async () => {
        const respose = await sendTextOpenai(inputValue);
        console.log(respose.output_text);
    }

    return <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleSend}>전송</button>
    </div>
    
}

export default OpenaiApiModal;