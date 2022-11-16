export default function InputTodo() {
  return (
    <>
      <input
        type="text"
        value=""
        onChange={(e) => setInputText(e.target.value)}
        placeholder="やることを入力"
      />
      <button disabled={isDisabled()} onClick={addTodo}>
        追加
      </button>
    </>
  );
}
