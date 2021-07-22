import { useState } from "react"


export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState)
    }

                               //e.target
    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}

/*
NOTAS:
 - Esto es un Custom Hook que se va a encargar de manejar los formularios.
 Si tuviera que hacer más formularios usaría este mismo hook. Por eso se hace por separado del
 funcional component. Para poder aprovecharlo. 

 - Es una const exportada y llamada useForm que es igual a una arrow function(función de flecha). Se le pasa de argumento un 
 objeto vacío para que si no nos pasa nada el target.name o target.value no reviente la app. 
 - Luego se llama al useState para manejar el estado de esta función(values = {}). 
 - Después hacemos una handleInputChange que es igual a una arrow function a la que se le pasa directamente desestructurado el 
 target de lo que seria e.target.
 - Dentro de esta modificamos el estado de la función useForm(el custom hook) pasándole el objeto como estaba con el operador spread
 y dándole el target.value a cada elemento en su target.name correspondiente.
 - Finalmente retornamos como un arreglo el estado de la función y la constante que maneja este. 

*/
