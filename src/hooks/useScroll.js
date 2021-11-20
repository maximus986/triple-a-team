import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return scroll;
};
