import React, { FC } from 'react'
import OtherFields from './utils/OtherFields'

import styles from './articles.module.scss'

import { Article } from 'blog'
import SearchBox from './utils/SearchBox'

interface Collection {
  collection: Article[]
}

const Articles: FC<Collection> = ( { collection } ) => {

  return (
    <section className={styles.articleSection}>
      <h1>All blog posts</h1>
      {collection.map(({ id, attributes }: any) => (
        <div className={styles.contentWrap} key={ id }>
          <h2 className={styles.title}>{ attributes.title }</h2>
          <p className={styles.content}>{ attributes.description }</p>
          <OtherFields time={ attributes.publishedAt } />
        </div>
      ))}
      <SearchBox posts={collection} />
    </section>
  )
}

export default Articles