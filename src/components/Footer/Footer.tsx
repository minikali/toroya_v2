import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DeliverooIcon from '@assets/svg/deliveroo.svg';
import UberEatIcon from '@assets/svg/uber_eat.svg';
import JustEatIcon from '@assets/svg/just_eat.svg';
import FacebookIcon from '@assets/svg/facebook_icon.svg';
import InstagramIcon from '@assets/svg/instagram_icon.svg';
import LogoToroya from '@assets/img/logo_toroya.png';
import Image from 'next/image';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <Container className={s.footer} as='footer'>
      <Row>
        <Col xs={12}>
          <div className={s.schedule}>
            <h3>Horaires</h3>
            <p>
              <span>Ouvert 7/7j</span>
              <br />
              <span>Midi: 12h00 - 14h30</span>
              <br />
              <span>Soir: 19h00 - 22h00</span>
              <br />
            </p>
          </div>
          <div className={s.address}>
            <h3>Adresse</h3>
            <p>
              <span>42 Rue Pargaminière</span>
              <br />
              <span>31000 Toulouse</span>
            </p>
          </div>
          <div className={s.contact}>
            <h3>Contact</h3>
            <span>
              Tel:<a href='tel:0561236792'>05 61 23 67 92</a>
            </span>
          </div>
        </Col>
        <Col xs={12}>
          <div className={s.partner}>
            <h3>Nos partenaires</h3>
            <div>
              <Image src={DeliverooIcon} alt='Deliveroo Icon' />
              <Image src={UberEatIcon} alt='UberEat Icon' />
              <Image src={JustEatIcon} alt='JustEat Icon' />
            </div>
          </div>
          <div>
            <h3>Nous suivre</h3>
            <div>
              <Image src={FacebookIcon} alt='Facebook Icon' />
              <Image src={InstagramIcon} alt='Instagram Icon' />
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div>
            <h3>Vous nous faites confiance ***** (4.5/5)</h3>
            <Card>
              <Card.Title>Remi LAK</Card.Title>
              <Card.Body>Restaurant au top !!!</Card.Body>
            </Card>
          </div>
          <div>
            <h3>Information légales</h3>
            <ul>
              <li>
                <a href=''>Condition générales de ventes</a>
              </li>
              <li>
                <a href=''>Mentions légales</a>
              </li>
              <li>
                <a href=''>Condition générales d&amp;utilisation</a>
              </li>
              <li>
                <a href=''>Politique de confidentialité</a>
              </li>
              <li>
                <a href=''>Politique des cookies</a>
              </li>
              <li>
                <a href=''>Centre de préférence des cookies</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Image src={LogoToroya} alt='Logo torooya' />
        </Col>
        <Col>
          <span>
            © Toroya 2022 - <a href=''>www.toroya.fr</a>
          </span>
          <span>
            Site web par <a href=''>Rémi LAK</a>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
