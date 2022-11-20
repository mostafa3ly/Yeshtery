import AboutUs from "components/AboutUs";
import Contact from "components/Contact";
import Container from "components/Container";
import { FC } from "react";
import classes from "./styles.module.scss";
import Cash from "images/cash.png";
import Visa from "images/visa.png";
import Master from "images/master.png";
import { ReactComponent as Nasnav } from "images/nasnav.svg";

const Footer: FC = () => {
  return (
    <footer className={classes.root}>
      <Container>
        <div>
          <div className={classes.main}>
            <AboutUs />
            <div className={classes.horizontalDivider} />
            <Contact />
          </div>
          <div className={classes.divider} />
          <div className={classes.licence}>
            <span>© 2021 yeshtery, all rights reserved.</span>
            <div className={classes.payment}>
              <img alt="cash" src={Cash} height={40} />
              <img alt="visa" src={Visa} height={40} />
              <img alt="master" src={Master} height={40} />
            </div>
            <div className={classes.powered}>
              <span>Powered By</span>
              <Nasnav />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
