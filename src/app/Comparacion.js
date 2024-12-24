import { useEffect, useState } from "react";

export default function Comparacion(){

    const [contadorRenderizado, setContadorRenderizado] = useState(0)
    const [contador, setContador] = useState(0)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setContador(contador + 1); 
          }, 1000);

          return() => clearInterval(intervalId)
    },[contador]);

    useEffect(() => {
        setContadorRenderizado(contadorRenderizado + 1)
    });

    return(
        <div>
            <h1>Por cada renderizado: {contadorRenderizado}</h1>
            <h1>Por cada actualizacion de el de arriba: {contador}</h1>
        </div>
    )
}