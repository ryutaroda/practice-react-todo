type Props = { todos: string[] };

export default function Todos({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo, i) => {
        return (
          <li key={i}>
            {todo}
            <button>削除</button>
          </li>
        );
      })}
    </ul>
  );
}
