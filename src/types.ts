export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}
