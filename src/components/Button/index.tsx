import { ButtonHTMLAttributes, FC } from "react";
import classes from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button {...props} className={classes.root.concat(" ", className)}>
      {children}
    </button>
  );
};
export default Button;
