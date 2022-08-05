import React from 'react';
import Form from '../_components/form';
import List from '../_components/list';
import style from './app.module.scss';

function App() {
	return (
		<div className={style.AppStyle}>
			<Form />
			<List />
		</div>
	);
}

export default App;