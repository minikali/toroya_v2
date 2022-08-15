import DeliverooIcon from "@assets/svg/deliveroo.svg";
import JustEatIcon from "@assets/svg/just_eat.svg";
import UberEatIcon from "@assets/svg/uber_eat.svg";
import Image from "next/future/image";
import { Col, Row } from "react-bootstrap";
import s from "./Partner.module.scss";

const Partner = () => {
  return (
    <Row className={s.row}>
      <Col className={s.col} xs={12} md={4}>
        <Image src={DeliverooIcon} alt="Deliveroo Icon" />
      </Col>
      <Col className={s.col} xs={12} md={4}>
        <Image src={UberEatIcon} alt="Uber Eat iIcon" />
      </Col>
      <Col className={s.col} xs={12} md={4}>
        <Image src={JustEatIcon} alt="Just Eat Icon" />
      </Col>
    </Row>
  );
};

export default Partner;
