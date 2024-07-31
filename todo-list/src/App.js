import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>To-Do List</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new todo"
          style={{ padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '5px', width: '300px' }}
        />
        <button
          onClick={addTodo}
          style={{ padding: '10px 20px', fontSize: '1rem', border: 'none', borderRadius: '5px', marginLeft: '10px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: todo.completed ? '#c3e6cb' : '#f8f9fa', borderRadius: '5px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s ease' }}>
            <div style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: '1' }}>{todo.text}</div>
            <div>
              <button onClick={() => toggleCompleted(index)} style={{ marginRight: '5px', padding: '5px 10px', fontSize: '0.9rem', border: 'none', borderRadius: '5px', backgroundColor: todo.completed ? '#007bff' : '#28a745', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTodo(index)} style={{ padding: '5px 10px', fontSize: '0.9rem', border: 'none', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
