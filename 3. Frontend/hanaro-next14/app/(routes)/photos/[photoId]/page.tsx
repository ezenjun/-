'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import { getPhoto, type Photo } from '@/lib/photos';

type Params = {
  params: {
    photoId: number;
  };
};

export default function Photo({ params: { photoId } }: Params) {
  const [photo, setPhoto] = useState<Photo>();
  useLayoutEffect(() => {
    (async function () {
      const data = await getPhoto(photoId);
      setPhoto(data);
    })();
  }, [photoId]);

  const router = useRouter();
  const goList = () => {
    router.push('/photos');
  };
  return (
    <div>
      <h1>{photo?.title}</h1>
      {photo && (
        <Image
          src={photo.url}
          alt={photo.title}
          width={600}
          height={600}
          loading='lazy'
          onClick={goList}
        />
      )}
    </div>
  );
}
