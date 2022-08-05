import React from 'react';
import style from '../list.module.scss';

function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item
