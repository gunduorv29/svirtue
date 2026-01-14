import { useState, useEffect } from 'react';

export const useCustomHook = (initialValue: number = 0) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    // Count changed effect - removed console.log for production
  }, [count]);

  return { count, increment, decrement };
};
