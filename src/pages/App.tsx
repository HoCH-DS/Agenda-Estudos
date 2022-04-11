import React, { useState } from 'react';
import Butao from '../components/Butao';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista/Lista';
import style from './App.module.scss';

function App() {
  const [tarefa , setTarefa] = useState ([
    {tarefa: "JavaScripy",tempo: "01:30:00"},
    {tarefa: "Html Css",tempo: "02:00:00"},
    {tarefa: "Php", tempo: "01:30:00"}
]
)

  return (
    <div className={style.AppStyle} >     
        <Formulario setTarefa={setTarefa}/>
        <Lista tarefa={tarefa}/>
        <Cronometro/>
    </div>
  );
}
export default App;