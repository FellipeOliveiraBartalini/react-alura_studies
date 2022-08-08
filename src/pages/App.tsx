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

	function finalizarTarefa() {
		if (selecionado) {
			setSelecionado(undefined);
			setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
				if (tarefa.id === selecionado.id) {
					console.log(1, tarefa);
					
					return {
						...tarefa,
						selecionado: false,
						completado: true
					}
				}
				console.log(2);
				
				return tarefa;
			}))
		}
	}

	return (
		<div className={style.AppStyle}>
			<Form setTarefas={setTarefas} />
			<List
				tarefas={tarefas}
				selecionaTarefa={selectTarefa}
			/>
			<Stopwatch
				selecionado={selecionado}
				finalizarTarefa={finalizarTarefa}	
			/>
		</div>
	);
}

export default App;
