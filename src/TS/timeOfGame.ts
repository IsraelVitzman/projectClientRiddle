
import { useEffect, useState } from "react";

export function useTime() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const stop = () => setIsRunning(false);

  return {
    minutes: Math.floor(count / 60),
    seconds: count % 60,
    totalSeconds: count,
    stop,
  };
}
