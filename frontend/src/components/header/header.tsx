import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss'

const Header = () => {

  return (
    <header className={styles.navBar}>
      <section key="navWrap" className={styles.navWrap}>
        <Link key="services" className={styles.navLink} href="#services">services</Link>
        <Link key="portfolio" className={styles.navLink} href="#portfolio">portfolio</Link>
        <Link key="contact" className={styles.navLink} href="#contact">contact</Link>
        <Link key="blog" className={styles.navLink} href="/blog">blog</Link>
        <Link key="about" className={styles.navLink} href="#about">about</Link>
      </section>
    </header>
  )
}

export default Header