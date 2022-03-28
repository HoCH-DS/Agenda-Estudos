import React from "react";
import Butao from "../Butao";
import style from './Form.module.scss';
class Formulario extends React.Component{
    render(){
        return(
            <form className={style.novaTarefa}>
               <div className={style.inputContainer}>
                   <label htmlFor="tarefa">Adicione um Estudios</label>
                   <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Adicione um estudio"
                        required
                    />
               </div>
               <div className={style.inputContainer}>
                   <label htmlFor="tempo">Determine um Tempo</label>
                   <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        step="1"
                        min="00:00:00"
                        max="02:00:00"
                        required
                    />
               </div>
               <Butao/>
            </form>
        )
    }
}
export default Formulario