export default function HelloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col border p-5'>
      <h1 className='text-2xl'>Hello {children}</h1>
      <a href='/hello/morning'>morning</a>
      <a href='/hello/afternoon'>afternoon</a>
      <a href='/hello/evening'>evening</a>
    </div>
  );
}
