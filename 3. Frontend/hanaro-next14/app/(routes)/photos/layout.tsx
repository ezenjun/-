import { ReactNode } from 'react';

interface PhotoLayoutProps {
  children: ReactNode;
  viewer: ReactNode;
}

export default function PhotoLayout({ children, viewer }: PhotoLayoutProps) {
  return (
    <div>
      {children}
      {viewer}
    </div>
  );
}
