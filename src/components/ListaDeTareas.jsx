import React, { useState } from "react";
import "../styles/ListaDeTareas.css"
import Form from "./Form";
import Tarea from "./Tarea";

export default function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log(tarea)
        if (tarea.texto.trim()) {
            tarea.text = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas)
        };
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas)
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.id === id) {
                tarea.complet = !tarea.complet
            }
            return tarea
        });
        setTareas(tareasActualizadas)
    };

    return (
        <>
            <Form onSubmit={agregarTarea} />
            <div className="tareas-lista-container">
                {
                    tareas.map((tarea) => (
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            complet={tarea.complet}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    ))
                }
            </div>
        </>
    )
}