import Link from 'next/link';

export default function Ic3page() {
  return (
    <div className='flex flex-col gap-3'>
      <h1>ic3 page org</h1>
      <Link href='/intercept/ic1'>IC1</Link>
      <Link href='/intercept/ic2'>IC2</Link>
      <Link href='/about'>About</Link>
    </div>
  );
}
