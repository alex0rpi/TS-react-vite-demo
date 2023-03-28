import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [{ id: '1', text: 'Become advanced in Typescript' }];

  const todoAddHandler = (text: string) => {
    const newTodo = { id: Math.floor(Math.random() * 10 + 1).toString(), text };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      {/* Component to add todos */}
      <NewTodo onAdd={todoAddHandler} />
      <TodoList items={todos} onDelete={todoDeleteHandler} />
    </div>
  );
};

export default App;
