import React, { useState } from 'react';
import ITarefa from '../types/tarefa.type';
import Form from '../_components/form';
import List from '../_components/list';
import Stopwatch from '../_components/stopwatch';
import style from './app.module.scss';

function App() {
    const [ tarefas, setTarefas ] = useState<Array<ITarefa>>([]);

	return (
		<div className={style.AppStyle}>
			<Form setTarefas={setTarefas} />
			<List tarefas={tarefas} />
			<Stopwatch />
		</div>
	);
}

export default App;
