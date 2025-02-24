import { useState } from "react";

export default function Reloj() {
    const [time, setTime] = useState();

    const horaActual = new Date();
    const horaCompleta = horaActual.toLocaleTimeString();

    return(
        <div>
            <p>{horaCompleta}</p>
        </div>
    );
}