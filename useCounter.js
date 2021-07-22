import { useState } from "react"

export const useCounter = ( initialState = 10 ) => {

    //Creamos un estado
    const [counter, setCounter] = useState(initialState); //10

    //Función que incrementa el estado(state) en +1
    const increment = () => {
        setCounter( counter + 1);
    }

    //Función que decrementa el estado(state) en -1
    const decrement = () => {
        setCounter( counter - 1);
    }

    //Función que pone el contador a su estado inicial.
    const reset = () => {
        setCounter( counter );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}

