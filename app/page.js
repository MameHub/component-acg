"use client"

import Image from "next/image";
import { useState } from "react";

export default function Componentes() {
  return (
    <Cliqueando/>
  );
}

export function Cliqueando() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count+1)} type="button" className="btn">Cliquea</button>
      <h1 className="tittle">Has pulsado {count} veces el botón</h1>
    </div>
  )
}