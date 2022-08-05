import React from 'react';
import Button from '../button';
import './style.scss';

class Form extends React.Component {
  render() {
       return (
           <form className='novaTarefa'>
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                        <input type="text" name='tarefa' id='tarefa' placeholder='O que voçê quer estudar?' />
                    </label>
                </div>

                <div className="inputContainer">
                    <label htmlFor="tempo">
                        <input type="time" step="1" name='tempo' id='tempo' min="00:00:00" max="01:30:00" required />
                    </label>
                </div>
                <Button />
           </form>
       )
    }
}

export default Form;