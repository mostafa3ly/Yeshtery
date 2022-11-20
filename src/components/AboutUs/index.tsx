import { FC } from "react";
import classes from "./styles.module.scss";
import Logo from "images/logo.png";

const AboutUs: FC = () => {
  return (
    <div className={classes.root}>
      <img alt="Yeshtery" src={Logo} width={220} />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <p>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
        vel eum iriure dolor in hendrerit in vulputate velit esse molestie
        consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit
        amet, consectetuer adipiscing elit sed dia
      </p>
      <p>
        m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis
      </p>
    </div>
  );
};
export default AboutUs;
