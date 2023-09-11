import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleClearCompleted = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  };

  const filteredTasks = filter === 'completed'
    ? tasks.filter(task => task.completed)
    : filter === 'pending'
      ? tasks.filter(task => !task.completed)
      : tasks;

  const taskCount = tasks.length;

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>To-Do List</h1>
      <div>
        <input className="border-black border-solid border-2 rounded-lg h-10 p-2" type="text" placeholder='Insira uma tarefa'
          value={task}
          onChange={handleInputChange}
        />
        <button className="h-10 rounded-lg border-2 border-black border-solid" onClick={handleAddTask}>Adicionar</button>
      </div>
      <ul className="h-screen rounded-lg border-2 border-black border-solid p-2">
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {task.text}{' '}
            <button onClick={() => handleDeleteTask(index)}>x</button>{' '}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
          </li>
        ))}
      </ul>
      <div>
        <p>{taskCount === 1 ? '1 tarefa' : `${taskCount} tarefas`}</p>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('completed')}>Concluídas</button>
        <button onClick={() => setFilter('pending')}>Pendentes</button>
        <button onClick={handleClearCompleted}>Limpar Concluídas</button>
      </div>
    </div>
  );
}

export default TodoList;
