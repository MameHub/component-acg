import { useState } from "react";

export default function Reloj() {
    const [time, setTime] = useState();

    const horaActual = new Date();
    const hora = horaActual.getHours();
    const minutos = horaActual.getMinutes();
    const segundos = horaActual.getSeconds();

    return(
        <div>
            <p>{hora}:{minutos}:{segundos}</p>
        </div>
    )
}