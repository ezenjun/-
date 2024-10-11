import { getEachTodo } from '@/app/lib/todos';
import Link from 'next/link';

type Params = {
  params: {
    todoId: number;
  };
};

export const revalidate = 5;

export default async function EachTodo({ params: { todoId } }: Params) {
  const todo = await getEachTodo(+todoId);

  if (!todo.id) {
    throw new Error(`${todoId} is not found`);
  }
  return (
    <div className='flex flex-col'>
      <h1>About todo #{todoId}</h1>
      <strong
        key={todo.id}
        className={`${todo.completed ? 'line-through' : 'font-extrabold'} `}
      >
        {todo.title}
      </strong>
      <Link href='/todos'>go back</Link>
    </div>
  );
}
