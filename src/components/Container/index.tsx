import { FC, PropsWithChildren } from "react";
import classes from "./styles.module.scss";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};
export default Container;
