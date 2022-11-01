import './App.css';
import React from 'react';
import Logo from './components/Logo';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion'>
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
