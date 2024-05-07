import React from 'react';
import { TodoItemProps } from './types';

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className="bg-white rounded shadow-md mb-2 flex items-center p-3 cursor-pointer">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="form-checkbox h-5 w-5 text-blue-600 mr-4 cursor-pointer"
      />
      <span className={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
