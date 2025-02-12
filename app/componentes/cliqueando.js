import { useState } from "react";

export default function Cliqueando() {
    let contador;
    let mensaje =
        contador === 0 ? "No has clicado aún" :
        contador === 1 ? "Has clicado 1 vez" :
        "Has clicado {contador} veces"
    const reset = () => {
        contador = 0;
    }
    const sum = () => {
        contador++;
    }
    return(
        <div>
            <p className="" onMouseEnter={reset}>
                contador === 0 ? "No has clicado aún" :
                contador === 1 ? "Has clicado 1 vez" :
                "Has clicado {contador} veces"
                </p>
            <button className="" onClick={sum}>Incrementar</button>
        </div>
    )
}