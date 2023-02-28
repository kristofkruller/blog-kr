import React, { FC, Suspense } from 'react'
import OtherFields from './utils/OtherFields'

import styles from './articles.module.scss'

import { Article } from 'blog'
import SearchBox from './utils/SearchBox'
import LoadingScreen from '../tools/LoadingScreen'
import { SortByName } from './utils/SortBy'
import Link from 'next/link'

interface Collection {
  collection: Article[]
}

const Articles: FC<Collection> = ( { collection } ) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
    <section key="articleSection" className={styles.articleSection}>
      <SearchBox posts={collection} />
      <SortByName sortable={collection} />
      {collection.map(({ id, attributes }: Article) => (
        <>
          <Link href={`blog/${id}`} key={attributes.slug} className={styles.contentWrap}>
            <h2 className={styles.title}>{ attributes.title }</h2>
            <p className={styles.content}>{ attributes.description }</p>
            <OtherFields key={attributes.publishedAt}
              time={attributes.publishedAt && ( attributes.publishedAt )}
              categories={attributes.categories.data && ( attributes.categories )}
            />
          </Link>
        </>
      ))}
    </section>
    </Suspense>
  )
}

export default Articles