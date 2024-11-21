const BASE_URL = 'https://jsonplaceholder.typicode.com';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export async function getPhotos(id: number = 1) {
  const data = await fetch(`${BASE_URL}/albums/${id}/photos`, {
    cache: 'force-cache',
  }).then((res) => res.json());
  return data as Photo[];
}

export async function getPhoto(photoId: number) {
  const data = await fetch(`${BASE_URL}/photos/${photoId}`, {
    cache: 'force-cache',
  }).then((res) => res.json());
  return data as Photo;
}
