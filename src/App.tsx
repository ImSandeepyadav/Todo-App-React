import React, { useState } from 'react';
import { Todo } from './types';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#ffa34772]">
      <h1 className="text-4xl font-bold mb-8 mt-8">Todo List</h1>
      <form onSubmit={handleFormSubmit} className="items-center mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border rounded p-2 mr-2 w-[400px]"
          placeholder="Add new task"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Add Task
        </button>
      </form>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
