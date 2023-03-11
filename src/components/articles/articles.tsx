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
      {collection.map(({ title, slug, description, created_at, category_name }: Article) => (
        <>
          <Link href={`blog/${slug}`} key={slug} className={styles.contentWrap}>
            <h2 className={styles.title}>{ title }</h2>
            <p className={styles.content}>{ description }</p>
            <OtherFields key={created_at}
              time={created_at}
              categories={category_name}
            />
          </Link>
        </>
      ))}
    </section>
    </Suspense>
  )
}

export default Articles