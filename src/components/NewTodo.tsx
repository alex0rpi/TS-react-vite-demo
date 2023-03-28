import { useRef } from 'react';

type Props = {};

const NewTodo = (props: Props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText)
  };

  return (
    <form onSubmit={addTodoHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
