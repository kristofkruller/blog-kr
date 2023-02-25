import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss'

const Header = () => {

  return (
    <header className={styles.navBar}>
      <section className={styles.navWrap}>
        <Link className={styles.navLink} href="#services">services</Link>
        <Link className={styles.navLink} href="#portfolio">portfolio</Link>
        <Link className={styles.navLink} href="#contact">contact</Link>
        <Link className={styles.navLink} href="/blog">blog</Link>
        <Link className={styles.navLink} href="#about">about</Link>
      </section>
    </header>
  )
}

export default Header