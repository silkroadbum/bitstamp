import { useEffect, useState } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState<string>();

  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    let id = window.setTimeout(() => {
      setCurrentTime(time);
    }, 1000);
    return () => clearTimeout(id);
  }, [currentTime]);

  return <time>{currentTime}</time>;
}

export default Time;
