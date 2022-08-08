import React, { useState } from 'react';
import ITarefa from '../../types/tarefa.type';
import Button from '../button';
import style from './form.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Array<ITarefa>>>
}

function Form({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTime] = useState("00:00");

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

        setTime("00:00");
    }

    return (
        <form className={style.novaTarefa} method="POST" onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                    <input
                        type="text"
                        name='tarefa'
                        value={tarefa}
                        onChange={event => setTarefa(event.target.value)}
                        id='tarefa'
                        placeholder='O que voçê quer estudar?'
                        required    
                    />
                </label>
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                    <input
                        type="time"
                        step="1"
                        name='tempo'
                        value={tempo}
                        onChange={event => setTime( event.target.value )}
                        id='tempo'
                        min="00:00:00"
                        max="01:30:00"
                        required />
                </label>
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}

export default Form;