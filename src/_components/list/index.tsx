import React from 'react';
import Item from './item';
import style from './list.module.scss';

function List() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>

            <ul>
                {
                    tarefas.map((item, index) => (
                        <Item key={index} { ...item } />
                    ))
                }
            </ul>
        </aside>
    )
}

export default List;
