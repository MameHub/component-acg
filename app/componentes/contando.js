import { useState } from "react"

export default function Contando(){
    const [counter, setCounter] = useState(0);
    const counterAdd = (num) => {
        setCounter(prevCounter => prevCounter + num);
    }
    const reset = () => {
        setCounter(0);
    }
    return(
        <div>
            <p onMouseEnter={reset}>Contador: {counter}</p>
            <div className="buttons">
                <button className="btn" onClick={() => counterAdd(1)}>1</button>
                <button className="btn" onClick={() => counterAdd(10)}>10</button>
                <button className="btn" onClick={() => counterAdd(100)}>100</button>
                <button className="btn" onClick={() => counterAdd(1000)}>1000</button>
            </div>
        </div>
    )
}