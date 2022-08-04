import Logo from "@assets/img/logo_land.png";
import Navigation from "@components/Navigation";
import useTopPosition from "@hooks/useTopPosition";
import cn from "classnames";
import Image from "next/image";
import s from "./Header.module.scss";

const Header = () => {
  const isTopPosition = useTopPosition();

  return (
    <header className={cn(s.header, { [s.transparent]: isTopPosition })}>
      <nav className={s.nav}>
        <div className={s.logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
