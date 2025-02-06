"use client";
import Raul from "../../component-group/app/componentes/Raul.js";
import Contando from "../../component-group/app/componentes/Contando.js";
import Toggle from "../../component-group/app/componentes/Toggle.js";
import CuentaFuegos from "../../component-group/app/componentes/CuentaFuegos.js";
import Reloj from "../../component-group/app/componentes/Reloj.js";
import Cliqueando from "../../component-group/app/componentes/Cliqueando.js";
import DespliegueEnViernes from "../../component-group/app/componentes/DespliegueEnViernes.js";
import Destino from "../../component-group/app/componentes/Destino.js";
import {Holi} from "../../component-group/app/componentes/Holi.js";

export default function Main(){
  return(
    <div>
       <div className="componentes-container">
          <h1>Listado de componentes</h1>
          <h3>Jesús Ferrer, Raúl Bermudez, Alvaro Cañas</h3>
        
          <div className="tarjeta">
            <h2>Componente Raul</h2>
            <Raul nombre="Raúl" apellidos="Bermúdez González" redsocial="Github"/>
          </div>

          <div className="tarjeta">
            <h2>Componente Toggle</h2>
            <Toggle />
          </div>

          <div className="tarjeta">
            <h2>Componente Cliqueando</h2>
            <Cliqueando />
          </div>
          
          <div className="tarjeta">
            <h2>Componente Contando</h2>
            <Contando />
          </div>

          <div className="tarjeta">
            <h2>Componente Holi</h2>
            <Holi nombre="Raul" />
            <Holi nombre="" />
          </div>

          <div className="tarjeta">
            <h2>Componente DespliegueEnViernes</h2>
            <DespliegueEnViernes />
          </div>

          <div className="tarjeta">
            <h2>Componente CuentaFuegos</h2>
            <CuentaFuegos />
          </div>

          <div className="tarjeta">
            <h2>Componente Destino</h2>
            <Destino />
          </div>

          <div className="tarjeta">
            <h2>Componente Reloj</h2>
            <Reloj />
          </div>
        </div>
    </div>
  )
}