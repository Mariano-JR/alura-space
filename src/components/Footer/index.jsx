import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import styles from './Footer.module.scss'


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__icons}>
            <a  href="facebook.com"
                target='_blank'
                rel='noreferrer'>
                    <img src={facebook} alt="Facebook Icon" />
            </a>
            <a  href="instagram.com"
                target='_blank'
                rel='noreferrer'>
                    <img src={instagram} alt="Instagram Icon" />
            </a>
            <a  href="twitter.com"
                target='_blank'
                rel='noreferrer'>
                    <img src={twitter} alt="Twitter Icon" />
            </a>
        </div>
        <p>Desenvolvido por Mariano Júnior</p>
    </footer>
  )
}
