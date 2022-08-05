import React from 'react';
import ITarefa from '../../../types/tarefa.type';
import style from '../list.module.scss';

function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
    console.log('item atual > ', { tarefa, tempo, selecionado, completado, id });
    
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item
