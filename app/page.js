"use client";
import MiNombre from "./componentes/miNombre";
import Toggle from "./componentes/toggle";
import Cliqueando from "./componentes/cliqueando";
// import Contando from "./componentes/contando";
import Holi from "./componentes/holi";
import DepliegueEnViernes from "./componentes/despliegueEnViernes";
import CuentaFuegos from "./componentes/cuentaFuegos";
import Destino from "./componentes/destino";
import ImagenCiudad from "./componentes/imagenCiudad";
import Reloj from "./componentes/reloj";
import Contando from "./componentes/contando";

export default function Main(){
  return(
    <div>
       <div className="component-container">
          <h1>Listado de componentes</h1>

          <div className="component">
            <h2>Componente MiNombre</h2>
            <MiNombre/>
          </div>

          <div className="component">
            <h2>Componente Toggle</h2>
            <Toggle/>
          </div>

          <div className="component">
            <h2>Componente Cliqueado</h2>
            <Cliqueando/>
          </div>

          <div className="component">
            <h2>Componente Holi</h2>
            <Holi nombre={"Álvaro"}/>
            <Holi nombre={""}/>
          </div>

          <div className="component">
            <h2>Componente Despliegue en viernes</h2>
            <DepliegueEnViernes/>
          </div>
          
          <div className="component">
            <h2>Componente Destino</h2>
            <Destino/>
          </div>
          
          <div className="component">
            <h2>Componente Contando</h2>
            <Contando/>
          </div>

        </div>
    </div>
  )
}