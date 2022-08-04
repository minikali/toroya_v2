import Button from "react-bootstrap/Button";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={s.img}>
      <div className={s.content}>
        <div className={s.titleWrap}>
          <h1>
            Des sushis rolls délicieux
            <br />
            rien que pour vous
          </h1>
          <Button className={s.btn} variant="outline-primary">
            Voir la carte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
