import React from "react";
import icones from "./icones.json";
import styles from "./Menu.module.scss";
import Icone from "../Icone";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {icones.map((icone) => {
          return <Icone key={icone.id} icone={icone} style={styles} />;
        })}
      </ul>
    </nav>
  );
}
