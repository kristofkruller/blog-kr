import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss'

const Header = () => {

  return (
    <header className={styles.navBar}>
      <section key="navWrap" className={styles.navWrap}>
        <a key="services" className={styles.navLink} href="/#">home</a>
        <a key="portfolio" className={styles.navLink} href="/#portfolio">portfolio</a>
        <a key="contact" className={styles.navLink} href="/#contact">contact</a>
        <a key="about" className={styles.navLink} href="/#about">about</a>
        <Link key="blog" className={styles.navLink} href="/blog">blog</Link>
      </section>
    </header>
  )
}

export default Header