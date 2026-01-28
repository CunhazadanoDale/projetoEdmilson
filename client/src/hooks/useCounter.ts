import { useEffect, useRef, useState } from 'react';

export const useCounter = (end: number, duration: number = 2000, shouldStart: boolean = true) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    const increment = end / (duration / 16); // 16ms per frame (60fps)
    
    const startCounter = () => {
      countRef.current = 0;
      
      intervalRef.current = setInterval(() => {
        countRef.current += increment;
        
        if (countRef.current >= end) {
          setCount(end);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        } else {
          setCount(Math.floor(countRef.current));
        }
      }, 16);
    };

    startCounter();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};
