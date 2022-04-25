import Butao from "../Butao"
import { Relogio } from "./Relogio"
import style from "./Cronometro.module.scss"
import { ITarefa } from "../../types/tarefa"
import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../common/utils/date"

interface Props {
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>()
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(String(selecionado?.tempo)))
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            Tempo :{tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Butao onClick={() => regressiva(tempo)}>
                Iniciar
            </Butao>
        </div>
    )
}