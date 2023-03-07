"use client"

import React, { FC } from 'react';

import { Article } from 'blog';

interface DataProps {
  sortable: Article[];
}

export const SortByName: FC<DataProps> = ({ sortable }) => {

  const sortFn = () => {
    if (sortable.length < 1 || !sortable) return; 
    const extractValOfLetters = (article: Article): number => {
      let sum: number = 0;
      const subString = article.attributes.slug.split("-").join("").substring(0,7);
      for (let idx = 0; idx < subString.length; idx++) {
        sum += subString.charCodeAt(idx);
      }
      return sum;
    }

    sortable.sort( (a,b) => {
      if (extractValOfLetters(a) > extractValOfLetters(b)) return 1;
      if (extractValOfLetters(a) < extractValOfLetters(b)) return -1;
      return 0;
    });

  }

  return (
    <button onClick={sortFn}>Sort by name</button>
  )
}