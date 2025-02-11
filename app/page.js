"use client";
import MiNombre from "./componentes/MiNombre";
import Toggle from "./componentes/Toggle";
import Cliqueando from "./componentes/Cliqueando";
import contando from "./componentes/Contando";
import Holi from "./componentes/Holi";
import DepliegueEnViernes from "./componentes/DespliegueEnViernes";
import CuentaFuegos from "./componentes/CuentaFuegos";
import Destino from "./componentes/Destino";
import ImagenCiudad from "./componentes/ImagenCiudad";
import Reloj from "./componentes/Reloj";

export default function Main(){
  return(
    <div>
       <div className="component-container">
          <h1>Listado de componentes</h1>

          <div className="component">
            <h2>Componente miNombre</h2>
            <MiNombre/>
          </div>

          <div className="component">
            <h2>Componente Toggle</h2>
            <Toggle/>
          </div>

          <div className="component">
            <h2>Componente Holi</h2>
            <Holi nombre={"Álvaro"}/>
            <Holi nombre={""}/>
          </div>
        </div>
    </div>
  )
}