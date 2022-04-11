import React, { useState } from "react";
import Item from "./item";
import style from './Lista.module.scss';

interface ITarefa{
    tarefa: string 
    tempo: string
}

function Lista({ tarefa}: {tarefa: ITarefa[] }) {
   
return (
    <aside className={style.listaTarefas}>
            <h2 onClick={()=>{             
                setTarefa ([...tarefa, {tarefa:'Bootstrap',tempo:'01:00:00'}])
                console.log("H2 clicado",tarefa )
            }}>Estudos do dia</h2>
        <ul>
            {tarefa.map((item, index)=>(
               <Item
                    key={index}
                    tarefa={item.tarefa}
                    tempo={item.tempo}
               />
            ))}           
        </ul>
    </aside>
) 
}
export default Lista