import React from "react";
import Item from "./item";
import style from './Lista.module.scss';

function Lista() {
    const tarefa = [
        {tarefa: "JavaScripy",tempo: "01:30:00"},
        {tarefa: "Html Css",tempo: "02:00:00"},
        {tarefa: "Php", tempo: "01:30:00"}
    ]

return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefa.map((item, index)=>(
               <Item
                    tarefa={item.tarefa}
                    tempo={item.tempo}
               />
            ))}           
        </ul>
    </aside>
) 
}
export default Lista