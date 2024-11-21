import Link from 'next/link';
import { ReactNode } from 'react';

export default function ParallelLayout({
  children,
  login,
  profile,
}: {
  children: ReactNode;
  login: ReactNode;
  profile: ReactNode;
}) {
  return (
    <>
      <h1 className='text-2xl'>Parallel Layout</h1>
      <Link href='/parallel/aaa'>aaa link</Link>
      <Link href='/parallel/bbb'>bbb link</Link>
      <div className='flex justify-between gap-4 border w-1/2'>
        <div className='flex w-full justify-center bg-red-300'>{login}</div>
        <div className='flex w-full justify-center  bg-yellow-200'>
          {profile}
        </div>
      </div>
      <hr className='h-2 w-full' />
      {children}
    </>
  );
}
