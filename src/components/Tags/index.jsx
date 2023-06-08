import React from 'react'
import styles from './Tags.module.scss'
import fotos from '../Galery/photos.json'

export default function Tags({ tags, filtraFotos, setItens }) {
  return (
    <div className={styles.tags}>
        <p>
            Filtre por tags:
        </p>
        <ul className={styles.tags__list}>
            {tags.map(tag => <li onClick={() =>  filtraFotos(tag)} key={tag}>{tag}</li>)}
        <li onClick={() => setItens(fotos)}>Todas</li>
        </ul>
    </div>
  )
}
