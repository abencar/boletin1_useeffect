import React, {useState, useEffect } from 'react';

export default function DetectorVentana(){

    const [ancho, setAncho] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () =>
            setAncho(window.innerWidth)
        )
    },[]);

    return(
        <div>
            <h1>El ancho actual de la pantalla es: {ancho}</h1>
        </div>
    )
}