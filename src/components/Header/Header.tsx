import useTopPosition from "@hooks/useTopPosition";
import Image from "next/image";
import React from "react";
import Logo from "@assets/img/logo_land.png";
import cn from "classnames";
import s from "./Header.module.scss";
import Navigation from "@components/Navigation";

const Header = () => {
  const isTopPosition = useTopPosition();

  return (
    <header className={cn(s.header, { [s.transparent]: isTopPosition })}>
      <nav className={s.nav}>
        <div className={s.logo}>
          <Image src={Logo} alt="logo" />
        </div>
      </nav>
      <Navigation />
    </header>
  );
};

export default Header;
