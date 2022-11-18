import React from 'react'
import ReactDOM from 'react-dom/client'
import { GitExpertApp } from './GifExpertApp'
import './styles.css';

//Usualmente vamos a tener la parte de entrada de la aplicacion en el src,
//Mantengamos el main lo mas limpio posible.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitExpertApp/>
  </React.StrictMode>

  //repasar el modo stricto.

)
