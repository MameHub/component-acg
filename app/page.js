"use client"
import Image from "next/image";
import { useState } from "react";

export default function Componentes() {
  return (
    <>
      <div><Toggle/></div>
      <div><br/></div>
      <Holi nombre="Álvaro" />
      <Holi nombre="" />
      <div><br/></div>
      {/* <Destino/> */}
    </>
  );
}

export const Toggle = () => {
  const[on, setOn] = useState(false);

  return(
    <button className={on?"btnOn":"btnOff"} onClick = {() => setOn(!on)}>
      {on ? "on" : "off"}
    </button>
  )
}

export function Holi({nombre}) {
  return (
    <div>
      {nombre && <p>Hola {nombre}, como estas?</p>}
      {!nombre && <p>Hola. No te conozco</p>}
    </div>
  );
}

// export function Destino() {
//   return (
    
//   );
// }