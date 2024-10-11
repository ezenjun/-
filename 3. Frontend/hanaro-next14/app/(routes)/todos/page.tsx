import { getTodos } from '@/app/lib/todos';
import Link from 'next/link';

export const dynamic = 'force-static';

export default async function Todos() {
  const todos = await getTodos();

  return (
    <div className='flex flex-col'>
      <h1>Todo #1</h1>
      {todos.map((todo) => {
        return (
          <Link
            key={todo.id}
            className={`${todo.completed ? 'line-through' : 'font-extrabold'} `}
            href={`/todos/${todo.id}`}
          >
            <small>{todo.id}. </small>
            <small>{todo.title}</small>
          </Link>
        );
      })}
    </div>
  );
}
