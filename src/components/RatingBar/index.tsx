import { FC } from "react";
import classes from "./styles.module.scss";
import Button from "components/Button";
import { ReactComponent as Star } from "images/star.svg";
import { ReactComponent as StarActive } from "images/star-active.svg";

const RatingBar: FC = () => {
  return (
    <div className={classes.root}>
      <Button>
        <StarActive />
      </Button>
      <Button>
        <StarActive />
      </Button>
      <Button>
        <StarActive />
      </Button>
      <Button>
        <StarActive />
      </Button>
      <Button>
        <Star />
      </Button>
    </div>
  );
};
export default RatingBar;
