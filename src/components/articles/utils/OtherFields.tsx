"use client"

import { Category } from 'blog';
import React, { FC } from 'react'

import Moment from 'react-moment'

interface TimeProp {
  time: string;
  // categories: Category[];
  categories: string;
}

const OtherFields:FC<TimeProp> = ( { time, categories } ) => {
  return (
    <>
      <Moment format="MMM Do /YYYY">
      { time }
      </Moment>
      <span key={time}>
        <p key={categories}>{`#${categories}`}</p>

        {/* {categories.map(({cat_id,category_name}) => (
          <p key={cat_id}>{`#${category_name}`}</p>
        ))} */}
      </span>
    </>
  )
}

export default OtherFields;