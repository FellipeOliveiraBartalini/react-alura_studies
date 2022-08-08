import ITarefa from '../../types/tarefa.type';
import Item from './item';
import style from './list.module.scss';

interface Props {
    tarefas: ITarefa[]
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>

            <ul>
                {
                    tarefas.map((item) => (
                        <Item
                            selecionaTarefa={selecionaTarefa}
                            key={item.id}
                            { ...item }
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default List;
