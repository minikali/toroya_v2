import Hero from '@components/Hero';
import Layout from '@layouts/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Col, Row, Container } from 'react-bootstrap';
import SushisOnTable from '@assets/img/sushis_on_table.png';
import DeliverooIcon from '@assets/svg/deliveroo.svg';
import UberEatIcon from '@assets/svg/uber_eat.svg';
import JustEatIcon from '@assets/svg/just_eat.svg';
import MarkerIcon from '@assets/svg/marker_icon.svg';
import PhoneIcon from '@assets/svg/phone_icon.svg';
import ClockIcon from '@assets/svg/clock_icon.svg';
import Gallery1 from '@assets/img/gallery/gallery_1.jpg';
import Gallery2 from '@assets/img/gallery/gallery_2.jpg';
import Gallery3 from '@assets/img/gallery/gallery_3.jpg';
import Gallery4 from '@assets/img/gallery/gallery_4.jpg';
import Gallery5 from '@assets/img/gallery/gallery_5.jpg';
import Gallery6 from '@assets/img/gallery/gallery_6.jpg';
import Gallery7 from '@assets/img/gallery/gallery_7.jpg';
import Gallery8 from '@assets/img/gallery/gallery_8.jpg';
import Gallery9 from '@assets/img/gallery/gallery_9.jpg';
import Gallery10 from '@assets/img/gallery/gallery_10.jpg';
import Gallery11 from '@assets/img/gallery/gallery_11.jpg';
import Gallery12 from '@assets/img/gallery/gallery_12.jpg';
import FacebookIcon from '@assets/svg/facebook_icon.svg';
import InstagramIcon from '@assets/svg/instagram_icon.svg';
import s from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Container>
        <Row>
          <Col>
            <Image src={SushisOnTable} alt='Sushis on table' />
          </Col>
          <Col>
            <h2>Bievenue chez Toroya</h2>
            <p>
              Découvrez notre ambiance chaleureuse, nous vous proposons une
              cuisine japonaise à la fois traditionnelle, contemporaine et
              savoureuse afin d&amp;éveiller vos papilles. Sur place, à emporter
              ou en livraison, dégustez nos traditionnels sushi, maki ou sashimi
              et découvrez nos plats signatures : Toroya rolls. Envie de chaud ?
              Nous proposons également des yakitori ! N&amp;hésitez plus et
              venez découvrir une cuisine authentique où finesse rime avec
              gourmandises.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2>Faite vous livrez avec nos partenaires</h2>
        <Row>
          <Col>
            <Image src={DeliverooIcon} alt='Deliveroo Icon' />
          </Col>
          <Col>
            <Image src={UberEatIcon} alt='Uber Eat iIcon' />
          </Col>
          <Col>
            <Image src={JustEatIcon} alt='Just Eat Icon' />
          </Col>
        </Row>
      </Container>
      <Container>
        <div>
          <h2>Sur place et à emporter</h2>
          <ul>
            <li>
              <Image src={ClockIcon} alt='Clock icon' />
              <p>
                <span>Ouvert 7/7j</span>
                <span>Midi:12h00 - 14h30</span>
                <span>Soir: 10h00 - 22h00</span>
              </p>
            </li>
            <li>
              <Image src={MarkerIcon} alt='Marker Icon' />
              <p>
                <span>42 Rue Pargaminière</span>
                <span>31000 Toulouse</span>
              </p>
            </li>
            <li>
              <Image src={PhoneIcon} alt='Phone icon' />
              <span>
                Réservation
                <br />
                et vente à emporter
              </span>
              <a href='tel:0561236792'>05 61 23 67 92</a>
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image src={Gallery1} alt='Gallery1' />
          </Col>
          <Col>
            <Image src={Gallery2} alt='Gallery2' />
          </Col>
          <Col>
            <Image src={Gallery3} alt='Gallery3' />
          </Col>
          <Col>
            <Image src={Gallery4} alt='Gallery4' />
          </Col>
          <Col>
            <Image src={Gallery5} alt='Gallery5' />
          </Col>
          <Col>
            <Image src={Gallery6} alt='Gallery6' />
          </Col>
          <Col>
            <Image src={Gallery7} alt='Gallery7' />
          </Col>
          <Col>
            <Image src={Gallery8} alt='Gallery8' />
          </Col>
          <Col>
            <Image src={Gallery9} alt='Gallery9' />
          </Col>
          <Col>
            <Image src={Gallery10} alt='Gallery10' />
          </Col>
          <Col>
            <Image src={Gallery11} alt='Gallery11' />
          </Col>
          <Col>
            <Image src={Gallery12} alt='Gallery12' />
          </Col>
        </Row>
      </Container>
      <Container>
        <h2>Suivez nous sur les réseaux</h2>
        <Row>
          <Col>
            <Image src={FacebookIcon} alt='Facebook icon' />
          </Col>
          <Col>
            <Image src={InstagramIcon} alt='Instagram icon' />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
