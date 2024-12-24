import React, {useState, useEffect } from 'react';

export default function Ejercicio4(){

    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHora(new Date().toLocaleTimeString()); 
          }, 1000);

          return(clearInterval(intervalId))
    },[]);

    return(
        <div>
            <h1>La hora actual es: {hora}</h1>
        </div>
    )
}