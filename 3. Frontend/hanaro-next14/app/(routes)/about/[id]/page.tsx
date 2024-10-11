import { getTodos } from '@/app/lib/todos';

type Params = {
  params: {
    id: number;
  };
};

export async function generateStaticParams() {
  return (await getTodos(1)).map(({ id }) => ({
    id: id.toString(),
  }));
  // return [{ id: '1' }, { id: '2' }];
}

export default async function AboutTodo({ params: { id } }: Params) {
  const todos = await getTodos(1);
  const todo = todos.find((td) => td.id === +id);
  if (!todo) {
    return <h1 className='text-2xl text-red-500'>#{id} is not found</h1>;
  }
  return (
    <div className='flex flex-col'>
      <h1>About todo #{id}</h1>
      <strong
        key={todo.id}
        className={todo.completed ? 'line-through' : 'font-extrabold'}
      >
        {todo.title}
      </strong>
    </div>
  );
}
