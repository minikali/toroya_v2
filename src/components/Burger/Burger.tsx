import cn from "classnames";
import React from "react";
import s from "./Burger.module.scss";

interface Props {
  active: boolean;
  setActive: (b: boolean) => void;
  className?: string
}

const Burger = React.forwardRef<HTMLDivElement, Props>(function Burger(
  { active, setActive, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(className, s.burger, { [s.active]: active })}
      onClick={() => setActive(!active)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

export default Burger;
