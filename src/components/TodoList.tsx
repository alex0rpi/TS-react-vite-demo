import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDelete: (todoId: string) => void;
}

// const TodoList:React.FC<TodoListProps> = (props) => {
const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {/* <button onClick={props.onDelete.bind(null, todo.id)}>❌</button> */}
          <button onClick={() => props.onDelete(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
