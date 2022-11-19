import { FC } from "react";
import classes from "./styles.module.scss";
import { ReactComponent as ThirtySixty } from "images/360.svg";
import Thumbnail from "images/thumbnail.png";
import Button from "components/Button";
import ArrowLeft from "images/arrow-left.png";
import ArrowRight from "images/arrow-right.png";
import Image1 from "images/image1.png";
import Image2 from "images/image2.png";
import Image3 from "images/image3.png";
import Image4 from "images/image4.png";

const GALLERY = [Image4, Image3, Image1, Image2];

const Gallery: FC = () => {

  const renderImages = (): JSX.Element[] =>
    GALLERY.map((image) => (
      <img alt={image} src={image} key={image} width={120} height={120} />
    ));

  return (
    <div>
      <div className={classes.thumbnail}>
        <img alt="thumbnail" src={Thumbnail} className={classes.image} />
        <Button className={classes.thirtySixty}>
          <ThirtySixty />
        </Button>
      </div>
      <div className={classes.gallery}>
        <Button>
          <img alt="left" src={ArrowLeft} height={24} />
        </Button>
        <div className={classes.images}>{renderImages()}</div>
        <Button>
          <img alt="right" src={ArrowRight} height={24} />
        </Button>
      </div>
    </div>
  );
};
export default Gallery;
