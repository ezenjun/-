export default function Nav() {
  return (
    <nav className='flex justify-center gap-8 p-6 shadow-md'>
      <a href='/' className='hover:text-blue-500'>
        Home
      </a>
      <a href='/about' className='hover:text-blue-500'>
        About
      </a>
      <a href='/shop/aaa' className='hover:text-blue-500'>
        Shop
      </a>
      <a href='/todos' className='hover:text-blue-500'>
        Todos
      </a>
    </nav>
  );
}
