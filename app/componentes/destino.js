import { useState } from "react"; 

export default function Destino() {
    const [option, setOption] = useState(0);
    const ciudades = {
        "Córdoba" : "https://images.unsplash.com/photo-1623002866514-4ebad37868fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Madrid" : "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFkcmlkfGVufDB8fDB8fHww",
        "León" : "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1622719380944-L9E4D91AQST5A5199OC2/que-ver-en-leon-catedral.jpg",
        "Santiago de compostela" : "https://www.pilgrim.es/wp-content/uploads/2019/03/cathedral-235228.jpg"
    };

    return(
        <div>
            <select value={option[0]}>
                <option>{ciudades[0]}</option>
                <option>{ciudades[1]}</option>
                <option>{ciudades[2]}</option>
                <option>{ciudades[3]}</option>
            </select>
            <img src={ciudades[option]}></img>
        </div>
    )
}