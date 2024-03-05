import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`container mx-auto md:container md:mx-auto sm:container sm:mx-auto ${className}`}>{children}</div>
  )
}

export default Container