"use client"

import { Article } from 'blog';
import React, { FC, useState } from 'react'

interface DataProp {
  posts: Article[]
}

const SearchBox: FC<DataProp> = ( { posts } ) => {
  
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
  
  const filteredVal = posts.filter(post => {
    return (
      post.attributes.title.toLowerCase().includes(input.toLowerCase()) 
      || post.attributes.description.toLowerCase().includes(input.toLowerCase()) 
      || post.attributes.author.data.attributes.name.toLowerCase().includes(input.toLowerCase())
    );
  });
  
  return (
    <>
      <input 
        key="search"
        type="search"
        placeholder='Search in posts'
        onChange={handleChange}
      />
    {input.length > 0 ?
      <div key="filteredVal">{ filteredVal.map(val => <p key={val.id}>{val.attributes.title}</p>) }</div>  
    : <p key="hint">you can search by category, title, description or author</p> 
    }
    </>
  )
}

export default SearchBox