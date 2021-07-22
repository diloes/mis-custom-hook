import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true); //añadido en el video de useRef

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => { 

        return () => { //Cuando el efecto se desmonte(cuando el useFetch deje de funcionar)
            isMounted.current = false; //cambia el valor del objeto .current a false
        }

    }, [])

    useEffect( () => {

        //Para que salga loading cuando apretamos el botón hasta que sale la siguiente cita
        setState({ data: null, loading: true, error: null })

        fetch( url ) //Petición GET a url
            .then( resp => resp.json() ) //Cuando url responda, lo que nos responde(resp) lo pasamos a .json
            .then( data => { //data es la resp en formato json

                if( isMounted.current ) { //Si isMounter.current es true...
                    setState({
                        loading: false, //porque ya terminó de cargar
                        error: null, //porque si hemos llegado aquí es que no ha habido ningún error
                        data //esto es igual a la data que es la resp en .json
                    });
                }               
               
            });

    }, [url]); //Este efecto se activará cuando url cambie

    return state; //retornamos el estado del hook que es el objeto con los tres elementos

}

/*
NOTAS:
 - ¿Para qué nos sirve useRef?
    Cuando le damos al botón para mostrar una cita de walter white, si le damos a ocultar antes de que llegue a  
    mostrarse se nos romperá el programa y nos dará un error. 
    Utilizamos el useRef para evitar esto. 
*/


