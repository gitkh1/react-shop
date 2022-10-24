import React from "react";

import styles from "./Search.module.scss";
import icon from "../../assets/img/search-icon.svg";

export default function Input({ searchQuery, setSearchQuery }) {
  return (
    <div className={styles.root}>
      <img className={styles.icon} alt="search icon img" src={icon} />
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
}
