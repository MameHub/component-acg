import { useState } from "react";

export default function MiNombre() {
    const colors = ["color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9", "color10"];
    const [colorClass, setColorClass] = useState(colors[0]);
    
    const changeColor = () => {
        let newColor;
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === colorClass);
        setColorClass(newColor);
    }

    return(
        <div onMouseEnter={changeColor}>
            <p className={colorClass}>Álvaro Cañas González</p>
            <p className={colorClass}><a href="https://github.com/MameHub" target="_blanck">Github</a></p>
        </div>
    );
}