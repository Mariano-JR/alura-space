import React from 'react'
import fotos from './fotos-populares.json'
import styles from './Populares.module.scss'
import Button from 'components/Button'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {fotos.map(foto => {
                return (
                    <li key={foto.id}>
                        <img src={foto.path} alt={foto.alt} />
                    </li>
                )
            })}
        </ul>
        <Button> Ver mais fotos </Button>
    </aside>
  )
}
