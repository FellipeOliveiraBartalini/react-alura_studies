import React from 'react';
import { timeToSeconds } from '../../common/utils/date';
import Button from '../button';
import Clock from './clock';
import style from './stopwatch.module.scss';

function Stopwatch() {
    console.log('time > ', timeToSeconds('00:03:56'))
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>

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