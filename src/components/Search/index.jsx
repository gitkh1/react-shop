import React from "react";

import styles from "./Search.module.scss";
import icon from "../../assets/img/search-icon.svg";

import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/slices/searchSlice";

export default function Input() {
  const searchQuery = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <img className={styles.icon} alt="search icon img" src={icon} />
      <input
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
}
