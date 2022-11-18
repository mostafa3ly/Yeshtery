import Button from "components/Button";
import { FC, useState } from "react";
import classes from "./styles.module.scss";
import { ReactComponent as Search } from "images/search.svg";

const SearchBox: FC = () => {
  const [placeholder, setPlaceholder] = useState("Search");

  const handleToggleFocus = (): void => {
    setPlaceholder((prevState) => (prevState ? "" : "Search"));
  };
  
  return (
    <form className={classes.root}>
      <Button type="button">
        <Search />
      </Button>
      <input
        onFocus={handleToggleFocus}
        onBlur={handleToggleFocus}
        className={classes.input}
        type="search"
        inputMode="search"
        placeholder={placeholder}
      />
    </form>
  );
};
export default SearchBox;
