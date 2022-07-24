import React, { useState, useEffect } from 'react';

interface IPosition {
  x: number | undefined;
  y: number | undefined;
}

const useScrollPosition = (): IPosition => {
  const [position, setPosition] = useState<IPosition>({
    x: undefined,
    y: undefined,
  });

  const handleScroll = () => {
    setPosition({ x: window.pageXOffset, y: window.pageYOffset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
};

export default useScrollPosition;
