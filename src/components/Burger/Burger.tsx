import React from 'react';
import cn from 'classnames';
import s from './Burger.module.scss';

interface Props {
  active: boolean;
  setActive: (b: boolean) => void;
}

const Burger = ({ active, setActive }: Props) => {
  return (
    <div
      className={cn(s.burger, { [s.active]: active })}
      onClick={() => setActive(!active)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;
