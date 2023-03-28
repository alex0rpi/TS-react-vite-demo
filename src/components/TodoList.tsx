interface TodoListProps {
  items: { id: string; text: string }[];
}

// const TodoList:React.FC<TodoListProps> = (props) => {
const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
