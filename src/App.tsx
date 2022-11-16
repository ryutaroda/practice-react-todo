import { useState } from "react";
import InputTodo from "./components/InputTodo";
import Todos from "./components/Todos";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const onChangeInputText = (event: any) => setInputText(event.target.value);
  const isDisabled = inputText ? false : true;
  const addTodo = () => {
    if (inputText === "") return;
    setTodos([...todos, inputText]);
    setInputText("");
  };
  return (
    <>
      <h1>Todoリスト</h1>
      <InputTodo
        inputText={inputText}
        onChange={onChangeInputText}
        disabled={isDisabled}
        onClick={addTodo}
      />
      <Todos todos={todos} />
    </>
  );
}
