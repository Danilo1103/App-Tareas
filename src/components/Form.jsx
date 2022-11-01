import React, { useState } from "react"
import "../styles/Form.css"
import { v4 as uuidv4 } from "uuid"

export default function Form(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    };
    
    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {   
            id: uuidv4(),
            texto: input,
            complet: false
        };
        props.onSubmit(tareaNueva)
    };


    return(
        <form className="form-container" 
        onSubmit={manejarEnvio}
        >
            <input
                className="form-input" 
                type="text" 
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="form-button" type="submit">
                Agregar tarea
            </button>
        </form>
    )
}