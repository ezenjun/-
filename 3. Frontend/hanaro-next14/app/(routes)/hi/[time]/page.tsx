type Params = {
  params: {
    time: string;
  };
  searchParams: {
    q: string;
  };
};

export function generateStaticParams() {
  return ['morning', 'afternoon', 'evening', 'night'].map((time) => ({ time }));
}

export default function Time({
  params: { time },
  searchParams: { q },
}: Params) {
  return (
    <div className='capitalize'>
      Good {time}~<span>{q}</span>
    </div>
  );
}