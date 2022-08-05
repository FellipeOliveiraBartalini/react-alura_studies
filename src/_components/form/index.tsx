import React from 'react';
import Button from '../button';
import style from './form.module.scss';

class Form extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    };

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('state > ', this.state);
        
    }

    render() {
        return (
            <form className={style.novaTarefa} method="POST" onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                        <input
                            type="text"
                            name='tarefa'
                            value={this.state.tarefa}
                            onChange={event => {this.setState({ ...this.state, tarefa: event.target.value })}}
                            id='tarefa'
                            placeholder='O que voçê quer estudar?' />
                    </label>
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        <input
                            type="time"
                            step="1"
                            name='tempo'
                            value={this.state.tempo}
                            onChange={event => {this.setState({ ...this.state, tempo: event.target.value })}}
                            id='tempo'
                            min="00:00:00"
                            max="01:30:00"
                            required />
                    </label>
                </div>
                <Button>Adicionar</Button>
            </form>
        )
    }
}

export default Form;