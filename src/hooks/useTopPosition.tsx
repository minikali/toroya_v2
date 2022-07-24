import React from 'react';
import useScrollPosition from './useScrollPosition';

const useTopPosition = () => {
  const { y } = useScrollPosition();

  return y === undefined || y === 0;
};

export default useTopPosition;
