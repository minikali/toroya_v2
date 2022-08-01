import React, { useState, useRef } from "react";
import Burger from "@components/Burger";
import Button from "react-bootstrap/Button";
import cn from "classnames";
import s from "./Navigation.module.scss";
import useOutsideClick from "@hooks/useOutsideClick";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  useOutsideClick(navRef, (event) => {
    setShowMenu(false);
  });

  return (
    <>
      <Burger active={showMenu} setActive={setShowMenu} />
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
