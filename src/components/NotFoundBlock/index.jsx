import React from "react";

import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
  return (
    <div className="container">
      <div className={styles.root}>
        <h1>Ничего не найдено</h1>
      </div>
    </div>
  );
}
