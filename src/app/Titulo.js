import { useEffect } from "react";

export default function Titulo() {
    useEffect(() => {
        document.title = "Bienvenido a mi app";
    });
    
}