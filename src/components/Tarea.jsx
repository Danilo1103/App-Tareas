import React from "react";
import "../styles/Tarea.css"
import {BsXSquare} from "react-icons/bs"

export default function Tarea({ id, texto, complet, completarTarea, eliminarTarea }){ 
    return(
        <div className={complet ? 
        'tarea-container complet' :
        'tarea-container'}>
            <div 
            className="tarea-text" 
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-icon-container"> 
                <BsXSquare className="tarea-icon" 
                    onClick={() => eliminarTarea(id)}
                />
            </div>
        </div>
    )
}