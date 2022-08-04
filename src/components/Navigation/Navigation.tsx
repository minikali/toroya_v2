import Burger from "@components/Burger";
import useOutsideClick from "@hooks/useOutsideClick";
import cn from "classnames";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import s from "./Navigation.module.scss";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(navRef, (event) => {
    // Do not trigger on burger button
    // or it will trigger twice
    if (
      burgerRef &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target as Node)
    )
      setShowMenu(false);
  });

  return (
    <>
      <Burger
        ref={burgerRef}
        className={s.burger}
        active={showMenu}
        setActive={setShowMenu}
      />
      <ul ref={navRef} className={cn(s.navigation, { [s.active]: showMenu })}>
        <li>Accueil</li>
        <li>Menu</li>
        <li>Contact</li>
        <li>
          <Button variant="outline-primary">08 12 34 56 78</Button>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
