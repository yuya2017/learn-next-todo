import { useAPI } from '../hooks/useApi';
import type { Todo } from '@/types/todo';

const Todos = () => {
  const todos = useAPI<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');

  if (!todos) return <p>Loading...</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
