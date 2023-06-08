import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`container mx-auto max-sm:px-4 ${className}`}>
        {children}
    </div>
  )
}

export default Container