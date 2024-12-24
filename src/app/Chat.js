import { useEffect, useState } from "react";

export default function Chat() {

    const [mensajeActual, setMensajeActual] = useState([]);
    const [indice, setIndice] = useState(0);

    const mensajes = [
        "Mensajes de prueba 1",
        "Mensajes de prueba 2",
        "Mensajes de prueba 3",
        "Mensajes de prueba 4",
        "Mensajes de prueba 5",
        "Mensajes de prueba 6",
        "Mensajes de prueba 7",
        "Mensajes de prueba 8",
        "Mensajes de prueba 9",
        "Mensajes de prueba 10"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (indice < mensajes.length) {
                setMensajeActual([...mensajeActual, mensajes[indice]])
                setIndice(indice + 1)
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [indice]);

    return (
        <div>
            {mensajeActual.map((mensaje, index) => (
                <p key={index}>{mensaje}</p>
            ))}
        </div>
    )
}