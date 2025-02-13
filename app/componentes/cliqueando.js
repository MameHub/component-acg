import { useState } from "react";

export default function Cliqueando() {
    const [count, setCount] = useState(0);

    let mensaje =
        count === 0 ? "No has clicado aún" :
        count === 1 ? "Has clicado 1 vez" :
        `Has clicado ${count} veces`;

    const sum = () => {
        setCount(prevCounter => prevCounter + 1);
        console.log(count);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div>
            <p className="" onMouseEnter={reset}>{mensaje}</p>
            <button className="btn" onClick={sum}>Incrementar</button>
        </div>
    )
}