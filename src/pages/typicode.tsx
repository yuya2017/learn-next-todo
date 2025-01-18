import { useAPI } from '../hooks/useApi';
import type { Todo } from '@/types/todo';

const Todos = () => {
  const { data: todos, loading } = useAPI<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');

  if (loading) return <p>Loading...</p>;

  if (!todos) return <p>No todos found</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
