import React from 'react'

const CardItem = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

const Header = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const Body = ({ children }) => {
  return (
    <div className='pt-4'>
      {children}
    </div>
  )
}

const Footer = ({ children }) => {
  return (
    <div className='text-primary text-2xl font-medium mt-3'>
      {children}
    </div>
  )
}

CardItem.Header = Header
CardItem.Body = Body
CardItem.Footer = Footer

export default CardItem