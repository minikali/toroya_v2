import React from "react";
import cn from "classnames";
import s from "./Burger.module.scss";

interface Props {
  active: boolean;
  setActive: (b: boolean) => void;
  ref: React.RefObject<HTMLElement>;
}

const Burger = React.forwardRef(({ active, setActive, ref }: Props) => {
  return (
    <div
      ref={ref}
      className={cn(s.burger, { [s.active]: active })}
      onClick={() => setActive(!active)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

export default Burger;
