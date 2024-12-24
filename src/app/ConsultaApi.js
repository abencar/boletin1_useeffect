import React, { useEffect, useState } from 'react';

export default function ConsultaApi(){

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const [titulos, setTitulos] = useState([])
    
    useEffect(() => {
        fetch(apiUrl).then(response =>{
            if (!response.ok) {
                throw new Error('La conexion a la api no funciona');
              }
              return response.json();
            }
        )
        .then(data => {       
            const nuevosTitulos = data.map(libro => libro.title);
            setTitulos(nuevosTitulos);
        })
        .catch(error => console.error(error));
        }, []);

    return(
        <div>
            {titulos.map(titulo =>
                <h1 key={titulo}>{titulo}</h1>
             )}
        </div>
    )
}