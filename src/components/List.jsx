import React from 'react'

const List = ({className,text}) => {
  return (
    <li className={`font-dm text-sm font-normal text-third hover:text-primary cursor-pointer hover:text-orange-500 font-open ${className}`}>{text}</li>
  )
}

export default List