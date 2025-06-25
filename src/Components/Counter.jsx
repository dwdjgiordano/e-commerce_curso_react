import React from "react";
import { useState, useEffect } from "react";

function Counter(){
    const [counter, setCounter] = useState(0)

    const handleAdd = () => setCounter(counter + 1)
    const handleSub = () => setCounter(counter - 1)

useEffect(()=> {
    console.log('lo que sea') // se va a ejecutar en el montaje del componente
    return () =>{
        console.log('desmonte del componente') // se ejecuta cuando se desmonta el componente
    }
    },[counter] //array de dependencias, se ejecutan cada vez que cambia la dependencias, o sea el componente counter
)

    return(
        <div>
            <p>{counter}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
        </div>
    )
}

export default Counter
