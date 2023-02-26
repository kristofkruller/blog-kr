"use client"

import { Category } from 'blog';
import React, { FC } from 'react'

import Moment from 'react-moment'

interface TimeProp {
  time: string;
  categories: Category;
}

const OtherFields:FC<TimeProp> = ( { time, categories } ) => {
  return (
    <>
      <Moment format="MMM Do /YYYY">
      { time }
      </Moment>
      <span key={time}>
        {categories.data.map(cat => (
          <p key={cat.attributes.slug}>{`#${cat.attributes.name}`}</p>
        ))}
      </span>
    </>
  )
}

export default OtherFields;