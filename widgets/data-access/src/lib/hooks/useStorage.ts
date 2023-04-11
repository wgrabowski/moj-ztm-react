import { useEffect, useState } from 'react';

export const useStorage = <T>(key: string, value: T) => {
  const [state, setState] = useState<T | null>(value);
  const localStorageValue = localStorage.getItem(key);

  useEffect(() => {
    if (localStorageValue !== null) {
      setState(JSON.parse(localStorageValue));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  const update = (to: T) => {
    setState(to);
    localStorage.setItem(key, JSON.stringify(to));
  };

  const remove = () => {
    setState(null);
    localStorage.removeItem(key);
  };

  return [state, update, remove] as [T, (_: T) => void, () => void];
};
