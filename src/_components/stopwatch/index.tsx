import React, { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import ITarefa from '../../types/tarefa.type';
import Button from '../button';
import Clock from './clock';
import style from './stopwatch.module.scss';

interface Props {
    selecionado: ITarefa | undefined
}

function Stopwatch({ selecionado }: Props) {
    const[ time, setTime ] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTime(timeToSeconds(selecionado.tempo))
        }
    }, [selecionado]);

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>

            Tempo: {time}

            <div className={style.clockWrapper}>
                <Clock />
            </div>

            <Button>
                Começar
            </Button>
        </div>
    )
}

export default Stopwatch