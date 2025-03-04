import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        // This gets rid of the FOCUS background colour as it blurs the current inputRef using a hook 
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Todo"
        className="input_box"
      ></input>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
