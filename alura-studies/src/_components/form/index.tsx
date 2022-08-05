import React from 'react';
import Button from '../button';

class Form extends React.Component {
  render() {
       return (
           <form>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                    <input type="text" name='tarefa' id='tarefa' placeholder='O que voçê quer estudar?' />
                </label>

                <label htmlFor="tempo">
                    <input type="time" step="1" name='tempo' id='tempo' min="00:00:00" max="01:30:00" required />
                </label>
                <Button />
           </form>
       )
    }
}

export default Form;