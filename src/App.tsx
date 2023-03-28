import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const todos = [{ id: '1', text: 'Become advanced in Typescript' }];

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Component to add todos */}
      <TodoList items={todos} />
      <NewTodo />
    </div>
  );
};

export default App;
