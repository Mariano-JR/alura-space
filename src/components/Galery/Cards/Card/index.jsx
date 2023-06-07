import React from "react";
import open from "./open.png";
import favorito from "./favorito.png";

export default function Card({ item, styles }) {
  return (
    <li className={styles.galery__card}>
      <img
        className={styles.galery__image}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={styles.galery__description}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={favorito} alt="Icone coração de curtir" />
          <img src={open} alt="Icone de abrir modal" />
        </span>
      </div>
    </li>
  );
}
