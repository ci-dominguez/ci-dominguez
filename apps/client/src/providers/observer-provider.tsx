import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Observer } from 'tailwindcss-intersect';

export default function ObserverProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  useEffect(() => {
    Observer.start();
  }, []);

  useEffect(() => {
    Observer.restart();
  }, [location]);

  return <>{children}</>;
}
