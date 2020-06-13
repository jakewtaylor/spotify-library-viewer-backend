import { useRef } from 'react';

export const useLazyRef = <T>(factory: () => T) => {
  const ref = useRef<T | null>(null);

  const getRef = () => {
    if (ref.current) return ref;

    const newVal = factory();
    ref.current = newVal;

    return ref;
  };

  return getRef();
};
