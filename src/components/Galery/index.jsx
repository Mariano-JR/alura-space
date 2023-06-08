import React, { useState } from "react";
import Tags from "components/Tags";
import styles from "./Galery.module.scss";
import fotos from "./photos.json";
import Cards from "./Cards";

export default function Galery() {

  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(valor => valor.tag))]

  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter(foto => {
      return foto.tag === tag
    })

    setItens(novasFotos);
  }

  return (
    <section className={styles.galery}>
      <h2>Navegue pela galeria</h2>
      <Tags filtraFotos={filtrarFotos} tags={tags} setItens={setItens}/>
      <Cards itens={itens} styles={styles}/>
    </section>
  );
}
