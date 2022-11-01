import React from "react";

import styles from "./Search.module.scss";
import icon from "../../assets/img/search-icon.svg";
import iconClear from "../../assets/img/search-clear.svg";

import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/slices/searchSlice";
import debounce from "lodash.debounce";

export default function Input() {
  const [value, setValue] = React.useState("");
  const searchQuery = useSelector((state) => state.search.value);
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const clearClick = () => {
    setValue("");
    updateSearchValue("");
    inputRef.current.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchQuery(str));
    }, 500),
    []
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} alt="search icon img" src={icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchQuery && (
        <img
          onClick={clearClick}
          className={styles.clear}
          alt="search icon clear img"
          src={iconClear}
        />
      )}
    </div>
  );
}
