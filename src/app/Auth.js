import { useEffect, useState } from "react";

export default function Auth(){
    
    useEffect(() => {
        localStorage.setItem('Alvaro','AlvaroDAM')},[]
    );

    function onSubmit(e) {
        const name = e.get("usuario")
        let password = localStorage.getItem(name)
        if(password == e.get("password")) {
            alert('Bienvenido: '+name)
        }
        else {
            alert("Datos incorrectos")
        }
    }
    
    return(
        <div>
            <form action={onSubmit}>
                <label>Usuario <input type="text" id="usuario" name="usuario" /></label>
                <br/>
                <label>Contraseña<input type="text" id="password" name="password" /></label> 
                <button type="submit">Iniciar sesion</button>
            </form>   
        </div>
    )
}