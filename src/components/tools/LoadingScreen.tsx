import React, { FC } from 'react'
import styles from './loadingScreen.module.scss'

const LoadingScreen: FC = () => {

  return (
    <section className={styles.loadingWrap}>
      <div className={styles.loading} />
    </section>
  )
}

export default LoadingScreen