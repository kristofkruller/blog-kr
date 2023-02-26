import React from 'react'

const page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div>page</div>
  )
}

export default page