import React, {useState, useEffect } from 'react';

export default function contador(){

    const [contador,setContador] = useState(0);
    useEffect(() => {
        document.title = contador
    },[]);

    return(
        <div>
            <button onClick={() => setContador(contador + 1)}>+1</button>
            {contador}
        </div>
    )
}