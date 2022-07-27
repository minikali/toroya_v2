import React, { useState, useEffect } from 'react';

const useTopPosition = () => {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset === 0 || window.pageYOffset === undefined) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isTop;
};

export default useTopPosition;
