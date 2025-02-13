import { useState } from "react";

export default function DespliegueEnViernes() {
    const [text, setText] = useState("");

    const words = ["despliegue", "deploy"];
    const red = words.some(() =>
    text.toLowerCase.includes(words) && text.toLowerCase.includes("viernes")
    || text.toLowerCase.includes("viernes") && text.toLowerCase.includes(words));


    return(
        <div>
            <textarea placeholder="Texto" className={`textBox ${red ? "alert" : ""}`} value={text} onChange={(e) => setText(red.target.value)}></textarea>
        </div>
    )
}