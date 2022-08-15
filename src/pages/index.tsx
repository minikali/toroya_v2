import Gallery1 from "@assets/img/gallery/gallery_1.jpg";
import Gallery10 from "@assets/img/gallery/gallery_10.jpg";
import Gallery11 from "@assets/img/gallery/gallery_11.jpg";
import Gallery12 from "@assets/img/gallery/gallery_12.jpg";
import Gallery2 from "@assets/img/gallery/gallery_2.jpg";
import Gallery3 from "@assets/img/gallery/gallery_3.jpg";
import Gallery4 from "@assets/img/gallery/gallery_4.jpg";
import Gallery5 from "@assets/img/gallery/gallery_5.jpg";
import Gallery6 from "@assets/img/gallery/gallery_6.jpg";
import Gallery7 from "@assets/img/gallery/gallery_7.jpg";
import Gallery8 from "@assets/img/gallery/gallery_8.jpg";
import Gallery9 from "@assets/img/gallery/gallery_9.jpg";
import SushisOnTable from "@assets/img/sushis_on_table.png";
import ClockIcon from "@assets/svg/clock_icon.svg";
import FacebookIcon from "@assets/svg/facebook_icon.svg";
import InstagramIcon from "@assets/svg/instagram_icon.svg";
import MarkerIcon from "@assets/svg/marker_icon.svg";
import PhoneIcon from "@assets/svg/phone_icon.svg";
import Hero from "@components/Hero";
import Partner from "@components/Partner";
import Layout from "@layouts/Layout";
import type { NextPage } from "next";
import Image from "next/future/image";
import { Col, Container, Row } from "react-bootstrap";
import s from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Container>
        <Row>
          <Col xs={12} md={6} className={s.sushiOnTable}>
            <Image
              className={s.img}
              src={SushisOnTable}
              alt="Sushis on table"
            />
          </Col>
          <Col xs={12} md={6}>
            <h2 className={s.title}>Bievenue chez Toroya</h2>
            <p className={s.presentation}>
              Découvrez notre ambiance chaleureuse, nous vous proposons une
              cuisine japonaise à la fois traditionnelle, contemporaine et
              savoureuse afin d&apos;éveiller vos papilles. Sur place, à
              emporter ou en livraison, dégustez nos traditionnels sushi, maki
              ou sashimi et découvrez nos plats signatures : Toroya rolls. Envie
              de chaud ? Nous proposons également des yakitori ! N&apos;hésitez
              plus et venez découvrir une cuisine authentique où finesse rime
              avec gourmandises.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className={s.partner}>
        <h2 className={s.title}>Faite vous livrez avec nos partenaires</h2>
        <Partner />
      </Container>
      <Container className={s.informations}>
        <h2 className={s.title}>Sur place et à emporter</h2>
        <ul>
          <li>
            <Image src={ClockIcon} alt="Clock icon" />
            <p>
              <span>Ouvert 7/7j</span>
              <br />
              <span>Midi:12h00 - 14h30</span>
              <br />
              <span>Soir: 10h00 - 22h00</span>
            </p>
          </li>
          <li>
            <Image src={MarkerIcon} alt="Marker Icon" />
            <p>
              <span>42 Rue Pargaminière</span>
              <br />
              <span>31000 Toulouse</span>
            </p>
          </li>
          <li>
            <Image src={PhoneIcon} alt="Phone icon" />
            <p>
              <span>
                Réservation
                <br />
                et vente à emporter
              </span>
              <br />
              <a href="tel:0561236792">05 61 23 67 92</a>
            </p>
          </li>
        </ul>
      </Container>
      <Container className={s.gallery}>
        <Row>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery1} alt="Gallery1" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery2} alt="Gallery2" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery3} alt="Gallery3" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery4} alt="Gallery4" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery5} alt="Gallery5" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery6} alt="Gallery6" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery7} alt="Gallery7" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery8} alt="Gallery8" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery9} alt="Gallery9" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery10} alt="Gallery10" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery11} alt="Gallery11" />
          </Col>
          <Col className={s.col} xs={6} md={3} lg={2}>
            <Image className={s.img} src={Gallery12} alt="Gallery12" />
          </Col>
        </Row>
      </Container>
      <Container className={s.social}>
        <h2 className={s.title}>Suivez nous sur les réseaux</h2>
        <Row>
          <Col className={s.col}>
            <Image src={FacebookIcon} alt="Facebook icon" />
          </Col>
          <Col className={s.col}>
            <Image src={InstagramIcon} alt="Instagram icon" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
