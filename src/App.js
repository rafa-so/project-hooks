import React, { useState } from 'react';

function App() {

  const [ tarefas, setTarefas ] = useState([
    'Pagar a conta de luz',
    'Estudar React hook'
  ]);

  const [ input, setInput ] = useState(['']);

  function handleAdd(){
    setTarefas([ ...tarefas, input ]);
    setInput('');
  }

  return (
    <div>
      <h1>Tarefas</h1><br />
      <ul>
        { tarefas.map(tarefa => (
          <li key={ tarefa }> { tarefa } </li>
        )) }
      </ul>
      <br />

      <input type="text" value={ input } onChange={ (e) => setInput(e.target.value) }/>

      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
