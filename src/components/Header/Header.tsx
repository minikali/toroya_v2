import useTopPosition from '@hooks/useTopPosition';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@assets/img/logo_land.png';
import { Button } from 'react-bootstrap';
import cn from 'classnames';
import s from './Header.module.scss';
import Burger from '@components/Burger';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isTopPosition = useTopPosition();

  return (
    <header className={cn(s.header, { [s.transparent]: isTopPosition })}>
      <nav className={s.nav}>
        <div className={s.logo}>
          <Image src={Logo} alt='logo' />
        </div>
        <Burger active={showMenu} setActive={setShowMenu} />
        {/* <ul>
          <li>Accueil</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>
            <Button variant='outline-primary'>08 12 34 56 78</Button>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
