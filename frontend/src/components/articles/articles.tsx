"use client"

import { Article } from 'blog'
import React, { FC } from 'react'
import Moment from 'react-moment'
import { ArticleHomeWrap, Content, ContentWrap, Title } from './articles.styles'

interface Collection {
  collection: Article[]
}

const Articles: FC<Collection> = ( { collection } ) => {

  return (
    <ArticleHomeWrap>
      <h1>All blog posts</h1>
      {collection.map(({ id, attributes }: any) => (
        <ContentWrap key={ id }>
          <Title>{ attributes.title }</Title>
          <Content>
            { attributes.description } 
            <br/> 
            <Moment format="MMM Do /YYYY">
              { attributes.publishedAt }
            </Moment>
          </Content>
        </ContentWrap>
      ))}
    </ArticleHomeWrap>
  )
}

export default Articles