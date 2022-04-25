import React from "react"

import Butao from "../Butao"

import style from './Form.module.scss'

import { v4 as uuidv4 } from 'uuid'

import { ITarefa } from '../../types/tarefa'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>
{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas,
        { ...this.state, selecionado: false, completado: false, id: uuidv4() }])

        this.setState({
            tarefa: "",
            tempo: "00:00",
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um Estudios</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
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
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        min="00:00:00"
                        max="02:00:00"
                        required
                    />
                </div>
                <Butao type="submit">
                    Adicionar
                </Butao>
            </form>
        )
    }
}
export default Formulario