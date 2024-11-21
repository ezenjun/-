import Image from 'next/image';
import Modal from '@/components/Modal';
import { getPhoto } from '@/lib/photos';

type Params = {
  params: {
    photoId: number;
  };
};

export default async function Viewer({ params: { photoId } }: Params) {
  const photo = await getPhoto(photoId);

  return (
    <Modal>
      <h2>{photo.title}</h2>
      <Image src={photo.url} alt={photo.title} width={600} height={600} />
    </Modal>
  );
}
