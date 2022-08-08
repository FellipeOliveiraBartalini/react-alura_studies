import React from 'react';
import ITarefa from '../../../types/tarefa.type';
import style from '../list.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Item({tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
}: Props) {
    console.log('item atual > ', { tarefa, tempo, selecionado, completado, id });
    
    return (
        <li className={style.item} onClick={() => selecionaTarefa(
            {
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            }
        )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item
