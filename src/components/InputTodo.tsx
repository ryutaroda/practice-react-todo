type Props = {
  inputText: string;
  onChange: any;
  disabled: boolean;
  onClick: any;
};
export default function InputTodo({
  inputText,
  onChange,
  disabled,
  onClick
}: Props) {
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={onChange}
        placeholder="やることを入力"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </>
  );
}
