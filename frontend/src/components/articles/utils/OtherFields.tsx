"use client"

import React, { FC } from 'react'

import Moment from 'react-moment'

interface TimeProp {
  time: string;
}

const OtherFields:FC<TimeProp> = ( { time } ) => {
  return (
    <Moment format="MMM Do /YYYY">
    { time }
    </Moment>
  )
}

export default OtherFields;