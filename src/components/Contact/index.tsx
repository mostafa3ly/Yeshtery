import Button from "components/Button";
import { FC } from "react";
import classes from "./styles.module.scss";
import { ReactComponent as Subscribe } from "images/subscribe.svg";
import { ReactComponent as Facbook } from "images/facebook.svg";
import { ReactComponent as Twitter } from "images/twitter.svg";
import { ReactComponent as Linkedin } from "images/linkedin.svg";
import { ReactComponent as Instagram } from "images/instagram.svg";

const LIST = [
  "About Us",
  "Contact Us",
  "Track Order",
  "Terms & Conditions",
  "Privacy Policy",
  "Sell With Us",
  "Shipping And Returns",
];
const Contact: FC = () => {
  const renderList = (): JSX.Element[] =>
    LIST.map((item) => (
      <li key={item}>
        <a href="/">{item}</a>
      </li>
    ));
  return (
    <div className={classes.root}>
      <h6 className={classes.title}>Subscribe to our newsletter</h6>
      <div className={classes.subscribe}>
        <input placeholder="Enter Your Mail" />
        <Button>
          Subscribe
          <Subscribe />
        </Button>
      </div>
      <div className={classes.social}>
        <ul className={classes.list}>{renderList()}</ul>
        <div className={classes.horizontalDivider} />
        <div className={classes.pages}>
          <Button>
            <Facbook />
            <span>/Yeshtery</span>
          </Button>
          <Button>
            <Linkedin />
            <span>/Yeshtery</span>
          </Button>
          <Button>
            <Instagram />
            <span>/Yeshtery</span>
          </Button>
          <Button>
            <Twitter />
            <span>/Yeshtery</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
