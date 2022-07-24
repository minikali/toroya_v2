import useScrollPosition from '@hooks/useScrollPosition';
import useTopPosition from '@hooks/useTopPosition';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Logo from '@assets/img/logo_land.png';
import { Button } from 'react-bootstrap';
import s from './Header.module.scss';

const Header = () => {
  const isTopPosition = useTopPosition();

  useEffect(() => {
    console.log('y', isTopPosition);
  }, [isTopPosition]);

  console.log('rendering');

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.logo}>
          <Image src={Logo} alt='logo' />
        </div>
        <ul>
          <li>Accueil</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>
            <Button variant='outline-primary'>08 12 34 56 78</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
