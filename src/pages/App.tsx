import React, { useState } from 'react';
import ITarefa from '../types/tarefa.type';
import Form from '../_components/form';
import List from '../_components/list';
import Stopwatch from '../_components/stopwatch';
import style from './app.module.scss';

function App() {
    const [ tarefas, setTarefas ] = useState<Array<ITarefa>>([]);
	const [selecionado, setSelecionado] = useState<ITarefa>();

	function selectTarefa(tarefaSelecionada: ITarefa) {
		setSelecionado(tarefaSelecionada);
		setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
			...tarefa,
			selecionado: tarefa.id === tarefaSelecionada.id ? true : false
		})))
	}

	return (
		<div className={style.AppStyle}>
			<Form setTarefas={setTarefas} />
			<List
				tarefas={tarefas}
				selecionaTarefa={selectTarefa}
			/>
			<Stopwatch selecionado={selecionado} />
		</div>
	);
}

export default App;
