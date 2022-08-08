import React from 'react';
import style from'./clock.module.scss';

interface Props {
    time: number | undefined
}

function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const [minutesTen, minutesUnit] = String(minutes).padStart(2, '0');
    const [secondsTen, secondsUnit] = String(seconds).padStart(2, '0');

    return (
        <React.Fragment>
            <span className={style.clockNumber}>{ minutesTen }</span>
            <span className={style.clockNumber}>{ minutesUnit }</span>
            <span className={style.clockDivisor}>:</span>
            <span className={style.clockNumber}>{ secondsTen }</span>
            <span className={style.clockNumber}>{ secondsUnit }</span>
        </React.Fragment>
    )
}

export default Clock