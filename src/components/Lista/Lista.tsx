import React from "react";
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
                <li className={style.item} key={index}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>     
                </li>
            ))}           
        </ul>
    </aside>
) 
}
export default Lista