import React, { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import ITarefa from '../../types/tarefa.type';
import Button from '../button';
import Clock from './clock';
import style from './stopwatch.module.scss';

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

function Stopwatch({ selecionado, finalizarTarefa }: Props) {
    const[ time, setTime ] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTime(timeToSeconds(selecionado.tempo))
        }
    }, [selecionado]);

    function countdown(time: number = 0) {
        setTimeout(() => {
            if (time >= 0) {
                setTime(time--);
                return countdown(time)
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>

            <div className={style.clockWrapper}>
                <Clock  time={time} />
            </div>

            <Button onClick={() => { countdown(time) }}>
                Começar
            </Button>
        </div>
    )
}

export default Stopwatch