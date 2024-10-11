import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '@/lib/photos';

export default async function PhotosPage() {
  const photos = await getPhotos();
  return (
    <div>
      <h1>Photos</h1>
      <div className='flex flex-row flex-wrap items-center gap-4'>
        {photos.map((photo) => (
          <Link key={photo.id} href={`/photos/${photo.id}`}>
            <Image
              width={150}
              height={150}
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
