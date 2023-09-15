import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('tudo');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const adicionarTarefa = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completa: false }]);
      setTask('');
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      adicionarTarefa();
    }
  };

  const concluida = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const mudarConcluida = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completa = !updatedTasks[index].completa;
    setTasks(updatedTasks);
  };

  const limparConcluida = () => {
    const updatedTasks = tasks.filter(task => !task.completa);
    setTasks(updatedTasks);
  };

  const filteredTasks = filter === 'completa'
    ? tasks.filter(task => task.completa)
    : filter === 'pendente'
      ? tasks.filter(task => !task.completa)
      : tasks;

  const taskCount = tasks.length;

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='font-bold text-3xl'>To-Do List</h1>
      <div className='gap-2 flex flex-col flex-wrap h-[660px]  rounded-lg w-[500px] min-w-400 justify-center border-black border-solid border-2 font-mono font-semibold text-base p-4'>
          <div className=' grid gap-2'>
            <input className="border-black border-solid border-2 rounded-lg h-10 p-2" type="text" placeholder='Insira uma tarefa'
              value={task}
              onChange={handleInputChange} 
              onKeyPress={handleInputKeyPress}
            />
            <button className="h-10 rounded-lg border-2 border-black border-solid" onClick={adicionarTarefa}>Adicionar</button>
          </div>
          <div className="h-[450px] w-[460px] rounded-lg border-black border-solid border-2 p-3 max-h-400px overflow-y-auto">
            <ul className="w-full max-w-[400px] overflow-hidden">
              {filteredTasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between max-w-100"
                >
                  <div style={{ maxWidth: "80%" }}>{task.text}</div>
                  <div>
                    <button onClick={() => concluida(index)}>X</button>{" "}
                    <input
                      type="checkbox"
                      checked={task.completa}
                      onChange={() => mudarConcluida(index)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-row items-center justify-center gap-8">
            <p className=''>{taskCount === 1 ? '1 tarefa' : `${taskCount} tarefas`}</p>
            <button onClick={() => setFilter('tudo')}>Todas</button>
            <button onClick={() => setFilter('completa')}>Concluídas</button>
            <button onClick={() => setFilter('pendente')}>Pendentes</button>
            <button onClick={limparConcluida}>🗑️</button>
          </div>
        </div>
      </div>

  );
}

export default TodoList;
