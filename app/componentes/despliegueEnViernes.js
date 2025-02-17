import { useState } from "react";

export default function DespliegueEnViernes() {
    const [text, setText] = useState("");
    const words = ["despliegue", "deploy"];

    const red = words.some(word =>
    text.toLowerCase().includes(word) && text.toLowerCase().includes("viernes"));

    return(
        <div>
            <textarea
                placeholder="Texto"
                className={`textBox ${red ? "alert" : ""}`}
                value={text}
                onChange={(e) => setText(e.target.value)}>
            </textarea>
            {red && (<a href="https://youtu.be/Vhmek8362Fc" target="_blank">https://youtu.be/Vhmek8362Fc</a>)}
        </div>
    )
}