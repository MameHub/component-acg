import { useState } from "react";

export default function CuentaFuegos() {
    const [fuego, setFuego] = useState(0);

    const fire = () => {
        setFuego(prevCounter => prevCounter + 1);
    }

    const reset = () => {
        setFuego(0);
    }

    return(
        <div>
            <button onClick={fire}>
                Añadir fuego
            </button>
            <p onMouseEnter={reset}>{fuego}</p>
            <img></img>
        </div>
    );
}