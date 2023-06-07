import React from "react";
import Tags from "../Tags";
import styles from "./Galery.module.scss";
import fotos from "./photos.json";
import Cards from "./Cards";

export default function Galery() {
  return (
    <section className={styles.galery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards itens={fotos} styles={styles}/>
    </section>
  );
}
