import { useRouter } from 'next/router';

const TodoDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Todo Details</h1>
      <p>Todo ID: {id}</p>
    </div>
  );
};

export default TodoDetails;
