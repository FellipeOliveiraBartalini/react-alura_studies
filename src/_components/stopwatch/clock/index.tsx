import React from 'react';
import style from'./clock.module.scss';

function Clock() {
    return (
        <React.Fragment>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockDivisor}>:</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
        </React.Fragment>
    )
}

export default Clock