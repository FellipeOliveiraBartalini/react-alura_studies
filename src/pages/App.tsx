import React from 'react';
import Form from '../_components/form';
import List from '../_components/list';
import Stopwatch from '../_components/stopwatch';
import style from './app.module.scss';

function App() {
	return (
		<div className={style.AppStyle}>
			<Form />
			<List />
			<Stopwatch />
		</div>
	);
}

export default App;
