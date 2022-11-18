import { FC } from "react";
import classes from "./styles.module.scss";
import Button from "components/Button";
import { ReactComponent as Drawer } from "images/drawer.svg";
import { ReactComponent as Logo } from "images/logo.svg";
import { ReactComponent as ArrowLeft } from "images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "images/arrow-right.svg";
import { ReactComponent as Locate } from "images/locate.svg";
import { ReactComponent as ContactUs } from "images/contact-us.svg";
import { ReactComponent as Track } from "images/track.svg";
import Container from "components/Container";

const Headbar: FC = () => {
  return (
    <header className={classes.root}>
      <Container>
        <div className={classes.content}>
          <div className={classes.primary}>
            <Button className={classes.drawer}>
              <Drawer />
            </Button>
            <Logo />
          </div>
          <div className={classes.offers}>
            <Button>
              <ArrowLeft />
            </Button>
            <div className={classes.offer}>
              <p>Valentine’s Day Offers! Buy Two Get One Free&nbsp;</p>
              <a href="/" className={classes.shopNow}>
                Shop Now
              </a>
            </div>
            <Button>
              <ArrowRight />
            </Button>
          </div>
          <div className={classes.actions}>
            <Button>
              <ContactUs className={classes.buttonIcon} />
              Contact Us
            </Button>
            <Button>
              <Track className={classes.buttonIcon} />
              Track Order
            </Button>
            <Button>
              <Locate className={classes.buttonIcon} />
              Find A Store
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Headbar;
