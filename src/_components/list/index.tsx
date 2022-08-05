import ITarefa from '../../types/tarefa.type';
import Item from './item';
import style from './list.module.scss';

function List({ tarefas }: { tarefas: Array<ITarefa> }) {
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
