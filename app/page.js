"use client"
import Image from "next/image";
import { useState } from "react";

export default function Componentes() {
  return (
    <>
      <Toggle/>
      {/* <Holi/>
      <Destino/> */}
    </>
  );
}

export function Toggle() {
  return (
    <button className="btn" type="button">off</button>
  );
}

// export function Holi() {
//   return (
    
//   );
// }

// export function Destino() {
//   return (
    
//   );
// }